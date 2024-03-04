# Vial Takehome Assignment [![Deploy](https://github.com/Zjjc123/vial-takehome/actions/workflows/main.yml/badge.svg)](https://github.com/Zjjc123/vial-takehome/actions/workflows/main.yml)

<center>
<img src="./docs/home.png" alt="Home" width="50%"/>
</center
>

### Table of Contents

- [Set Up](#set-up)
- [Development](#development)
  - [Start the development server](#start-the-development-server)
  - [Run linter](#run-linter)
  - [Run storybook](#run-storybook)
- [Deploy](#deploy)
- [Tooling](#tooling)
- [Implemented Functionalities](#implemented-functionalities)
  - [Filtering](#filtering)
  - [Sort by attributes (ascending)](#sort-by-attributes-ascending)
  - [Additional](#Additional)
- [Acknowledgement](#acknowledgement)

# Set Up

Clone the repository

```bash
git clone https://github.com/Zjjc123/vial-takehome.git
cd vial-takehome
```

Install dependencies

```bash
npm install
```

# Development

### Start the development server on http://localhost:5173/vial-takehome/

```bash
npm run dev
```

### Run linter

```bash
npm run lint
```

### Run storybook (isolated component development)

```bash
npm run storybook
```

<p float="left">
<img src="./docs/storybook1.png" alt="Storybook" width="45%"/>
<img src="./docs//storybook2.png" alt="Storybook" width="45%"/>
</p>

# Deploy

The app is deployed on GitHub Pages. The deployment is automated with GitHub Actions.

https://zjjc123.github.io/vial-takehome/

<center>
<img src="./docs/action.png" alt="Deploy" width="70%"/>
</center>

# Tooling

### Vite

I picked Vite (react typescript template) as the build tool for this project. It provides a faster development experience and better performance compared to CRA

### Mantine

I used Mantine for the UI components. It was recommended in the specs and I found it to be a great library with a lot of useful components like Menu and Inputs. It also has the theme feature which I used for the light/dark mode.

### Storybook

I used Storybook for isolated component development. It was very helpful in developing and testing the components individually.

# Implemented Functionalities

<center>
<img src="./docs/toolbar.png" alt="Deploy" width="60%"/>
</center>

## Filtering

- Name (search bar)
- Age (range slider)
- Gender (dropdown)
- Diagnosis date (calendar range)
- Status (dropdown)

<center>
<img src="./docs/filter.png" alt="Deploy" width="20%"/>
</center>

## Sort by attributes (ascending)

- Name
- Age
- Diagnosis Date

<center>
<img src="./docs/sort.png" alt="Deploy" width="20%"/>
</center>

## Additional

### Pagination

<center>
<img src="./docs/page.png" alt="Deploy" width="60%"/>
</center>

### Skeleton Cards and animated Loader on loading

<center>
<img src="./docs/skeleton.png" alt="Deploy" width="60%"/>
</center>

### Light/Dark mode with mantine

<p>
<img src="./docs/light.png" alt="Deploy" width="45%"/>
<img src="./docs/dark.png" alt="Deploy" width="45%"/>
</p>

### Mobile accessibility (flexbox)

<center>
<img src="./docs/mobile.png" alt="Deploy" width="30%"/>
</center>

### Export selected data as json

Exporting Filtered Data (only Female)

<center>
<img src="./docs/female.png" alt="Deploy" width="20%"/>
</center>

# Acknowledgement

- [Vite](https://vitejs.dev/)
- [Mantine](https://mantine.dev/)
- [Storybook](https://storybook.js.org/)

Thank you to the Vial team for this opportunity. I had a lot of fun working on this project. I look forward to hearing from you soon.

Jason Zhang 2024
