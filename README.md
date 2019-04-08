This is a demo Electron application based on the [electron-quick-start](https://github.com/electron/electron-quick-start) repo and the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start) within the Electron documentation.

This is a sandbox for the Clear My Record team to experiment and learn Electron

**Resources we might find useful**

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs


## To Run from the Terminal

To clone and run this repository you'll need Node.js installed on your computer. We recommend `brew install node`.

From your command line:

```bash
# Clone this repository
git clone git@github.com:codeforamerica/cmr-electron-demo.git
# Go into the repository
cd cmr-electron-demo
# Install dependencies
npm install
# Run the app
npm start
```

## To Package and Run as a Desktop App

This app uses [electron-packager](https://github.com/electron-userland/electron-packager) to build executable versions of the app for various operating systems.

In order to run the packager for Windows, you need to have [Wine](https://www.winehq.org/) 1.6 or greater installed.
`brew install wine`

There are npm scripts to build executables for Mac and Windows (64 bit).
These scripts must be run from the project root.
 
 - `npm run package-osx`
 - `npm run package-windows-x64`
 
 The resulting executable will be saved in the project root. They are currently .gitignored so you will need to re-build them locally.
 
 NOTE: The default name for the osx package is `[APP-NAME]-darwin-x64`.