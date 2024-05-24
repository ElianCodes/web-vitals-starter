# Astro Starter Kit: Web Vitals

## 🧠 Web Vitals

This starter kit includes a simple example of how to use Web Vitals with Astro & Astro Studio to measure the performance of your site.

## Instructions

1. Clone this repository
1. Run the install command for your packagemanager
1. Link your Astro project to [Astro Studio](https://studio.astro.build)
1. Enable the web-vitals app in Astro Studio (see pictures below)
1. Add your desired Astro Adapter to the code
1. Push your database to Astro Studio
1. Deploy your site

![./public/1.png](./public/1.png)
![./public/2.png](./public/2.png)
![./public/3.png](./public/3.png)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── layouts/
│       └── Default.astro
│   └── pages/
│       └── index.astro
│       └── page-2.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
