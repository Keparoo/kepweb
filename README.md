# Kep Kaeppeler Portfolio Site

This is the repository for Kep Kaeppeler's development portfolio site, bio, resume, and contact information.

## Resume

To update the resume, update the links in the following components:

- Navbar
- About

Current resume: version 5.23.1

## Development

The site is built using React 18.

This project was originally bootstrapped with the create-react-app.  
It has been refactored and restructured to use Vite as the development server.

The web components for this site were originally implemented using Google's Material UI library.  
The Material UI components have been replaced with custom-built React components to allow better customization with carefully structured CSS.

- The form submission uses https://formsubmit.co to forward email.
- The [Formik](https://formik.org/) library is used to manage the forms.
- The [Yup](https://www.npmjs.com/package/yup) library is used for form validation.

## Deployment

This page is currently deployed to
[https://kepweb.dev](https://kepweb.dev) hosted on Digital Ocean

## Next.js

The nextjs branch is currently under development and testing with the plan to refactor and migrigte the site to [Next.js](https://nextjs.org/).

## Under Construction

- Explore JS line-clamp options to solve Safari compatibility issues
- Write a Toast component
- Video filename project
- Create a page for each project
- Create more project screenshots
- Link to website design portfolio
- Link to WebToSmart
- Web Analytics
- Create Blog page
- Update project cards
- Move project hosting

---

## Available scripts

To compile the files and start the development server on `localhost:5713`

```bash
npm start
```

To create a production build and save in ./dist folder

```bash
npm build
```

To start a local web server that serves the production build storted in ./dist (preview the production build locally)

```bash
npm preview
```

## Contributors

This entire website, tests, and all documentation was designed and developed by Kep Kaeppeler, copyright 2022
