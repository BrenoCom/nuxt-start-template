# Nuxt 3 Starter

This template has testing features, database, commit linter, eslint and prettier already configured.

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.


## Setup
Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server
Start the development server on `http://localhost:3000` and Postgress database at `http://localhost:5432`:
Note that this template assumes that you have Docker.

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Test
Test your application:

```bash
# npm
npm run test

# pnpm
pnpm run test

# yarn
yarn test

# bun
bun run test
```

## Code Lint
Lint your code with `eslint` and `prettier`

```bash
# npm
npm run lint:prettier:check
npm run lint:eslint:check

# pnpm
pnpm run lint:prettier:check
pnpm run lint:eslint:check

# yarn
yarn lint:prettier:check
yarn lint:eslint:check

# bun
bun run lint:prettier:check
bun run lint:eslint:check
```

## Commit Lint
Commit Patterns with `conventional-commits`:

```bash
# npm
git add -A
npm run commit

# pnpm
git add -A
pnpm run commit

# yarn
git add -A
yarn commit

# bun
git add -A
bun run commit
```

## Production
Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
