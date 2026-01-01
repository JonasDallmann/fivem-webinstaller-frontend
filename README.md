# FiveM Auto-Installer Frontend

![Version](https://img.shields.io/badge/status-Alpha%20v1-blue)
![License](https://img.shields.io/badge/license-MIT-green)

A modern, user-friendly web interface for the **FiveM Auto-Installer**. This tool simplifies the process of setting up a FiveM server with txAdmin and an optional MySQL database by automating the SSH commands and configuration.

## 🌟 Features

- **🚀 One-Click Installation**: Easily install FiveM Artifacts and txAdmin.
- **🛠 Optional Database**: Automatically install and configure MariaDB/MySQL and phpMyAdmin if needed.
- **🖥 SSH Integration**: Connects securely to your server via SSH (requires backend).
- **🛡 Safety Mechanisms**:
  - Detects port conflicts (e.g., port 40120 or 22).
  - Identifies existing installations to prevent accidental data loss.
  - Checks for web server conflicts (Apache2 vs. phpMyAdmin).
- **🌑 Modern UI**: Dark mode interface built with React and Tailwind CSS.

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** (comes with Node.js)

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/JonasDallmann/fivem-webinstaller-frontend.git
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

4. **Build for Production**
   To create an optimized build for deployment:
   ```bash
   npm run build
   ```
   The output files will be generated in the `dist` directory.

## 📖 Usage

1. **Launch the Interface**: Open the application in your browser.
2. **Configure Connection**:
   - **Host**: Your server's IP address (e.g., `192.168.1.10`).
   - **Port**: SSH port (default is `22`).
   - **User**: System user (usually `root`).
   - **Password**: The password for the system user.
3. **Database Options**: Toggle "Install MySQL Database" if you want a fresh MariaDB installation. You will be asked to provide a root password for the database.
4. **Start Install**: Click the "Start Installation" button.
5. **Monitor Progress**: Watch the logs and status. If conflicts occur (e.g., server already exists), you will be prompted to resolve them or force the installation.
6. **Completion**: Upon success, you will receive your **txAdmin PIN** and the URL to access the admin panel.

## 🔒 Privacy & Security

- **No Credential Storage**: We do **not** store your SSH username, password, or private keys. They are only used temporarily to establish the connection for the installation process.
- **Logging**: The application uses Discord Webhooks to log installation status (success/fail) and errors to help us improve the tool. No sensitive credentials are sent via these logs.

## ⚠️ Disclaimer

This project is currently in **Alpha (v1)**.
- **Use at your own risk.**
- Always **backup** your data before running the installer on a production server.
- This project is **not** affiliated with, authorized, or endorsed by FiveM, Rockstar Games, or txAdmin.

## 👨‍💻 Credits

Created by **1337jxnas**.
Special thanks to all contributors and the FiveM community.

**Note:** If you use this project or parts of it for your own purposes, please ensure that you provide proper credits to the original author.

## 🤝 Contributing

Issues and Pull Requests are welcome! Please check the [Issues](https://github.com/JonasDallmann/fivem-webinstaller-frontend/issues) page to report bugs or request features.