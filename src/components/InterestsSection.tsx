import React, { useState, useRef } from 'react';
import { INTERESTS_SCRAPBOOK } from '../data/portfolioData';

export const InterestsSection: React.FC = () => {
  const [isPlayingAmbient, setIsPlayingAmbient] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRefs = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Gentle Web Audio API ambient cosmic lo-fi pad
  const toggleAmbientSound = () => {
    if (isPlayingAmbient) {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.5);
        setTimeout(() => {
          oscillatorRefs.current.forEach(osc => {
            try { osc.stop(); osc.disconnect(); } catch (e) { /* ignore */ }
          });
          oscillatorRefs.current = [];
          setIsPlayingAmbient(false);
        }, 600);
      }
    } else {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 1.5);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Frequencies for a soothing celestial Eb minor 9th chord (Eb, Bb, Gb, Db, F)
        const freqs = [155.56, 233.08, 293.66, 349.23, 466.16];
        const oscs: OscillatorNode[] = [];

        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(650 + (idx * 50), ctx.currentTime);

          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          osc.connect(filter);
          filter.connect(masterGain);
          osc.start();
          oscs.push(osc);
        });

        oscillatorRefs.current = oscs;
        setIsPlayingAmbient(true);
      } catch (err) {
        console.error('Audio generation not permitted or failed', err);
      }
    }
  };

  return (
    <section
      id="interests"
      className="w-full px-4 md:px-8 lg:px-12 py-20 bg-[#0c0d19]/80 border-t border-[#1d1f2b]"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#ffb1c3] text-xs font-semibold uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px]">palette</span>
              <span>Offline Frequency</span>
            </div>
            <h2 className="font-headline-lg text-3xl md:text-4xl lg:text-5xl text-[#e2e1f3] mt-1 font-normal">
              Beyond The Terminal
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-sm md:text-base text-[#cbc3d5] max-w-md font-light">
              Fragments of inspiration from racetracks, celestial spheres, 35mm film, and midnight notebooks.
            </p>
            {/* Interactive Ambient Sound Synthesizer */}
            <button
              type="button"
              onClick={toggleAmbientSound}
              className={`px-4 py-2 rounded-full border flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                isPlayingAmbient
                  ? 'bg-[#9c7cf6] text-[#11121f] border-[#cfbdff] shadow-[0_0_15px_rgba(156,124,246,0.5)]'
                  : 'bg-[#1d1f2b] text-[#cbc3d5] border-[#333441] hover:text-[#e2e1f3]'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">
                {isPlayingAmbient ? 'equalizer' : 'headphones'}
              </span>
              <span>{isPlayingAmbient ? 'Cosmic Lo-Fi: ON' : 'Play Cosmic Ambient'}</span>
            </button>
          </div>
        </div>

        {/* Scrapbook Grid of 6 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {INTERESTS_SCRAPBOOK.map((item) => (
            <div
              key={item.id}
              className={`relative p-6 sm:p-8 rounded-2xl bg-[#1d1f2b]/90 border border-[#333441] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group ${item.tapeRotation}`}
            >
              {/* Decorative Scrapbook Tape on top edge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#333441]/70 border border-[#494553]/50 backdrop-blur-sm shadow-sm transform -rotate-1 rounded-sm pointer-events-none opacity-85"></div>

              {/* Top Row: Topic label & Emoji */}
              <div className="flex items-center justify-between">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono border ${item.accentColor} bg-[#11121f]`}>
                  {item.topicLabel}
                </span>
                <span className="text-3xl transition-transform group-hover:scale-125 duration-300">
                  {item.emoji}
                </span>
              </div>

              {/* Title & Handwritten Scrapbook Note */}
              <div className="my-4">
                <h3 className="font-title-editorial text-2xl text-[#e2e1f3] font-medium leading-snug">
                  {item.title}
                </h3>
                <div className={`font-label-handwritten text-xl ${item.noteColor} mt-1 font-semibold`}>
                  “{item.handwrittenNote}”
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#cbc3d5] font-light leading-relaxed">
                {item.description}
              </p>

              {/* Hashtag Footer */}
              <div className="pt-4 mt-6 border-t border-[#333441]/60 flex items-center justify-between text-xs">
                <span className="text-[#948e9e] font-mono">
                  {item.hashtag}
                </span>
                <span className="font-label-handwritten text-base text-[#ffb1c3]">
                  Field Notes ✦
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
