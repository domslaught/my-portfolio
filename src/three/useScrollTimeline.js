/**
 * useScrollTimeline.js
 * Master GSAP ScrollTrigger hook controlling the 6-section 3D scene states.
 *
 * Mutates `nodeGraphRef.current.graphState.current` directly — never
 * touches React state, so zero re-renders on scroll.
 *
 * Section mapping:
 *   S1 hero-section      → idle float center-right
 *   S2 impact-section    → zoom + high-velocity spin
 *   S3 projects-section  → translate far-left, stable anchor
 *   S4 toolkit-section   → deconstruct, wireframe mode
 *   S5 experience-section → reassembly snap
 *   S6 footer            → cinematic wide pullback
 */

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollTimeline(nodeGraphRef) {
  useEffect(() => {
    // Wait a tick so the DOM + R3F canvas are both mounted
    const timeout = setTimeout(() => {
      const gs = nodeGraphRef?.current?.graphState;
      if (!gs) return;

      /* ─────────────────────────────────────────────────────────
         Helper: tween into graphState without React state
      ───────────────────────────────────────────────────────── */
      const to = (target, vars, scrollVars) =>
        gsap.to(target, {
          ...vars,
          scrollTrigger: {
            scrub: 1.2,
            ...scrollVars,
          },
        });

      /* ── S1 → HERO: idle float, center-right ─────────────── */
      gsap.set(gs.current, {
        posX: 1.1,
        posY: -0.1,
        posZ: 0,
        rotX: 0.08,
        rotY: -0.3,
        rotZ: 0,
        scale: 1,
        decon: 0,
        wireframe: 0,
        camZ: 6,
        idleFloat: 1,
      });

      /* ── S2 → IMPACT / STATS: zoom + spin ────────────────── */
      to(
        gs.current,
        {
          posX: 0,
          posY: 0,
          posZ: 0.6,
          rotX: Math.PI * 1.4,
          rotY: Math.PI * 2.2,
          rotZ: Math.PI * 0.6,
          scale: 1.15,
          decon: 0,
          wireframe: 0,
          camZ: 5.2,
          idleFloat: 0,
        },
        {
          trigger: '#impact-section',
          start: 'top 80%',
          end: 'bottom 20%',
        },
      );

      /* ── S3 → PROJECTS: stable far-left anchor ───────────── */
      to(
        gs.current,
        {
          posX: -2.4,
          posY: 0,
          posZ: 0,
          rotX: 0.05,
          rotY: 0.4,
          rotZ: 0,
          scale: 0.88,
          decon: 0,
          wireframe: 0,
          camZ: 6,
          idleFloat: 0.3,
        },
        {
          trigger: '#projects-section',
          start: 'top 80%',
          end: 'bottom 20%',
        },
      );

      /* ── S4 → TOOLKIT: deconstruction wireframe ──────────── */
      to(
        gs.current,
        {
          posX: 0.2,
          posY: 0.1,
          posZ: 0,
          rotX: 0.1,
          rotY: 0.6,
          rotZ: 0,
          scale: 1.05,
          decon: 1,
          wireframe: 1,
          camZ: 6.5,
          idleFloat: 0,
        },
        {
          trigger: '#toolkit-section',
          start: 'top 75%',
          end: 'bottom 25%',
        },
      );

      /* ── S5 → EXPERIENCE: gravitational reassembly ───────── */
      to(
        gs.current,
        {
          posX: 0.8,
          posY: 0,
          posZ: 0,
          rotX: 0.08,
          rotY: -0.2,
          rotZ: 0,
          scale: 1,
          decon: 0,
          wireframe: 0,
          camZ: 6,
          idleFloat: 0.6,
        },
        {
          trigger: '#experience-section',
          start: 'top 75%',
          end: 'bottom 25%',
        },
      );

      /* ── S6 → FOOTER: cinematic wide pullback ────────────── */
      to(
        gs.current,
        {
          posX: 0,
          posY: -0.5,
          posZ: -1.2,
          rotX: -0.25,
          rotY: 0.1,
          rotZ: 0,
          scale: 0.72,
          decon: 0,
          wireframe: 0,
          camZ: 9,
          idleFloat: 0.4,
        },
        {
          trigger: 'footer',
          start: 'top 90%',
          end: 'bottom bottom',
        },
      );
    }, 300);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [nodeGraphRef]);
}
