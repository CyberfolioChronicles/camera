# Developing

## Dependencies

- Node 18+
- yarn berry (`corepack enable` , `corepack yarn set version berry`)
- `corepack yarn`

## Running

- Copy .env.example to .env: `cp .env.example .env`
- Adjust `PUBLIC_ROTOCLEAR_IP` to match the ip of your device

To start the development server run

```bash
yarn dev

# or start the server and open the app in a new browser tab
yarn dev -- --open
```

## Building

To create a production version of your app:

```bash
yarn build
```

You can preview the production build with `yarn preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
