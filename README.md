# SIBAD
Sistem informasi Bantuan Desa


## Deploying to Vercel

- Ensure the project is pushed to a Git provider (GitHub, GitLab, Bitbucket).
- In Vercel, import the repository and select the root `sibad` directory as the project root (if needed).
- Add the environment variables from `sibad/.env.example` into the Vercel project settings (both `NEXT_PUBLIC_*` and server-only keys).
- Vercel will run `npm run vercel-build` (which maps to `next build`) by default. The provided `vercel.json` ensures Next detection.

Local quick deploy (requires Vercel CLI):

```bash
cd sibad
npm i -g vercel
vercel login
vercel --prod
```

If you prefer automatic deploys, connect the GitHub repository to Vercel and enable the production branch.
