# Startup Website

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Quick Start

### Pre-requisites

Make sure you have `node` v16.13.1 installed with npm v8.1.2.
If not, it is recommended to install it using nvm (https://github.com/nvm-sh/nvm#install--update-script).

```shell
node --version
v16.13.1

npm --version
v8.1.2
```

### Install npm dependencies

```shell
npm install
```

### Start App

Run Application using command:

```shell
npm start
```

### Build App

The following command is used to create a build:

```shell
npm run build
```

### App Other Script Commands

#### The following commands used for different cases:

To check and fixing the `linting` in project

```shell
npm run lint

npm run lint:fix
```

To check and fixing the `formatting` in project

```shell
npm run format
```

To generate `svg icon as component` and its `stories`

```shell
npm run sync-icons
```

To generate `fully tested build`

```shell
npm run is-ready

```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
