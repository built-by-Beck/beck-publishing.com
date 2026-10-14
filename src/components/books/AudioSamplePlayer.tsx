"use client";

import { useState } from "react";
import { Download, Headphones } from "lucide-react";

type AudioSamplePlayerProps = {
  sampleUrl: string;
  title?: string;
};

export function AudioSamplePlayer({
  sampleUrl,
  title = "Chapter 1 — Free 3-minute preview",
}: AudioSamplePlayerProps) {
  const [available, setAvailable] = useState(true);
  const [loaded, setLoaded] = useState(false);

  if (!available) {
    return (
      <div className="glass-card rounded-xl p-6 text-center">
        <Headphones className="mx-auto mb-3 h-8 w-8 text-zinc-500" />
        <p role="status" className="text-sm text-zinc-400">
          The audio preview is temporarily unavailable. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-xl p-6">
      <p className="mb-3 text-sm font-medium text-zinc-300">{title}</p>
      <p className="mb-4 text-sm text-zinc-400">
        A short excerpt from Silent Bones. Purchase is required for the full
        audiobook or ebook.
      </p>
      {!loaded && (
        <p className="mb-2 text-xs text-zinc-500">Loading sample...</p>
      )}
      <audio
        controls
        src={sampleUrl}
        aria-label={title}
        preload="metadata"
        className="w-full"
        ref={(audio) => {
          if (audio && audio.readyState >= 1) setLoaded(true);
        }}
        onLoadedMetadata={() => setLoaded(true)}
        onCanPlay={() => setLoaded(true)}
        onError={() => setAvailable(false)}
      >
        Your browser does not support the audio element.
      </audio>
      {loaded && (
        <a
          href={sampleUrl}
          download="silent-bones-audiobook-sample.mp3"
          className="btn-secondary mt-4 inline-flex items-center gap-2 text-sm"
        >
          <Download className="h-4 w-4" />
          Download Free Preview (MP3)
        </a>
      )}
    </div>
  );
}
