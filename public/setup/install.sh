#!/bin/bash

# Development Stack Setup Script
# Complete development environment installation for Ubuntu 24.04
# Author: Ivan Kukic <ivan.kukic@gmail.com>
# Version: 2.0

set -e

# Colors for better output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
    exit 1
}

log "🔧 Starting Development Stack Setup..."

# Check if running as root
if [[ $EUID -eq 0 ]]; then
   error "This script should not be run as root. Please run as a regular user."
fi

# Check Ubuntu version
if ! grep -q "24.04" /etc/os-release; then
    warn "This script is optimized for Ubuntu 24.04. Continue? (y/n)"
    read -r continue_choice
    if [[ $continue_choice != "y" && $continue_choice != "Y" ]]; then
        exit 0
    fi
fi

# Function for installing Snap packages
install_snap() {
    local package="$1"
    local flags="$2"
    
    if ! snap list | grep -q "^$package "; then
        log "📦 Installing $package via snap..."
        sudo snap install "$package" $flags
    else
        log "✅ $package is already installed"
    fi
}

# Function for installing APT packages
install_apt() {
    local package="$1"
    
    if ! dpkg -s "$package" >/dev/null 2>&1; then
        log "📦 Installing $package via apt..."
        sudo apt install -y "$package"
    else
        log "✅ $package is already installed"
    fi
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Update system
log "🔄 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# ===== BASIC DEVELOPMENT ENVIRONMENT =====
log "🏗️ Installing basic development tools..."

# Essential build tools
install_apt "build-essential"
install_apt "software-properties-common"
install_apt "apt-transport-https"
install_apt "ca-certificates"
install_apt "gnupg"
install_apt "lsb-release"

# Version control
install_apt "git"

# Configure Git if not already configured
if [ -z "$(git config --global user.name)" ] || [ -z "$(git config --global user.email)" ]; then
    log "🔧 Configuring Git..."
    git config --global user.name "Ivan Kukic"
    git config --global user.email "ivan.kukic@gmail.com"
    git config --global init.defaultBranch main
    git config --global pull.rebase false
    log "✅ Git configured with user: Ivan Kukic <ivan.kukic@gmail.com>"
else
    log "✅ Git is already configured"
fi

# System utilities
install_apt "tree"
install_apt "curl"
install_apt "wget"
install_apt "unzip"
install_apt "zip"
install_apt "htop"
install_apt "neofetch"
install_apt "jq"

# ===== DOCKER INSTALLATION =====
log "🐳 Installing Docker..."

if ! command_exists docker; then
    log "📦 Installing Docker..."
    
    # Remove old versions
    sudo apt remove -y docker docker-engine docker.io containerd runc 2>/dev/null || true
    
    # Install Docker's official GPG key
    sudo install -m 0755 -d /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    sudo chmod a+r /etc/apt/keyrings/docker.gpg
    
    # Add Docker repository
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    
    # Update apt and install Docker
    sudo apt update
    install_apt "docker-ce"
    install_apt "docker-ce-cli"
    install_apt "containerd.io"
    install_apt "docker-buildx-plugin"
    install_apt "docker-compose-plugin"

    # Add user to docker group
    sudo usermod -aG docker "$USER"
    
    # Enable and start Docker service
    sudo systemctl enable docker
    sudo systemctl start docker
    
    warn "You need to logout and login again for Docker to work without sudo"
else
    log "✅ Docker is already installed"
fi

# Install Docker Compose (standalone) - backup for older systems
if ! command_exists docker-compose; then
    log "📦 Installing Docker Compose standalone..."
    DOCKER_COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | jq -r .tag_name)
    sudo curl -L "https://github.com/docker/compose/releases/download/${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
else
    log "✅ Docker Compose is already installed"
fi

# ===== PORTAINER SETUP =====
log "📊 Setting up Portainer..."

# Create Portainer volume
sudo docker volume create portainer_data 2>/dev/null || true

# Check if Portainer container exists
if ! sudo docker ps -a --format 'table {{.Names}}' | grep -q "^portainer$"; then
    log "📦 Starting Portainer container..."
    sudo docker run -d \
        -p 8000:8000 \
        -p 9443:9443 \
        --name portainer \
        --restart=always \
        -v /var/run/docker.sock:/var/run/docker.sock \
        -v portainer_data:/data \
        portainer/portainer-ce:latest

    log "✅ Portainer is running!"
    log "🌐 Access Portainer at: https://localhost:9443"
    warn "On first access, you need to create an admin account"
else
    log "✅ Portainer container already exists"
    # Start if stopped
    sudo docker start portainer 2>/dev/null || true
    log "🌐 Portainer is accessible at: https://localhost:9443"
fi

# ===== IDEs AND EDITORS =====
log "💻 Installing IDEs and editors..."

# Visual Studio Code
if ! command_exists code; then
    log "📦 Installing Visual Studio Code..."
    wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
    sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
    sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
    sudo apt update
    install_apt "code"
    
    # Install useful VS Code extensions
    log "📦 Installing VS Code extensions..."
    code --install-extension ms-vscode.vscode-typescript-next
    code --install-extension esbenp.prettier-vscode
    code --install-extension bradlc.vscode-tailwindcss
    code --install-extension ritwickdey.liveserver
    code --install-extension ms-python.python
    code --install-extension ms-vscode.powershell
else
    log "✅ Visual Studio Code is already installed"
fi

# WebStorm
if ! command_exists webstorm; then
    log "📦 Installing WebStorm..."
    install_snap "webstorm" "--classic"
else
    log "✅ WebStorm is already installed"
fi

# Free alternative to Sublime Text - Geany or Mousepad
if ! command_exists geany; then
    log "📦 Installing Geany (free text editor)..."
    install_apt "geany"
    install_apt "geany-plugins"
else
    log "✅ Geany is already installed"
fi

# ===== ADDITIONAL DEVELOPMENT TOOLS =====
log "🛠️ Installing additional development tools..."

# Postman for API testing
install_snap "postman"

# Terminator - advanced terminal
install_apt "terminator"

# Configure Terminator for better scrollback
mkdir -p ~/.config/terminator
cat > ~/.config/terminator/config << 'EOF'
[global_config]
  title_transmit_bg_color = "#d30102"
  focus = system
[keybindings]
[profiles]
  [[default]]
    icon_bell = False
    background_color = "#300a24"
    background_darkness = 0.85
    background_type = transparent
    cursor_color = "#aaaaaa"
    font = Ubuntu Mono 12
    foreground_color = "#ffffff"
    scrollback_lines = 10000
    palette = "#2e3436:#cc0000:#300a24:#c4a000:#3465a4:#75507b:#06989a:#d3d7cf:#555753:#ef2929:#8ae234:#fce94f:#729fcf:#ad7fa8:#34e2e2:#eeeeec"
    copy_on_selection = True
    scroll_on_keystroke = True
    scroll_on_output = False
[layouts]
  [[default]]
    [[[window0]]]
      type = Window
      parent = ""
    [[[child1]]]
      type = Terminal
      parent = window0
[plugins]
EOF

log "✅ Terminator configured with extended scrollback (10000 lines)"

# Network tools
install_apt "net-tools"
install_apt "nmap"

# ===== WEB BROWSER =====
log "🌐 Installing web browsers..."

# Brave Browser
if ! command_exists brave-browser; then
    log "📦 Installing Brave Browser..."
    sudo curl -fsSLo /usr/share/keyrings/brave-browser-archive-keyring.gpg https://brave-browser-apt-release.s3.brave.com/brave-browser-archive-keyring.gpg
    echo "deb [signed-by=/usr/share/keyrings/brave-browser-archive-keyring.gpg arch=amd64] https://brave-browser-apt-release.s3.brave.com/ stable main" | sudo tee /etc/apt/sources.list.d/brave-browser-release.list
    sudo apt update
    install_apt "brave-browser"
else
    log "✅ Brave Browser is already installed"
fi

# ===== NODE.js VIA NVM =====
log "📦 Installing Node.js via NVM..."

# Install NVM
if [ ! -d "$HOME/.nvm" ]; then
    log "📦 Installing NVM..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    
    # Source NVM immediately
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
    
    # Install Node.js versions 18 and 20
    log "📦 Installing Node.js 18..."
    nvm install 18
    
    log "📦 Installing Node.js 20..."
    nvm install 20
    
    # Set Node.js 20 as default
    nvm use 20
    nvm alias default 20
    
    # Install global npm packages
    log "📦 Installing global npm packages..."
    npm install -g yarn pm2 nodemon
else
    log "✅ NVM is already installed"
fi

# ===== DEVELOPMENT WORKSPACE CREATION =====
log "📁 Creating development workspace..."

# Create directory structure
mkdir -p ~/Development/{Projects,Scripts,Docker,Backups}
mkdir -p ~/Development/Projects/{Web,APIs,Mobile,Desktop,Other}
mkdir -p ~/Development/Docker/{Compose-Files,Volumes,Networks}
mkdir -p ~/Development/Scripts/{Bash,Python,Node}

# Create a README file in the Development directory
cat > ~/Development/README.md << 'EOF'
# Development Workspace

This directory contains all development-related projects and tools.

## Structure

- **Projects/** - All development projects organized by type
  - Web/ - Web applications and websites  
  - APIs/ - Backend APIs and services
  - Mobile/ - Mobile applications
  - Desktop/ - Desktop applications
  - Other/ - Miscellaneous projects

- **Scripts/** - Utility scripts organized by language
  - Bash/ - Shell scripts
  - Python/ - Python utilities
  - Node/ - Node.js scripts

- **Docker/** - Docker-related files
  - Compose-Files/ - Docker Compose configurations
  - Volumes/ - Docker volume data
  - Networks/ - Network configurations

- **Backups/** - Project backups and archives

## Quick Start

1. Navigate to the appropriate project type directory
2. Clone or create your project
3. Use the Scripts directory for automation utilities
4. Docker configurations go in Docker/Compose-Files/

Happy coding! 🚀
EOF

# ===== BASH ALIASES SETUP =====
log "⚡ Setting up bash aliases..."

# Create .bash_aliases file with custom aliases
cat > ~/.bash_aliases << 'EOF'
# Bash
alias ll='ls -lG --color --group-directories-first -A -v -S'
alias tree='tree --gitignore --dirsfirst -C'
alias plainTree='find . | sed -e "s/[^-][^\/]*\// |/g" -e "s/|\([^ ]\)/|-\1/"'

# Git
alias gs="git status"
alias ga="git add ."
alias gps="git push"
alias gpl="git pull"
alias gb="git branch"
alias gba="git branch -a"
alias gfp="git fetch --prune"
alias gc="git checkout -"
alias gcd="git checkout develop"
alias gcm="git checkout main"
alias grc="git restore . && git clean -f"
alias grcn="git restore . && git clean -fn"


# Docker
alias dps="docker-compose ps"
alias dlog="docker-compose logs"
alias dclean="docker-compose down -v --rmi local --remove-orphans"
alias dbuild="docker-compose up --build -d"

# Development navigation
alias dev='cd ~/Development'
alias projects='cd ~/Development/Projects'
alias scripts='cd ~/Development/Scripts'
alias dcompose='cd ~/Development/Docker/Compose-Files'

# System shortcuts
alias ..='cd ..'
alias ...='cd ../..'
alias grep='grep --color=auto'
alias fgrep='fgrep --color=auto'
alias egrep='egrep --color=auto'
EOF

# Make sure .bash_aliases is sourced in .bashrc
if ! grep -q "\.bash_aliases" ~/.bashrc; then
    echo "" >> ~/.bashrc
    echo "# Load custom aliases" >> ~/.bashrc
    echo "if [ -f ~/.bash_aliases ]; then" >> ~/.bashrc
    echo "    . ~/.bash_aliases" >> ~/.bashrc
    echo "fi" >> ~/.bashrc
fi

log "✅ Bash aliases configured"

# ===== SYSTEM CLEANUP =====
log "🧹 Cleaning up system..."
sudo apt autoremove -y
sudo apt autoclean

# ===== FINAL SUMMARY =====
echo ""
log "🎉 Development Stack Setup completed successfully!"
echo ""
echo -e "${BLUE}📧 Installed tools include:${NC}"
echo "   • Containerization: Docker, Docker Compose, Portainer"
echo "   • IDEs: VS Code (with extensions), WebStorm, Geany"
echo "   • Version Control: Git (configured for Ivan Kukic <ivan.kukic@gmail.com>)"
echo "   • API Testing: Postman"
echo "   • Terminal: Terminator (configured with extended scrollback)"
echo "   • Runtime: Node.js 18 & 20 via NVM with npm, yarn, pm2, nodemon"
echo "   • Browser: Brave Browser"
echo "   • System: htop, neofetch, jq, network tools"
echo ""
echo -e "${BLUE}📁 Development workspace created in ~/Development/${NC}"
echo "   • Projects organized by type (Web, APIs, Mobile, Desktop, Other)"
echo "   • Scripts directory for utilities"
echo "   • Docker configurations directory"
echo "   • README.md with workspace documentation"
echo ""
echo -e "${BLUE}🔗 Custom aliases loaded from ~/.bash_aliases:${NC}"
echo "   • Git: gc, gcd, gs, ga, gcm, gps, gpl, gb, gba, gfp, grc, grcn"
echo "   • Docker: dps, dlog, dclean, dbuild"
echo "   • Navigation: dev, projects, scripts, dcompose"
echo "   • System: ll (enhanced ls), tree, plainTree"
echo "   • Laravel: sail"
echo ""
echo -e "${BLUE}🌐 Services:${NC}"
echo "   • Portainer Web UI: https://localhost:9443"
echo ""
echo -e "${YELLOW}⚠️ IMPORTANT NOTES:${NC}"
echo "   • Logout/login required for Docker to work without sudo"
echo "   • WebStorm: Launch with 'webstorm' command or desktop shortcut"
echo "   • Portainer: Create admin account on first access"
echo "   • New aliases available after opening new terminal or running: source ~/.bashrc"
echo ""

# Ask for reboot
read -p "Would you like to restart the system now for all changes to take effect? (y/n): " restart_choice
if [[ $restart_choice == "y" || $restart_choice == "Y" ]]; then
    log "🔄 Rebooting system..."
    sudo reboot
else
    warn "Please remember to logout/login or reboot later for Docker permissions to take effect"
    log "🚀 Setup complete! Open a new terminal to use the new aliases."
fi