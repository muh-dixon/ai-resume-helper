# AI Resume Assistant

AI Resume Assistant is an AI-powered resume writing tool for job seekers and portfolio builders who want to turn rough project notes into clearer, recruiter-ready descriptions. It solves the common problem of translating technical work into concise resume language using a Next.js frontend, a Next.js API route, TypeScript, Tailwind CSS, and the OpenAI API.

## Live Demo

[Live Demo](https://ai-resume-helper-five.vercel.app/)

## GitHub Repository

[GitHub Repository](https://github.com/muh-dixon/ai-resume-helper)

## Screenshots

Screenshots will be added here.

Suggested assets:

- Homepage screenshot
- Input and generated response screenshot
- Short demo GIF

## Features

- Rewrites rough resume bullets and project descriptions into cleaner resume-ready language
- Supports professional, technical, and concise tone options
- Uses a Next.js API route to keep OpenAI requests on the server
- Shows the original input and improved output in a side-by-side comparison
- Includes loading, error, disabled button, and empty-state UI behavior
- Provides copy-to-clipboard support for the generated rewrite
- Uses a responsive Tailwind CSS interface designed for desktop and mobile screens

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- OpenAI API
- Vercel

## Architecture / How It Works

1. The user enters a rough resume bullet or project description.
2. The user selects a tone: professional, technical, or concise.
3. The client sends the input and tone to the `/api/generate` route.
4. The API route validates the request, builds a tone-specific prompt, and calls the OpenAI API.
5. The generated response is returned to the client and displayed beside the original text.
6. The user can copy the improved result for use in a resume, application, or portfolio summary.

## Environment Variables

This project requires an OpenAI API key.

Create a `.env.local` file in the project root:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

For deployment, add the same `OPENAI_API_KEY` value in the Vercel project settings. Do not commit local environment files or API keys to GitHub.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/muh-dixon/ai-resume-helper.git
```

Move into the project folder:

```bash
cd ai-resume-helper
```

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
touch .env.local
```

Add your OpenAI API key:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

Run the development server:

```bash
npm run dev
```

Open the app:

```text
http://localhost:3000
```

## What I Learned

- Built a full-stack AI feature with a client interface and server-side API route
- Managed React state for form input, selected tone, generated output, loading, and errors
- Designed prompt behavior that changes based on user-selected tone
- Integrated the OpenAI API while keeping the API key on the server
- Created a responsive interface with clear input, output, comparison, and copy workflows

## Future Improvements

- Add uploaded screenshots and a demo GIF to the README
- Add a copied confirmation state after the copy button is clicked
- Add more tone options, such as impact-focused or leadership-focused
- Add example inputs to help users start faster
- Save recent generations during a browser session
- Add stronger validation for very short or unclear input
