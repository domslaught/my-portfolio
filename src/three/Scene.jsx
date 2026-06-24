// Scene.jsx
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import NodeGraph from './NodeGraph';
import './Scene.css';

export default function Scene() {
  return (
    <div className="r3f-canvas-container" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60, near: 0.1, far: 100 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <NodeGraph />
        </Suspense>
      </Canvas>
    </div>
  );
}