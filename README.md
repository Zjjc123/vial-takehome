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

- Name (search bar)
- Age (range slider)
- Gender (dropdown)
- Diagnosis date (calendar range)
- Status (dropdown)

### Sort by attributes (ascending)

- Name
- Age
- Diagnosis Date

### Others

- Colored tag based on status
- Light/Dark mode with mantine

- Mobile accessibility (flexbox)
- CI/CD

## Future

- UI testing with Storybook
- export selected data as json
