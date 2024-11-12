# True Select All

An Obsidian plugin that provides a true "Select All" functionality, allowing users to select all content in the current note, regardless of line breaks or delimiters. This plugin is particularly useful for iOS users, where the default "Select All" action may only select content between line breaks.

## Features

- **True Select All**: Selects all text within the current note, bypassing line breaks and other delimiters.
- **Slash Command Support**: Access the "True Select All" command via Obsidian’s `/` slash commands.
- **Customizable Shortcut**: Assign a keyboard shortcut for quick access.

> **Note for iOS Users:**  
> After using "True Select All" on iOS, you may notice that scrolling causes the visual highlight of the selected text to disappear. Despite this, the text is still selected and ready for copying or other actions. This is a common iOS behavior, where the selection highlight isn’t maintained during scrolling. For best results, avoid scrolling immediately after selecting all.

## Installation

### Manual Installation

1. **Download the Plugin**: Clone or download this repository.
   ```bash
   git clone https://github.com/username/true-select-all.git
   ```
2. **Move to Plugin Folder**: Copy the `true-select-all` folder to your Obsidian vault's plugins directory:
   ```
   .obsidian/plugins/
   ```
3. **Enable the Plugin**: Open Obsidian, go to **Settings** > **Community plugins**, and enable "True Select All".

### Using the Plugin

1. **Command Palette**: Open the Command Palette (`Ctrl+P` or `Cmd+P` on macOS) and search for "True Select All" to select all content in the current note.
2. **Slash Command**: Type `/select all` in the editor to trigger the command via the slash commands menu.
3. **Hotkey Assignment**: Go to **Settings** > **Hotkeys** in Obsidian, search for "True Select All," and assign a custom shortcut for quicker access.

## Contributing

Contributions are welcome! Feel free to submit a pull request with enhancements or bug fixes.

> **Note: Work in Progress**  
> This plugin is a work in progress and has not undergone extensive testing. While it seems to work on Windows and iOS, there may be unexpected issues on other platforms. Your feedback is appreciated to help improve functionality across different environments.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.