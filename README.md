# Blogful API

## Postgrator
- `npm i postgrator-cli@3.2.0 -d`
    - avoid windows compatibility issues by locking to version 3.2
- Setup `./postgrator-config.js`
- `npm i pg` to install pg driver (also needed for knex)
- Add script in `package.json` with `"migrate": "postgrator --config postgrator-config.js"`
- Run with `npm run migrate -- 1` to migrate to step 1

## Seed the DB
- `psql -U dunder_mifflin -d blogful -f ./seeds/seed.blogful_articles.sql`

