# Tekst.ai

This is the front-end of the Tekst.ai service. It's a project made by [Jan Deschacht](https://github.com/pgm-jandeschacht) commissioned by Arteveldehogeschool and [Tekst.ai](https://tekst.ai) as a final project for @Work5 en the associate degree Programming.

## Technical overview

The website is made in [Next.js](https://nextjs.org/) and uses [TypeScript](https://www.typescriptlang.org/). It also uses [ChartJS](https://www.chartjs.org/) for the graphics and charts.

## Setup and usage

The app uses **yarn** to install dependencies and to run the website as well.

### Install dependencies

Run ```yarn install``` to install all dependencies.

### Environment variables

Make a file called `.env-local` in the root directory of the project and add the following lines:

```
NEXT_PUBLIC_PROFILE_ENDPOINT=/static/data/user.json
NEXT_PUBLIC_CATEGORIES_ENDPOINT=/static/data/categoryList.json
NEXT_PUBLIC_DASHBOARD_ENDPOINT=/static/data/dashboard.json
NEXT_PUBLIC_TOTAL_EMAILS_ENDPOINT=https://categorize.tekst.ai:5000/count
NEXT_PUBLIC_CMS_ENDPOINT=https://strapi-lhft.onrender.com/graphql
```

### Run the website

Run ```yarn dev``` to run the website locally. This will start the server and prompt you to open [localhost:3000](https://localhost:3000). Here you can access the website.

### Local build

To experience the performance and to test the build locally, you can run ```yarn build``` to build the website. This will create a folder called `build` in the root directory of the project. afterward you can run ```yarn start``` to run the website.

## Deployment

All the necessary commands and variables are in the render.yaml file. A push to the main will trigger a build and a deploy.

## Live site

The website is deployed on [http://app.tekst.dev.s3-website-eu-west-1.amazonaws.com/](http://app.tekst.dev.s3-website-eu-west-1.amazonaws.com/).

## Login

At the moment the login is not implemented so you cas use whatever email you want. As long as it is formatted correctly, it will work.