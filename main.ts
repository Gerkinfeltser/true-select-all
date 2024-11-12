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
      });
    }
  
    onunload() {
      console.log('True Select All Plugin unloaded.');
    }
}