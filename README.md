# TS-React

Introduction for integrating TypeScript in React projects.

## Generate a new React Project with TypeScript support built in

```bash
npx create-react-app <appName> --template typescript
```

## Run the app locally

> ./rts

```bash
npm start
```

## Add Prettier default formatter for TS

1. Open the command palette (either with F1 or Ctrl+Shift+P)
2. Type "open settings"
3. You are presented with two options, choose "Open Settings (JSON)"
4. Add the following code to settings.json:

```json
{
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
