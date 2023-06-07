# Kep Kaeppeler Portfolio Site

This is the repository for Kep Kaeppeler's development portfolio site, bio, resume, and contact information.

## Resume

To update the resume, update links in the following components:

- Navbar
- About

Current resume: version 5.23.1

## Development

The site is built using React 18 with design elements from Material UI

This project was originally bootstrapped with create-react-app.  
It has been refactored and restructured to use Vite as the development server.

The components for this site originally were all Material UI components.  
I have since replaced the Material UI components with my own React components built from scratch to allow better customization with carefully structured CSS.

- The form submission uses https://formsubmit.co to forward email.
- The [Formik](https://formik.org/) library is used to manage the forms.
- The [Yup](https://www.npmjs.com/package/yup) library is used for form validation.

## Deployment

This page is currently deployed to
[https://kepweb.dev](https://kepweb.dev) hosted on Digital Ocean

## Next.js

The nextjs branch is currently under development and testing to refactor the site using [Next.js](https://nextjs.org/).

## Under Construction

- Explore JS line-clamp options to solve Safari issues
- Write a Tooltip component
- Write a Toast component
- Create page for each project
- Create more project screenshots
- Include website design portfolio
- Link to WebToSmart

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
