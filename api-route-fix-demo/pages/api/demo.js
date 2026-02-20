// pages/api/demo.js
//
// A simple example of a Next.js API route that demonstrates common
// patterns when debugging and fixing broken routes.  The handler shows
// how to safely access environment variables at runtime, add CORS
// headers, enforce HTTP methods, and return well‑structured JSON
// responses on both success and failure.  See the README.md in this
// directory for more details.

export default async function handler(req, res) {
  // Only allow GET requests.  Returning early for unsupported methods
  // avoids unexpected behaviour in production when deployed behind
  // various platforms.
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Set a permissive CORS header.  In real applications you should
  // restrict this to the specific origins that need access.  A missing
  // CORS header is a common cause of API calls working with curl but
  // failing in the browser.
  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    // Access environment variables at runtime.  Using
    // NEXT_PUBLIC_DEMO_MESSAGE demonstrates how to set and read env
    // vars without confusing build‑time and runtime contexts.  When
    // this variable isn't set, fall back to a default message so
    // deployment misconfigurations don't cause a 500 error.
    const message =
      process.env.NEXT_PUBLIC_DEMO_MESSAGE ||
      'Hello from the demo API route!';

    // Return a JSON response.  Keep the shape consistent so that
    // callers can handle success and failure cases uniformly.
    return res.status(200).json({ message });
  } catch (err) {
    // Log the error so that it appears in your server logs.  Don't
    // leak the actual error message to the client – instead return a
    // generic error.  Unhandled exceptions are one of the most
    // frequently observed API route failures.
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
