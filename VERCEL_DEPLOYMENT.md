# Four Vercel deployments

This repository serves all four sites. Create four Vercel projects, all connected to the `main` branch of this GitHub repository. Do not create separate Git branches or copies of the code.

For every project, open **Settings → Environment Variables** in Vercel and add `NEXT_PUBLIC_RECIPIENT_ID` for the **Production** environment. Its value must match an `id` in `src/data/recipients.ts`.

| Vercel project | Custom domain | `NEXT_PUBLIC_RECIPIENT_ID` |
| --- | --- | --- |
| Greeting – Chick | `nhacuachick.andoan.org` | Choose this recipient's ID |
| Greeting – 10A11 Peak | `10a11peak.andoan.org` | Choose this recipient's ID |
| Greeting – Bảo Long | `baolong.andoan.org` | Choose this recipient's ID |
| Greeting – Nguyễn Phúc | `nguyenphuc.andoan.org` | Choose this recipient's ID |

After setting the environment variable, redeploy that Vercel project. The site then skips the name selector and opens directly to the chosen recipient's password screen. Without this variable, the ordinary recipient-selection screen remains available, which is useful for local development.

## Recipient data

Edit `src/data/recipients.ts` before deployment. Each recipient needs a unique `id`, `name`, four-digit `password`, and `greeting`. For four separate sites, ensure the file has at least four entries, then use the matching `id` as the environment-variable value above.

## Domains and DNS

In each Vercel project, add the relevant custom domain under **Settings → Domains**. Vercel will show the required DNS record. Add exactly that record in the DNS management panel for `andoan.org`, then wait for Vercel to verify it. Do not reuse one subdomain in more than one Vercel project.

Vercel provides HTTPS certificates automatically after verification. No Docker port, reverse proxy, or tunnel is needed for these four Vercel deployments.
