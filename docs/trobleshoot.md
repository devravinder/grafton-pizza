

1. Relative path issue:
   in tsconfig.js
      under compiler options add  "baseUrl": "src",
    add vite-tsconfig-paths plug in vite-config.ts


2. eslint + prettier + husky + commit-lint configuration reference [link](https://theodorusclarence.com/shorts/husky-commitlint-prettier)


3. to add commands to husky
  create the corresponding file & add the commands

  $ echo "npm test" > .husky/pre-commit

