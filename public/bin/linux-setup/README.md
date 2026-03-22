# DevBox

One-command development environment setup for Ubuntu 24.04. Two variants: full desktop Ubuntu and lightweight WSL2.

## Quick Start

```bash
git clone git@gitlab.com:tech-talent-connect/devbox.git
cd devbox
```

**Ubuntu Desktop** (full setup with GUI apps):
```bash
cd ubuntu && chmod +x install.sh && ./install.sh
```

**WSL2** (headless, no GUI apps):
```bash
cd wsl2 && chmod +x install.sh && ./install.sh
```

## Structure

```
devbox/
├── ubuntu/
│   ├── install.sh    # Full desktop Ubuntu setup
│   └── README.md     # Detailed docs for ubuntu variant
├── wsl2/
│   ├── install.sh    # Lightweight WSL2 setup
│   └── README.md     # Detailed docs for wsl2 variant
└── README.md         # This file
```

## What's Included

### Common (both variants)

| Category | Tools |
|----------|-------|
| Containerization | Docker, Docker Compose (v2 plugin), Portainer |
| Version Control | Git (pre-configured) |
| Runtime | Node.js 20 & 22 LTS via NVM, yarn, pm2, nodemon |
| AI | Claude Code |
| Terminal | Terminator (configured with 10k scrollback) |
| System | build-essential, curl, wget, jq, htop, neofetch, nmap, net-tools |
| Productivity | 25+ bash aliases (git, docker, navigation), organized `~/Development/` workspace |

### Differences

| Feature | Ubuntu | WSL2 |
|---------|:------:|:----:|
| Visual Studio Code + extensions | yes | - |
| WebStorm (snap) | yes | - |
| Geany + plugins | yes | - |
| Brave Browser | yes | - |
| Postman (snap) | yes | - |
| Snap support required | yes | - |
| GUI apps | yes | - |

The WSL2 variant removes all GUI applications and snap packages, since WSL2 environments are typically headless and snap is not supported out of the box. IDEs are installed on the Windows host side instead.

## Workspace Layout

Both variants create the same directory structure:

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

## Aliases (both variants)

| Alias | Command |
|-------|---------|
| `gs` | `git status` |
| `ga` | `git add .` |
| `gps` | `git push` |
| `gpl` | `git pull` |
| `gc` | `git checkout -` |
| `gcd` | `git checkout develop` |
| `gcm` | `git checkout main` |
| `dps` | `docker compose ps` |
| `dlog` | `docker compose logs` |
| `dbuild` | `docker compose up --build -d` |
| `dclean` | `docker compose down -v --rmi local --remove-orphans` |
| `dev` | `cd ~/Development` |
| `projects` | `cd ~/Development/Projects` |
| `ll` | Enhanced `ls` with colors and sorting |

## Post-Installation

- **Docker**: logout/login required for group permissions
- **Portainer**: create admin account at https://localhost:9443
- **Claude Code**: run `claude`, authenticate with `/login` on first use
- **WebStorm** (ubuntu only): requires JetBrains license

## Requirements

- Ubuntu 24.04 (native or WSL2)
- Sudo access
- Internet connection
- ~2GB free space

Both scripts are idempotent — safe to run multiple times.

## License

MIT License

---

**Made with ❤️ by Ivan Kukic**
