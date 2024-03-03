# Vial Takehome Assignment [![Deploy](https://github.com/Zjjc123/vial-takehome/actions/workflows/main.yml/badge.svg)](https://github.com/Zjjc123/vial-takehome/actions/workflows/main.yml)

## Set Up

Clone the repository

```bash
git clone https://github.com/Zjjc123/vial-takehome.git
cd vial-takehome
```

Install dependencies

```bash
npm install
```

## Development

### Start the development server on http://localhost:5173/vial-takehome/

```bash
npm run dev
```

### Run tests

```bash
npm run test
```

### Run linter

```bash
npm run lint
```

### Run storybook

```bash
npm run storybook
```

## Deploy

The app is deployed on GitHub Pages. The deployment is automated with GitHub Actions.

https://zjjc123.github.io/vial-takehome/

## Implemented Functionalities

### Filtering

- name (search bar)
- age (range slider)
- gender (dropdown)
- diagnosis date (calendar range)
- status (dropdown)

### Sort by attributes (ascending)

- name
- age
- diagnosis date

### Others

- Colored tag based on status
- Mobile accessibility (flexbox)
- CI/CD

## Future

- UI testing with Storybook
- export selected data as json
- light/dark mode with mantine
