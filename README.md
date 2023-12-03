

## directory

``` lang
# vite-boot
├─.husky                                  # Stores Git Hooks related configuration files
│  └─_                                    # Stores Git Hooks execution scripts
├─.vscode                                 # Stores VS Code related configuration files
├─public                                  # Stores static resources required by the web application
├─src                                     # Stores the source code of the web application
│  ├─assets                               # Stores static resources required by the web application
│  ├─components                           # Stores the components of the web application
│  │  └─Icon                              # Stores the components representing icons
│  ├─config                               # Stores the configuration files of the web application
│  │  ├─nprogress                         # Stores the configuration file of the progress bar library NProgress
│  │  └─unocss                            # Stores the configuration file of the UnoCSS
│  ├─constants                            # Stores the constant values used in the web application
│  ├─layouts                              # Stores the layout components of the web application
│  │  ├─Footer                            # Stores the layout component representing the footer of the page
│  │  └─Navbar                            # Stores the layout component representing the navigation bar of the page
│  │      └─components                    # Stores the child components of the Navbar layout component
│  │          ├─LocalesChange             # Stores the child component representing language switch
│  │          └─ThemeChange               # Stores the child component representing theme switch
│  ├─locales                              # Stores the content files of the web application's multiple languages
│  ├─router                               # Stores the routing configuration files of the web application
│  │  └─routes                            # Stores the modules of the web application's routes
│  │      └─modules                       # Stores the sub-modules of the routing modules of the web application
│  ├─store                                # Stores the state management files of the web application
│  ├─styles                               # Stores the style files of the web application
│  └─views                                # Stores the page components of the web application
│      ├─errorPages                       # Stores the components representing error pages
│      └─home                             # Stores the components representing the homepage
│          └─components                   # Stores the child components of the homepage components
├─test                                    # Stores the test code
│  └─__snapshots__                        # Stores the Jest snapshot test results
└─types                                   # Stores the TypeScript type declaration files

```

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/kirklin/vite-boot/generate).

### Clone to local

```bash
npx degit kirklin/vite-boot my-vite-app
cd my-vite-app
pnpm i
```

## Usage

### Development

Just run and visit http://localhost:8888

```bash
pnpm run dev
```

### Build

To build the App, run

```bash
pnpm run build
```

And you will see the generated file in `dist` that ready to be served.

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select your clone, `OK` along the way, and your App will be live in a minute.

### Docker Production Build

First, build the vite-boot image by opening the terminal in the project's root directory.

```bash
docker buildx build . -t viteboot:latest
```

Run the image and specify port mapping with the `-p` flag.

```bash
docker run --rm -it -p 8080:80 viteboot:latest
```
