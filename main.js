"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const obsidian_1 = require("obsidian");
class TrueSelectAllPlugin extends obsidian_1.Plugin {
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    onunload() {
        console.log('True Select All Plugin unloaded.');
    }
}
exports.default = TrueSelectAllPlugin;
