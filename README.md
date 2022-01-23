
# Express.js Boilerplate + Deta

A boilerplate to create express APIs with automated deployments to Deta using github actions



## Installation

Checkout to the specified branch

```bash
  git checkout express-with-js-deta
```

Install dependencies

```bash
  npm install
```

To start the app in development

```bash
  npm run start:dev
```
    
## Environment Variables

When you run this project in development, it injects a dotenv script, you will need to create a .env file and add the following environment variables:

- `PORT` (optional)

For production you can create an additional .env file, for example `prod.env`, then for production to consume such environmental variables, you should run the following command using the Deta CLI:

```bash
  deta update -e prod.env
```

For additional data related to env vars: https://docs.deta.sh/docs/micros/env_vars


## Deployment

First thing you'll need to do is to create a Deta account: https://web.deta.sh/

Install the Deta CLI: https://docs.deta.sh/docs/cli/install

- Login to Deta using the Deta CLI:

```bash
  deta login
```

- From within the root of your project, run the following command using the Deta CLI:

```bash
  deta new --node --name <deta-name>
```

- A flag `--project <deta-project>` can be added to specify the deta project, if not present it will default to the default deta project:

```bash
  deta new --node --name <deta-name> --project <deta-project>
```

The previous command will create a `.deta` folder that you will need to commit to your repo.

NOTE: The name chosen to be the <deta-name> and the <deta-project> must be replace within the `.github/workflows/deploy.yml` file, similar modification must be done if you rename the current branch, update the triggers on the file mentioned

- After all of the previous steps are done, every push or merging via a pull request to the main branch will trigger the deployment to Deta automatically

You can take a look to Deta's `visor` for the application logs, and the url where the app is hosted can be found inside the Deta's dashboard, you just need to search for the project - aplication by name.



## Authors

- [David Marcos](https://www.github.com/davidamarcosp)


