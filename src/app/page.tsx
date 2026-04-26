"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setOutput("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setOutput(data.result);
    } catch {
      setError("Unable to improve text right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-stone-50 via-neutral-100 to-zinc-200 px-4 py-8 text-neutral-950 sm:px-6 lg:px-8 lg:py-12">
      <section className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <header className="space-y-8 lg:pt-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-neutral-950 text-base font-bold tracking-wide text-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              MU
            </div>

            <div>
              <p className="text-sm font-bold text-neutral-950">
                Portfolio Lab
              </p>
              <p className="text-sm text-neutral-600">
                Frontend-focused tools for the job search
              </p>
            </div>
          </div>

          <div className="max-w-xl">
            <p className="mb-5 inline-flex rounded-full border border-neutral-300 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-wide text-neutral-600 shadow-sm">
              AI-assisted resume workflow
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              AI Resume Assistant
            </h1>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Turn rough project bullets into recruiter-ready language with a
              product-minded, frontend-focused writing assistant.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-lg border border-neutral-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-neutral-300 hover:bg-white hover:shadow-md">
              <p className="text-xs font-bold uppercase tracking-wide text-neutral-500">
                Use Case
              </p>
              <p className="mt-3 text-sm leading-6 text-neutral-800">
                Rewrite project bullets for resumes, LinkedIn, or portfolio
                case studies.
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-neutral-300 hover:bg-white hover:shadow-md">
              <p className="text-xs font-bold uppercase tracking-wide text-neutral-500">
                Voice
              </p>
              <p className="mt-3 text-sm leading-6 text-neutral-800">
                Clear, confident, technical, and focused on real product impact.
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-neutral-300 hover:bg-white hover:shadow-md">
              <p className="text-xs font-bold uppercase tracking-wide text-neutral-500">
                Built For
              </p>
              <p className="mt-3 text-sm leading-6 text-neutral-800">
                A junior software engineer turning hands-on builds into stronger
                job-search material.
              </p>
            </div>
          </div>
        </header>

        <div className="space-y-8">
          <section className="rounded-lg border border-neutral-200 bg-white/90 p-5 shadow-sm transition hover:shadow-md sm:p-7 lg:p-8">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-neutral-500">
                  Step 01
                </p>
                <label
                  htmlFor="resume-input"
                  className="mt-2 block text-2xl font-bold tracking-tight text-neutral-950"
                >
                  Draft bullet
                </label>
              </div>

              <p className="max-w-sm text-sm leading-6 text-neutral-600">
                Paste one rough bullet or project description. Keep it messy;
                the assistant will shape it.
              </p>
            </div>

            <textarea
              id="resume-input"
              className="min-h-56 w-full resize-y rounded-lg border border-neutral-200 bg-stone-50 px-5 py-4 text-base leading-7 text-neutral-950 shadow-inner outline-none transition placeholder:text-neutral-400 hover:border-neutral-300 hover:bg-white focus:border-neutral-950 focus:bg-white focus:ring-4 focus:ring-neutral-300/70"
              rows={9}
              placeholder="Example: Built a React and Next.js app with API integration, responsive layouts, and reusable components..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button
              onClick={handleSubmit}
              disabled={loading || !input.trim()}
              className="mt-6 w-full rounded-lg bg-neutral-950 px-6 py-4 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-md active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-neutral-300 disabled:translate-y-0 disabled:cursor-not-allowed disabled:bg-neutral-400 disabled:shadow-none"
            >
              {loading ? "Improving..." : "Improve Resume Bullet"}
            </button>

            {error && (
              <div className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {error}
              </div>
            )}
          </section>

          <section
            className={`rounded-lg border p-5 shadow-sm transition sm:p-7 lg:p-8 ${
              output
                ? "border-neutral-300 bg-neutral-950 text-white shadow-md"
                : "border-neutral-200 bg-white/85 text-neutral-950"
            }`}
          >
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p
                  className={`text-xs font-bold uppercase tracking-wide ${
                    output ? "text-neutral-400" : "text-neutral-500"
                  }`}
                >
                  Step 02
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight">
                  Recruiter-ready output
                </h2>
                <p
                  className={`mt-2 max-w-lg text-sm leading-6 ${
                    output ? "text-neutral-300" : "text-neutral-600"
                  }`}
                >
                  Cleaner wording for resumes, applications, and portfolio
                  project summaries.
                </p>
              </div>

              {output && (
                <button
                  onClick={async () => {
                    await navigator.clipboard.writeText(output);
                  }}
                  aria-label="Copy result"
                  className="rounded-lg border border-white/20 bg-white px-4 py-2 text-sm font-bold text-neutral-950 transition hover:bg-neutral-200 active:scale-95 focus:outline-none focus:ring-4 focus:ring-white/20"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                </button>
              )}
            </div>

            <div
              className={`min-h-48 rounded-lg border p-5 transition ${
                output
                  ? "border-white/10 bg-white/10"
                  : "border-neutral-200 bg-stone-50"
              }`}
            >
              {loading && (
                <div className="flex items-center gap-3 text-sm font-medium text-neutral-500">
                  <span className="h-4 w-4 rounded-full border-2 border-neutral-300 border-t-neutral-950 animate-spin" />
                  Generating a stronger version...
                </div>
              )}

              {!loading && output && (
                <pre className="whitespace-pre-wrap text-sm leading-7 text-white">{output}</pre>
              )}

              {!loading && !output && (
                <p className="text-sm leading-7 text-neutral-500">
                  Your improved bullet will appear here after you generate it.
                </p>
              )}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
