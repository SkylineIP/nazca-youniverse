"use client";

import { useEffect, useRef } from "react";
import { useContextDefault } from "../../context/Context";

const Music = () => {
  const context = useContextDefault();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const sound = context?.sound;

  type NazcaWindow = Window & { __nazcaAudio?: HTMLAudioElement };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const win = window as NazcaWindow;
    if (!win.__nazcaAudio) {
      const a = new Audio("/sound.wav");
      a.loop = true;
      a.volume = 0.5;
      a.play().catch(() => { });
      win.__nazcaAudio = a;
    }
    audioRef.current = win.__nazcaAudio as HTMLAudioElement;
    return () => {
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const a = audioRef.current ?? (typeof window !== "undefined" ? (window as NazcaWindow).__nazcaAudio : null);
    if (!a) return;
    if (sound === 0) {
      a.pause();
    } else {
      a.volume = 0.5;
      a.play().catch(() => { });
    }
  }, [sound]);

  return <div className="hidden h-0 w-0" />;
};

export default Music;