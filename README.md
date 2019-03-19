# frontmen.nl

[frontmen.nl](https://www.frontmen.nl)

The new frontmen.nl website for 2019, using Vue.js and Nuxt.

## Branch: NetliflyCMS + Markdownfikles

The branch markdown-netlifycms contains configuration and dependencies for markdown files working together with vue components + netflifyCMS. This was put on hold because of the added complexity and configuration (not a priority). The plan is to pick this setup up again after the new website is live.

Open issues:
- Using vue components in markdown files.
- Using vue components as netlify-CMS widgets

Todo:
- Structured CMS-content (Cases page-type, normal pages etc.)

For questions, please contact Zakaria or Sander.

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build with server-side rendering for production
# and start server
$ npm run build
$ npm start

# generate static project for production
$ npm run generate
```

See [starter template documentation in the README on GitHub](https://github.com/renestalder/nuxt-netlify-cms-starter-template) for additional usage and configuration.

## Edit content

Access `yourwebsite.com/admin`, e.g. `localhost:3000/admin`.
