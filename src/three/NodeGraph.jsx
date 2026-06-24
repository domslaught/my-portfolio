/**
 * NodeGraph.jsx — Responsive Grid Edition (Core Removed)
 */

import { useRef, useEffect, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ── Colors & Design Tokens ───────────────────────────── */
const ACCENT = '#FF5722';       // Pure Brand Orange

/* ── Camera Rig ───────────────────────────────────────── */
function CameraRig({ graphState }) {
  const { camera } = useThree();
  useFrame(() => {
    camera.position.z += (graphState.current.camZ - camera.position.z) * 0.05;
  });
  return null;
}

/* ── Swirling Telemetry Particle Swarm ────────────────── */
function ParticleSwarm({ graphState }) {
  const COUNT = 180;
  const ref = useRef();
  const speedRef = useRef([]);

  const [positions, initialPositions] = useMemo(() => {
    const pos = new Float32Array(COUNT * 3);
    const init = new Float32Array(COUNT * 3);
    const speeds = [];
    for (let i = 0; i < COUNT; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 1.2 + Math.random() * 0.8;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      init[i * 3] = x;
      init[i * 3 + 1] = y;
      init[i * 3 + 2] = z;

      speeds.push({
        rx: Math.random() * 0.4 + 0.1,
        ry: Math.random() * 0.4 + 0.1,
        rz: Math.random() * 0.4 + 0.1,
        phase: Math.random() * Math.PI * 2,
      });
    }
    speedRef.current = speeds;
    return [pos, init];
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.elapsedTime;
    const gs = graphState.current;
    const attr = ref.current.geometry.attributes.position;

    for (let i = 0; i < COUNT; i++) {
      const idx = i * 3;
      const speed = speedRef.current[i];

      const x0 = initialPositions[idx];
      const y0 = initialPositions[idx + 1];
      const z0 = initialPositions[idx + 2];

      const pulse = Math.sin(time * 0.8 + speed.phase) * 0.04 * (1 + gs.decon * 2.0);
      const angle = time * speed.rx * (1 + gs.decon * 0.5);
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);

      const rx = x0 * cosA - z0 * sinA;
      const rz = x0 * sinA + z0 * cosA;
      const rz_val = y0 + pulse;

      const scaleFactor = 1.0 + gs.decon * 0.45;
      attr.setXYZ(i, rx * scaleFactor, rz_val * scaleFactor, rz * scaleFactor);
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color={ACCENT}
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ── Master Transforming Component ────────────────────── */
export default function NodeGraph() {
  const groupRef = useRef();
  const shieldMeshRef = useRef();
  const outerRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  const graphState = useRef({
    pctX: 0.28, posY: -0.2, posZ: 0,
    rotX: 0.1, rotY: -0.4, rotZ: 0,
    scale: 0.8,
    decon: 0,
    wireframe: 0.04,
    camZ: 6.0,
    idleFloat: 1.0,
  });

  useEffect(() => {
    const gs = graphState.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.portfolio-app',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.8,
      }
    });

    gsap.set(gs, {
      pctX: 0.28, posY: -0.2, posZ: 0,
      rotX: 0.1, rotY: -0.4, rotZ: 0,
      scale: 0.8,
      decon: 0,
      wireframe: 0.04,
      camZ: 6.0,
      idleFloat: 1.0,
    });

    tl.to(gs, { pctX: -0.16, posY: 0.1, posZ: 0.2, rotX: 0.5, rotY: 1.0, rotZ: 0.2, scale: 0.75, decon: 0.05, wireframe: 0.05, camZ: 6.0, idleFloat: 0.6, ease: 'power1.inOut' })
      .to(gs, { pctX: 0.28, posY: -0.3, posZ: -3.5, rotX: 0.2, rotY: 0.6, rotZ: 0.1, scale: 0.35, decon: 0.0, wireframe: 0.02, camZ: 7.2, idleFloat: 0.3, ease: 'power1.inOut' })
      .to(gs, { pctX: 0.18, posY: 1.4, posZ: -1.0, rotX: 0.3, rotY: 1.5, rotZ: 0.4, scale: 0.25, decon: 0.1, wireframe: 0.1, camZ: 6.0, idleFloat: 0.2, ease: 'power2.inOut' })
      .to(gs, { pctX: 0.0, posY: 0, posZ: 0, rotX: 0.6, rotY: 2.2, rotZ: 0.5, scale: 1.15, decon: 0.8, wireframe: 0.6, camZ: 6.5, idleFloat: 0.8, ease: 'power1.out' })
      .to(gs, { pctX: 0.25, posY: 0.0, posZ: -0.5, rotX: 0.25, rotY: 0.7, rotZ: 0.15, scale: 0.7, decon: 0.05, wireframe: 0.06, camZ: 6.0, idleFloat: 0.5, ease: 'power1.inOut' })
      .to(gs, { pctX: -0.08, posY: -1.1, posZ: -0.5, rotX: -0.15, rotY: 0.1, rotZ: 0, scale: 0.38, decon: 0.0, wireframe: 0.04, camZ: 6.0, idleFloat: 0.25, ease: 'power2.out' });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const gs = graphState.current;
    const time = state.clock.elapsedTime;

    const { width: vpWidth, height: vpHeight } = state.viewport;
    const isMobile = vpWidth < 6.5;

    const responsiveX = isMobile ? 0 : gs.pctX * vpWidth;
    const responsiveY = isMobile ? gs.posY - (vpHeight * 0.15) : gs.posY;
    const responsiveScale = isMobile ? gs.scale * 0.55 : gs.scale;

    groupRef.current.position.set(responsiveX + (gs.idleFloat * Math.sin(time * 0.4) * 0.04), responsiveY + (gs.idleFloat * Math.sin(time * 0.6) * 0.08), gs.posZ);
    groupRef.current.scale.setScalar(responsiveScale);

    groupRef.current.rotation.set(
      gs.rotX + gs.idleFloat * Math.sin(time * 0.25) * 0.015,
      gs.rotY + time * 0.06,
      gs.rotZ
    );

    if (shieldMeshRef.current) {
      const dynamicPulse = Math.sin(time * 5.5) * 0.04;
      shieldMeshRef.current.scale.setScalar(1.0 + (dynamicPulse * 0.1));
    }

    if (outerRef.current) {
      outerRef.current.scale.setScalar(1.0 + gs.decon * 0.25);
      outerRef.current.material.opacity = THREE.MathUtils.lerp(0.06, 0.25, gs.wireframe);
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.y = time * 0.35 * (1 + gs.decon);
      ring1Ref.current.scale.setScalar(1.0 + gs.decon * 0.4);
      ring1Ref.current.material.opacity = THREE.MathUtils.lerp(0.15, 0.45, gs.wireframe);
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -time * 0.25 * (1 + gs.decon);
      ring2Ref.current.scale.setScalar(1.0 + gs.decon * 0.65);
      ring2Ref.current.material.opacity = THREE.MathUtils.lerp(0.08, 0.3, gs.wireframe);
    }
  });

  const shieldGeo = useMemo(() => new THREE.IcosahedronGeometry(1.3, 2), []);
  const wireframeGeo = useMemo(() => new THREE.IcosahedronGeometry(1.31, 2), []);

  return (
    <>
      <CameraRig graphState={graphState} />

      <group ref={groupRef}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={2.5} color={ACCENT} />
        <pointLight position={[-5, -5, -2]} intensity={1.0} color={ACCENT} />

        {/* Outer Transmissive Shield */}
        <mesh ref={shieldMeshRef}>
          <primitive object={shieldGeo} attach="geometry" />
          <meshPhysicalMaterial
            color="#0c0c0e"
            transparent
            opacity={0.2}
            roughness={0.1}
            metalness={0.1}
            transmission={0.9}
            thickness={0.2}
            ior={1.1}
            depthWrite={false}
          />
        </mesh>

        {/* Wireframe Constellation Layer */}
        <mesh ref={outerRef}>
          <primitive object={wireframeGeo} attach="geometry" />
          <meshBasicMaterial
            color={ACCENT}
            wireframe
            transparent
            opacity={0.06}
            depthWrite={false}
          />
        </mesh>

        {/* Orbital Ring 1 */}
        <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1.55, 0.012, 12, 100]} />
          <meshBasicMaterial color={ACCENT} transparent opacity={0.15} depthWrite={false} />
        </mesh>

        {/* Orbital Ring 2 */}
        <mesh ref={ring2Ref} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
          <torusGeometry args={[1.85, 0.008, 8, 100]} />
          <meshBasicMaterial color={ACCENT} transparent opacity={0.08} depthWrite={false} />
        </mesh>

        {/* Telemetry Particles */}
        <ParticleSwarm graphState={graphState} />
      </group>
    </>
  );
}