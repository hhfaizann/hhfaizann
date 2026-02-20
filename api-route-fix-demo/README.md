# API Route Fix Demo

This folder contains a Next.js API route where I diagnosed and fixed common issues that typically break API endpoints in production.

The purpose of this implementation is to show how I identified and resolved several real-world problems that frequently occur when working with Next.js API routes, including configuration mistakes, environment mismatches, request handling errors, and deployment-related issues.:

- **Environment variables** – the handler reads an environment variable at
  runtime instead of build time and falls back to a sensible default.
- **Correct route handler signature** – the file is placed under
  `pages/api` so that it will be treated as a Pages Router API route.
- **CORS** – the handler adds a permissive `Access‑Control‑Allow‑Origin`
  header to support requests from other domains during development.
- **Error handling** – the logic is wrapped in a `try…catch` block and
  responds with proper status codes and a JSON body on error.
- **HTTP method guard** – only the expected HTTP method is allowed.

See [`pages/api/demo.js`](pages/api/demo.js) for the implementation.

## Usage

1. Create a new Next.js project (e.g. with `npx create-next-app`).
2. Copy the `pages/api` folder from this demo into your project.
3. Start the development server with `npm run dev`.
4. Send a GET request to `/api/demo` using your browser, `curl` or
   Postman and observe the JSON response.

You can set the environment variable `NEXT_PUBLIC_DEMO_MESSAGE` before
starting the server to customise the message returned by the API.
