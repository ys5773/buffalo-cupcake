# Buffalo Cupcake Website – Web Design Coding Exercise

This project is a front-end recreation of the Buffalo Cupcake website, completed as part of a web design coding exercise for the Web Designer role at Odoo. The goal was to build a responsive website using only HTML, CSS, and Bootstrap 5, based on the provided brand assets and guidelines.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Features](#features)
- [Design Decisions](#design-decisions)
- [Getting Started](#getting-started)
- [Deployment Notes](#deployment-notes)
- [Acknowledgements](#acknowledgements)

## Overview

- Company: Buffalo Cupcake  
- Task: Recreate the homepage and contact page using Bootstrap 5  
- Requirements:
  - Use HTML, CSS, and Bootstrap 5 (no external site builders)
  - Ensure full responsiveness for both mobile and desktop
  - Include a custom header and footer on every page
  - Use provided brand images, logo, and fonts
  - Submit a ZIP or live link
  - Provide reasoning for any design or content changes

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5 (installed via npm)
- Google Fonts (Cabin Sketch and Arvo)
- Bootstrap Icons (CDN)

## Project Structure


BUFFALO_CUPCAKE_EXERCISE/
├── components/
│ ├── navbar.html
│ ├── footer.html
│ ├── menu.html
│ ├── cup-baker-section.html
│ ├── cup-collage.html
│ └── reviews.html
├── css/
│ └── style.css
├── images/
│ └── [brand and cupcake images]
├── js/
│ └── main.js
├── node_modules/
│ └── [Bootstrap and dependencies]
├── contact.html
├── index.html
├── package.json
├── package-lock.json
└── README.md


## Features

- Fully responsive homepage and contact page
- Reusable components (navbar, footer, menu, etc.) loaded dynamically via JavaScript
- Carousel for cupcake previews
- Grid layout collage section
- Baker bio and image section
- Reviews section with stars and user photos
- Contact form with map and structured inputs
- Accessibility and SEO improvements (alt text, semantic tags, heading hierarchy)

## Design Decisions

- Split repeatable elements (like the footer and navbar) into modular HTML components for cleaner code
- Used Bootstrap grid and utility classes to keep layout responsive without excessive custom CSS
- Enhanced readability by simplifying paragraphs and breaking long sections
- Styled using Cabin Sketch for headings and Arvo for body to reflect the brand’s playful and bold tone
- Prioritized a mobile-first approach for layout and spacing

## Getting Started

To run this project locally:

1. Clone the repository or download the ZIP file
2. Open a terminal and install Bootstrap via npm:

npm install


3. Open `index.html` or `contact.html` in your browser to preview the site

## Deployment Notes

This project uses Bootstrap via `node_modules`, which works for local development. For deployment (e.g., GitHub Pages), either:

- Replace Bootstrap file links with CDN versions
- Or copy necessary Bootstrap files into a `/vendor` or `/assets` directory

The `node_modules/` folder should not be included in deployment or ZIP submissions.

## Acknowledgements

- Buffalo Cupcake brand assets provided for the purpose of this design exercise
- Bootstrap 5 documentation: https://getbootstrap.com
- Google Fonts: https://fonts.google.com