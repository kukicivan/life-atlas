# DevBox 🛠️

**One-command Ubuntu 24.04 (WSL2) development environment setup**

Perfect development stack installation for fresh Ubuntu WSL2 instances. Get from zero to fully configured development environment in minutes. Designed for disposable environments — spin up, develop, tear down.

## 🚀 Quick Start

```bash
# Clone and run
git clone git@gitlab.com:tech-talent-connect/devbox.git
cd devbox/wsl2
chmod +x install.sh
./install.sh
```

**That's it!** ✨ Logout/login and you're ready to code.

## 📦 What Gets Installed

### 🏗️ **Core Development**
- **Docker & Docker Compose** - Containerization platform
- **Portainer** - Docker management UI at `https://localhost:9443`
- **Git** - Pre-configured with user settings
- **Build tools** - Essential compilation tools

### 🤖 **AI & Runtime**
- **Claude Code** - AI-powered coding assistant
- **Node.js 20 & 22** - Via NVM for version management
- **Terminator** - Advanced terminal with enhanced scrollback

### ⚡ **Productivity Features**
- **Custom aliases** - 25+ time-saving shortcuts
- **Organized workspace** - `~/Development/` structure
- **Enhanced terminal** - Better scrolling and colors

## 📁 Development Workspace

```
~/Development/
├── Projects/
│   ├── Web/           # Web applications
│   ├── APIs/          # Backend services  
│   ├── Mobile/        # Mobile apps
│   ├── Desktop/       # Desktop applications
│   └── Other/         # Misc projects
├── Scripts/
│   ├── Bash/          # Shell scripts
│   ├── Python/        # Python utilities
│   └── Node/          # Node.js scripts
└── Docker/
    ├── Compose-Files/ # Docker compose configs
    ├── Volumes/       # Docker volumes
    └── Networks/      # Network configs
```

## ⚡ Quick Commands (Auto-loaded aliases)

### 📂 **Navigation**
```bash
dev        # cd ~/Development
projects   # cd ~/Development/Projects
scripts    # cd ~/Development/Scripts
```

### 🔧 **Git Shortcuts**
```bash
gs         # git status
ga         # git add .
gps        # git push
gpl        # git pull
gc         # git checkout -
gcd        # git checkout develop
gcm        # git checkout main
```

### 🐳 **Docker Shortcuts**
```bash
dps        # docker compose ps
dlog       # docker compose logs
dbuild     # docker compose up --build -d
dclean     # docker compose down -v --rmi local --remove-orphans
```

### 🎨 **Enhanced System**
```bash
ll         # Enhanced ls with colors and sorting
tree       # Git-aware tree with colors
plainTree  # ASCII tree structure
```

## 🔧 Requirements

- **Ubuntu 24.04 on WSL2** (optimized for, works on native Ubuntu too)
- **Sudo access** (script will ask for password)
- **Internet connection** (for downloads)
- **~2GB free space** (for all tools)

## 🎯 Perfect For

- 🆕 **Fresh WSL2 Ubuntu instances**
- 💻 **Disposable development environments**
- 🏢 **Team environment standardization**
- ⚡ **Quick development setup**
- 🔄 **System reinstalls/migrations**

## ⚙️ Post-Installation

### 🔑 **Important Notes**
- **Docker**: Logout/login required for permissions
- **Portainer**: Create admin account at first login
- **Claude Code**: Run `claude` to start, authenticate with `/login` on first use
- **Aliases**: Available in new terminals automatically

### 🌐 **Access Points**
- **Portainer**: https://localhost:9443
- **All development**: `~/Development/` directory

### 🔄 **Node.js Management**
```bash
nvm list           # Show installed versions
nvm use 20         # Switch to Node 20
nvm use 22         # Switch to Node 22
nvm alias default 22  # Set default version
```

## 🛠️ Customization

The script is designed to be modified. Key sections are clearly marked with section headers.

## 📋 Manual Steps (Optional)

### 🔐 **SSH Key Generation**
```bash
ssh-keygen -t ed25519 -C "ivan.kukic@gmail.com"
cat ~/.ssh/id_ed25519.pub  # Add to GitHub/GitLab
```

### 🎨 **Terminal Themes**
- Terminator themes: Right-click → Preferences → Profiles
- Install powerline fonts for better prompts

## 🐛 Troubleshooting

### ❌ **Docker Permission Issues**
```bash
sudo usermod -aG docker $USER
# Then logout/login
```

### 🔄 **Script Re-run**
The script is idempotent - safe to run multiple times.

### 🆘 **Get Help**
1. Check the script output logs
2. Verify Ubuntu version compatibility  
3. Ensure sudo access
4. Check internet connection

## 🤝 Contributing

This is a personal development setup, but improvements welcome:

1. Fork the repository
2. Create feature branch
3. Test thoroughly on clean Ubuntu 24.04
4. Submit pull request

## 📄 License

MIT License - Use freely for personal and commercial projects.

---

**Made with ❤️ by Ivan Kukic**  
*Perfect development environment, one command away.*