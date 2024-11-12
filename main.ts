import { Plugin, Editor } from 'obsidian';

declare module 'obsidian' {
  interface Plugin {
    addCommand(command: {
      id: string;
      name: string;
      editorCallback: (editor: Editor) => void;
      slashtags?: string[];
    }): void;
  }
}

export default class TrueSelectAllPlugin extends Plugin {
    async onload() {
      // Add the "True Select All" command with a slashtag
      this.addCommand({
        id: 'true-select-all',
        name: 'True Select All',
        editorCallback: (editor) => {
          const doc = editor.getDoc();
          const start = { line: 0, ch: 0 };
          const lastLine = doc.lastLine();
          const end = { line: lastLine, ch: doc.getLine(lastLine).length };
          editor.setSelection(start, end);
        },
        slashtags: ["select all", "select entire note", "true select all"], // Adds tags for slash command search
      });
    }
  
    onunload() {
      console.log('True Select All Plugin unloaded.');
    }
}