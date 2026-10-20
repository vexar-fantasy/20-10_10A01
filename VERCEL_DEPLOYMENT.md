# Four Vercel deployments

This repository serves all four independent websites. Create four Vercel projects, all connected to the `main` branch of this GitHub repository. Do not create separate Git branches or copies of the code.

For every project, open **Settings → Environment Variables** in Vercel and add these values for the **Production** environment:

| Variable | Value |
| --- | --- |
| `NEXT_PUBLIC_GREETING_NAME` | The one person’s display name for this website |
| `NEXT_PUBLIC_GREETING_PASSWORD` | Their four-digit greeting-card password |
| `NEXT_PUBLIC_GREETING_MESSAGE` | Their personal greeting message |

| Vercel project | Custom domain |
| --- | --- | --- |
| Greeting – Chick | `nhacuachick.andoan.org` |
| Greeting – 10A11 Peak | `10a11peak.andoan.org` |
| Greeting – Bảo Long | `baolong.andoan.org` |
| Greeting – Nguyễn Phúc | `nguyenphuc.andoan.org` |

After setting all three variables, redeploy that Vercel project. The site then skips the name selector and opens directly to that website's personal password screen. The other three people are not used by that deployment. Without these variables, the ordinary recipient-selection screen remains available, which is useful for local development.

## Domains and DNS

In each Vercel project, add the relevant custom domain under **Settings → Domains**. Vercel will show the required DNS record. Add exactly that record in the DNS management panel for `andoan.org`, then wait for Vercel to verify it. Do not reuse one subdomain in more than one Vercel project.

Vercel provides HTTPS certificates automatically after verification. No Docker port, reverse proxy, or tunnel is needed for these four Vercel deployments.
