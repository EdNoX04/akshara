"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

type State = "idle" | "sending" | "done" | "error";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");

  /* No endpoint configured yet — offer a real mailto rather than a form
     that silently does nothing. */
  if (!SITE.waitlistEndpoint) {
    return (
      <div className="waitlist">
        <h3>Be there when it opens</h3>
        <p className="wl-say">
          The library opens in {SITE.launch}. Write to us and we will tell you
          the day it does.
        </p>
        <a className="btn btn-primary" href={`mailto:${SITE.contactEmail}?subject=Waitlist`}>
          {SITE.contactEmail}
        </a>
        <p className="wl-fine">One email, on the day it opens. Nothing else, ever.</p>
      </div>
    );
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch(SITE.waitlistEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <div className="waitlist">
      <h3>Be there when it opens</h3>
      <p className="wl-say">
        The library opens in {SITE.launch}. Leave an address and we will tell you
        the day it does.
      </p>

      {state === "done" ? (
        <p className="wl-done" role="status">
          <span aria-hidden>✓</span> You are on the list. See you in {SITE.launch}.
        </p>
      ) : (
        <form className="wl-form" onSubmit={submit}>
          <label className="sr-only" htmlFor="wl-email">Email address</label>
          <input
            id="wl-email"
            type="email"
            required
            autoComplete="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={state === "sending"}
          />
          <button className="btn btn-primary" type="submit" disabled={state === "sending"}>
            {state === "sending" ? "Sending…" : "Join the waitlist"}
          </button>
        </form>
      )}

      {state === "error" && (
        <p className="wl-err" role="alert">
          That did not go through. Write to{" "}
          <a className="inline" href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a> instead.
        </p>
      )}

      <p className="wl-fine">
        One email, on the day it opens. No newsletter, no sharing, no selling.
        Unsubscribe in a click.
      </p>
    </div>
  );
}
