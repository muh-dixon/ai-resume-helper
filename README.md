# AI Resume Assistant

A full-stack AI-powered resume bullet improvement tool built with Next.js.

Users can paste a rough resume bullet or project description, submit it, and receive a cleaner, more recruiter-friendly rewrite using an OpenAI-powered API route.

## Live Demo

Live demo link: _Coming soon_

## Screenshot

Screenshot: _Coming soon_

## Features

- AI-powered resume bullet rewriting
- Clean branded UI with MU monogram
- Responsive two-column layout
- Textarea input for rough resume bullets or project descriptions
- Backend API route at `/api/generate`
- Loading state while generating output
- Error handling for failed requests
- Disabled submit button when input is empty or loading
- Copy-to-clipboard button for generated output

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- OpenAI API
- Vercel deployment

## How It Works

1. The user enters a rough resume bullet or project description in the textarea.
2. The frontend sends the input to the `/api/generate` route.
3. The API route uses the OpenAI API to generate an improved version.
4. The improved text is returned to the frontend and displayed in the output section.
5. The user can copy the generated result to their clipboard.

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

Add your OpenAI API key to `.env.local`:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

Run the development server:

```bash
npm run dev
```

Open the app in your browser:

```text
http://localhost:3000
```

## Environment Variables

This project requires an OpenAI API key.

Create a `.env.local` file in the root of the project and add:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

Do not commit your `.env.local` file or expose your API key publicly.

## What I Learned

While building this project, I practiced:

- Creating a full-stack feature with a frontend form and backend API route
- Managing client-side state for input, output, loading, and errors
- Connecting a Next.js API route to the OpenAI API
- Building a responsive UI with Tailwind CSS
- Designing a branded interface that feels consistent with a personal portfolio
- Handling disabled states, loading feedback, and copy-to-clipboard behavior

## Future Improvements

- Add a copied confirmation message after using the copy button
- Let users choose different rewrite styles, such as concise, technical, or leadership-focused
- Add examples to help users understand what type of input works best
- Save recent generations locally during a session
- Add stronger validation for very short or unclear input
- Include a screenshot and live demo link after deployment

## Author

Built by Shabil Dixon as a portfolio project to practice full-stack development, AI-assisted workflows, and polished frontend design.
