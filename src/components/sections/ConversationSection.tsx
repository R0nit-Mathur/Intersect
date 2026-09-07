"use client";

import { useState } from "react";

export function ConversationSection() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      "Conversation Request: " +
        (inputValue ? inputValue.slice(0, 40) : "Direct Introduction")
    );
    const body = encodeURIComponent(
      "The initiative or person needed:\n" +
        inputValue +
        "\n\nDirect contact phone/handle:\n"
    );
    window.location.href = `mailto:call@intersect.tech?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* Mobile Direct Intake (< lg) */}
      <section
        className="px-5 py-10 border-b border-line bg-surface/30 lg:hidden"
        id="conversation"
      >
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-vermilion block">
              DIRECT ACCESS
            </span>
            <h2 className="font-display font-black text-3xl uppercase tracking-tight text-bone leading-none">
              TELL US WHO
              <br />
              YOU NEED.
            </h2>
          </div>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="border-b border-bone/30 focus-within:border-vermilion transition-colors pb-1">
              <input
                aria-label="Describe the person or the challenge"
                className="w-full bg-transparent border-0 ring-0 focus:ring-0 text-bone placeholder-graphite/60 text-base font-light py-2 px-0 outline-none"
                id="challenge-mobile-input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Describe the person or the challenge..."
                type="text"
              />
            </div>
            <button
              className="w-full py-4 px-6 bg-vermilion text-bone active:bg-bone active:text-obsidian font-display font-bold text-xs uppercase tracking-[0.2em] transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
              type="submit"
            >
              START A CONVERSATION →
            </button>
          </form>
        </div>
      </section>

      {/* Desktop Direct Intake (lg+) */}
      <section
        className="hidden lg:block relative py-32 lg:py-48 border-t border-bone/10"
        id="conversation"
      >
        <div className="px-12 xl:px-24 max-w-4xl space-y-12">
          <div className="space-y-4">
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-bone leading-[0.95]">
              TELL US WHO YOU NEED.
            </h2>
            <p className="text-graphite text-lg sm:text-xl font-light">
              Building something that demands the rare person? Or are you that
              builder ready for what's next?
            </p>
          </div>

          <form className="space-y-10" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <input
                aria-label="Describe the person or the challenge"
                className="w-full bg-transparent border-b border-bone/30 focus:border-vermilion focus:ring-0 text-bone placeholder-graphite/60 text-xl sm:text-3xl font-light py-4 px-0 outline-none transition-colors duration-300"
                id="challenge-input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Describe the person or the challenge..."
                type="text"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4">
              <p className="text-xs text-graphite uppercase tracking-widest font-light">
                Direct introduction. No intermediaries.
              </p>
              <button
                className="px-10 py-5 bg-vermilion text-bone hover:bg-bone hover:text-obsidian font-display font-bold text-xs uppercase tracking-[0.25em] transition-colors duration-300 cursor-pointer"
                type="submit"
              >
                START A CONVERSATION →
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}