"use client";

import { useState } from "react";
import { Download, Headphones } from "lucide-react";

type AudioSamplePlayerProps = {
  sampleUrl: string;
  title?: string;
};

export function AudioSamplePlayer({
  sampleUrl,
  title = "Listen to a sample",
}: AudioSamplePlayerProps) {
  const [available, setAvailable] = useState(true);
  const [loaded, setLoaded] = useState(false);

  if (!available) {
    return (
      <div className="glass-card rounded-xl p-6 text-center">
        <Headphones className="mx-auto mb-3 h-8 w-8 text-zinc-500" />
        <p className="text-sm text-zinc-400">Audio sample coming soon</p>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-xl p-6">
      <p className="mb-3 text-sm font-medium text-zinc-300">{title}</p>
      {!loaded && (
        <p className="mb-2 text-xs text-zinc-500">Loading sample...</p>
      )}
      <audio
        controls
        preload="metadata"
        className="w-full"
        onLoadedMetadata={() => setLoaded(true)}
        onError={() => setAvailable(false)}
      >
        <source src={sampleUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {loaded && (
        <a
          href={sampleUrl}
          download="silent-bones-audiobook-sample.mp3"
          className="btn-secondary mt-4 inline-flex items-center gap-2 text-sm"
        >
          <Download className="h-4 w-4" />
          Download Audio Sample (MP3)
        </a>
      )}
    </div>
  );
}
