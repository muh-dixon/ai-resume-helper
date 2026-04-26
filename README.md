# AI Resume Assistant

A full-stack AI-powered resume bullet improvement tool built with Next.js, React, TypeScript, Tailwind CSS, and the OpenAI API.

Users can paste a rough resume bullet or project description, choose a tone, and generate a cleaner recruiter-friendly rewrite.

## Live Demo

Live demo: _Coming soon_

## Screenshot

Screenshot: _Coming soon_

## Features

- AI-powered resume bullet rewriting
- Tone selection for professional, technical, or concise output
- Textarea input for rough resume bullets or project descriptions
- Backend API route at `/api/generate`
- Loading state while the rewrite is being generated
- Error handling for failed requests
- Before and after comparison view
- Copy-to-clipboard button for the generated rewrite
- Responsive Tailwind CSS layout
- Clean branded UI with MU monogram

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- OpenAI API
- Vercel

## How It Works

1. The user enters a rough resume bullet or project description.
2. The user selects a tone: professional, technical, or concise.
3. The frontend sends the input and tone to `/api/generate`.
4. The API route calls the OpenAI API with a prompt based on the selected tone.
5. The app displays the original text and improved rewrite in a before/after comparison.
6. The user can copy the improved result to their clipboard.

## Getting Started

Clone the repository:

```bash
git clone <your-repository-url>
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

## Environment Variables

This project requires an OpenAI API key.

Create a `.env.local` file in the project root:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

The API key should stay private and should not be committed to GitHub.

For deployment, add the same `OPENAI_API_KEY` variable in your Vercel project settings.

## What I Learned

While building this project, I practiced:

- Building a full-stack feature with a client UI and backend API route
- Managing React state for input, output, loading, errors, and selected tone
- Sending data from a Next.js client component to an API route
- Using the OpenAI API to generate text from a structured prompt
- Creating tone-based prompt behavior
- Designing a responsive interface with Tailwind CSS
- Adding user experience details like loading feedback, error messages, comparison views, and copy-to-clipboard behavior

## Future Improvements

- Add a copied confirmation message after the copy button is clicked
- Add more tone options, such as leadership-focused or impact-focused
- Add example prompts to help users get started faster
- Save recent generations during a session
- Add stronger validation for very short or unclear input
- Add a real screenshot after final deployment
- Add the live demo link after deploying to Vercel

## Interview Explanation

AI Resume Assistant is a small full-stack project I built to practice combining a polished frontend with an AI-powered backend workflow.

The frontend is built with Next.js, React, TypeScript, and Tailwind CSS. It lets users enter a rough resume bullet, choose a tone, and submit the text. The client sends the input and selected tone to a Next.js API route at `/api/generate`.

On the backend, the API route validates the input, reads the tone, builds a prompt, and sends the request to the OpenAI API. The response is returned to the frontend and displayed in a before/after comparison so the user can see the original text beside the improved rewrite.

I focused on keeping the app practical and easy to understand. The project includes loading feedback, error handling, disabled button states, responsive layout, and copy-to-clipboard functionality.

## Author

Built by Shabil Dixon as a portfolio project to practice full-stack development, AI-assisted workflows, and polished frontend design.
