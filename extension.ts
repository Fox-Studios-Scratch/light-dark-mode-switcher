// extension.ts

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(vscode.commands.registerCommand('light-dark-mode-switcher.toggle', () => {
    const currentTheme = vscode.workspace.getConfiguration('workbench').get('colorTheme');

    if (currentTheme.includes('Dark')) {
      vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Light+');
    } else {
      vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Dark+');
    }
  }));
}
