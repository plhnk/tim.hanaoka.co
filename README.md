[![Netlify Status](https://api.netlify.com/api/v1/badges/83356698-0317-4472-bc33-2f4aa7bacfc1/deploy-status)](https://app.netlify.com/sites/dazzling-mccarthy-03c22b/deploys)

# Tim Hanaoka's Portfolio Site

_Based on Sanity's [example-company-website-gatsby-sanity-combo](https://github.com/sanity-io/example-company-website-gatsby-sanity-combo)._

- [Features](#features)
- [Installation](#installation)
- [Enable Gatsby watch mode for drafts](#enable-gatsby-watch-mode-for-drafts)
- [Usage example](#usage-example)
- [Development setup](#development-setup)
  - [Run it](#run-it)
  - [Development workflow](#development-workflow)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

**See the live site at [tim.hanaoka.co](https://tim.hanaoka.co)!**

## Features

- 📡 Real-time content preview in development
- ⏱ Fast & frugal builds
- 🗃 No accidental missing fields/types
- 🧰 Full Render Control with Portable Text
- 📸 gatsby-image support
- 🔧 Minimal configuration

**Sanity Studio with a schema for**

- 🏢 My Info
- 📃 Pages
- 👨🏼‍🎨 Projects
- 👩🏾‍💻 People

## Installation

Read the [step-by-step blog post](https://www.sanity.io/blog/how-to-quickly-set-up-a-gatsby-js-jamstack-website-with-a-headless-cms).

```sh
git clone git@github.com:plhnk/tim.hanaoka.co.git
cd tim.hanaoka.co
npm install

# Install or upgrade the Sanity CLI to
# make sure you are on v0.140.0 or higher
npm install -g @sanity/cli
# Set up Sanity.io account and project (≈ 45s)
npm run init

```

_See Sanity's [getting started video](https://www.youtube.com/watch?v=qU4lFYp3KiQ) for a walkthrough of the installation._

## Enable Gatsby watch mode for drafts

We have enabled the watch mode in the `gatsby-source-sanity` plugin, which means that your frontend will automatically update with content changes whenever you publish them. If you want the frontend to show content changes in real time, you must do the following:

- Go to [manage.sanity.io](https://manage.sanity.io) and find your project (or run the command `sanity manage` in the studio folder)
- Navigate to Settings->API and scroll down to the **Tokens** section
- Add a new token and give it **read** privileges.
- Copy the `.env-example` file to a file called `.env` in the `/web` folder
- Add your new token to the key: `SANITY_TOKEN="<token here>"`

If you restart the local development server, it will now show unpublished changes from the Studio. Note that the `.env` file is ignored by Git, because the token gives access to unpublished content in the API.

## Development setup

### Run it

```sh
npm start
# Studio at http://localhost:3333
# Web frontend at http://localhost:8000
# GraphiQL explorer at http://localhost:8000/___graphql
```

### Development workflow

- The Sanity Studio keeps its schemas in `./studio/schemas`. The editor hot reloads when you edit them so just start experimenting. [Read more about schemas here](https://www.sanity.io/docs/content-studio/the-schema).
- This follows Gatsby conventions and [you can read all about them here](https://www.gatsbyjs.org/tutorial/).
- If you want Gatsby to not throw errors on missing fields for unpopulated data you need to redeploy the GraphQL API so we can generate schemas – `npm run graphql-deploy`

## Deployment

```sh
# Deploy a GraphQL API and schema to Sanity
npm run graphql-deploy

# Deploy the Sanity Studio to *.sanity.studio
npm run sanity-deploy
```

> **Currently deployed on Netlify:**
> Settings are in the `netlify.toml` config.
>
> There's a [webhook](https://www.sanity.io/docs/webhooks) in place so there's a new deploy whenever content changes.

## Contributing

1. [Fork it](https://https://github.com/plhnk/tim.hanaoka.co/fork)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License

MIT
