Next.js Learning Progress
1. Next.js Basics ⭐
What is Next.js?
React vs Next.js
Why use Next.js?
Benefits: routing, rendering, SEO, server-side features
2. Rendering ⭐🔥

Learned:

CSR — Client-Side Rendering
SSR — Server-Side Rendering
SSG — Static Site Generation
ISR — Incremental Static Regeneration
Difference between CSR, SSR, SSG and ISR
Hydration
Simple understanding
CSR → Browser creates UI
SSR → Server creates page when requested
SSG → Page created beforehand
ISR → Page created beforehand + updated after a set time
Hydration → React makes the HTML interactive
Practical work completed
/csr → Counter using useState
/ssr → Server-side data/time example
/ssg → Static page
/isr → revalidate example
3. Server & Client Components ⭐🔥

Learned:

Server Components are the default
"use client" creates a Client Component
When to use Client Components
useState, events and browser features need Client Components
fetch() can be used in Server Components
4. App Router & Folder Structure ⭐

Learned:

app/page.tsx

→ /

app/about/page.tsx

→ /about

app/layout.tsx

→ Shared layout

Learned:

page.tsx
layout.tsx
children
Route-based folder structure
5. Dynamic Routes ⭐🔥

Created:

app/products/[id]/page.tsx

Example:

/products/101
/products/202
/products/303

One [id] page handles all these IDs.

Learned:

Dynamic route [id]
params
6. Catch-All Routes 🔥

Created:

app/blog/[...slug]/page.tsx

Example:

/blog/react
/blog/react/nextjs
/blog/react/nextjs/routing

Learned:

[...slug]
slug is an array
slug.join("/")
7. Optional Catch-All Routes 🔥

Created:

app/docs/[[...slug]]/page.tsx

Handles:

/docs
/docs/react
/docs/react/nextjs

Learned:

[[...slug]]
Slug can be undefined
8. Route Groups 🔥

Learned:

app/(auth)/login/page.tsx

URL:

/login

(auth) does not appear in the URL.

9. Navigation ⭐🔥

Learned:

Link
import Link from "next/link";

<Link href="/about">About</Link>

Used for normal navigation.

useRouter
"use client";

import { useRouter } from "next/navigation";

const router = useRouter();

router.push("/dashboard");

Used when navigation happens through code.

Also learned:
router.back()
usePathname()
useSearchParams()
Practical components created:
NavigationButton.tsx
CurrentPath.tsx
ProductFilters.tsx
10. Search Params 🔥

Example:

/products/101?category=mobile&sort=price

Learned:

searchParams.get("category")
searchParams.get("sort")

Can get:

category → mobile
sort → price
11. Data Fetching ⭐🔥

Learned:

const response = await fetch("API_URL");
const data = await response.json();

Also learned:

Fresh data
fetch("API_URL", {
  cache: "no-store",
});
Revalidate
fetch("API_URL", {
  next: {
    revalidate: 60,
  },
});
Sequential vs Parallel

Sequential:

API 1 → wait → API 2

Parallel:

Promise.all([
  fetchUsers(),
  fetchProducts(),
]);
12. Rendering Lists ⭐

Learned:

data.map((post) => (
  <p key={post.id}>{post.title}</p>
))
map() → display multiple items
key → helps React identify each item
13. Special Files ⭐

Learned:

loading.tsx

Shows while page is loading.

error.tsx

Shows when something goes wrong.

not-found.tsx

Shows when something doesn't exist.

Also learned:

import { notFound } from "next/navigation";

notFound();
🛠️ Practical Project Progress

Current practice project:

practice-it

Routes created/practiced:

/
├── about
├── csr
├── ssr
├── ssg
├── isr
├── product/[id]
├── blog/[...slug]
└── docs/[[...slug]]

Also practiced:

Layout
Navigation
Dynamic routes
Catch-all routes
Search parameters
Client components
Server components
API fetching
Rendering concepts
Build process
Production build

Successfully ran:

npm run build

and Next.js successfully generated the production build. ✅
