<div align="center">
  <h1>Deepthi Bandaru — Angular Developer Portfolio</h1>

  <p>
    A personal portfolio site highlighting projects, skills, and experience in modern Angular development.
    <br><br>
    <a href="#" target="_blank"><strong>🔥 Live Demo (placeholder)</strong></a>
    <br><br>
    <img src="assets/images/aurora/hero-kv.webp" alt="Hero" width="220"/>
  </p>
</div>

---

## About

I'm Deepthi Bandaru — an Angular & TypeScript developer building accessible, performant web applications. I enjoy working on front-end architecture, state management (NgRx), and developer ergonomics.

Links: [LinkedIn](https://www.linkedin.com/) · [GitHub](https://github.com/) · email: hi@example.com

---

## Tech Stack

- Angular · TypeScript · RxJS
- NgRx · NestJS · PostgreSQL
- AWS · Docker · CI/CD

---

## How to run a local preview

```bash
cd angular-portfolio-app
python3 -m http.server 8000
# open http://localhost:8000/product.html
```

---

## Notes

This repo has been adapted into a portfolio landing page; replace screenshots and the demo link with your hosted site when ready.

---

## CI / Deployment

This repo includes a GitHub Actions workflow (`.github/workflows/ci.yml`) that runs format checks, linting and builds on push/PR. It can also deploy to Netlify or Vercel if you provide the required repository secrets.

To enable Netlify deploys, create these repository secrets:

- `NETLIFY_AUTH_TOKEN` — your Netlify personal access token
- `NETLIFY_SITE_ID` — the Netlify site id for the target site

To enable Vercel deploys, create these repository secrets:

- `VERCEL_TOKEN` — your Vercel token
- `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` — (project/organization IDs from Vercel)

Netlify configuration is provided in `netlify.toml`. Vercel configuration is in `vercel.json`.
