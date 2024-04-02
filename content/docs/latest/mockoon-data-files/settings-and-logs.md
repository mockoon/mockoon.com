---
title: Settings and logs
meta:
  title: Settings and logs
  description: Learn where Mockoon's desktop application settings and log files are located for each operating system
order: 1130
---

# Settings and logs

---

Depending on your operating system, Mockoon's settings and log files are located in different folders.

## Application settings

Mockoon's settings are always stored in your operating system's user folder:

- Windows: `c:/Users/{username}/AppData/Roaming/mockoon/storage`
- Windows Portable: `{PORTABLE_EXECUTABLE_DIR}/mockoon-data/storage`
- Linux: `~/.config/mockoon/storage`
- Linux Snap: `~/snap/mockoon/common`
- macOS: `~/Library/Application Support/mockoon/storage`

## Application logs

Mockoon's logs are located in the following folders:

- Windows: `c:/Users/{username}/AppData/Roaming/mockoon/logs/app.log`
- Windows Portable: `{PORTABLE_EXECUTABLE_DIR}/mockoon-data/logs/app.log`
- Linux: `~/.config/mockoon/logs/app.log`
- Linux Snap: `~/snap/mockoon/common/logs/app.log`
- macOS: `~/Library/Logs/Mockoon/app.log`
