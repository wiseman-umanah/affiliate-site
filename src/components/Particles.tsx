"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ParticleSphereCard() {
  return (
    <div className="w-full h-[300px] md:h-[400px] relative rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ParticleSphere />
      </Canvas>
    </div>
  );
}

function ParticleSphere() {
  const meshRef = useRef<THREE.Group>(null);
  const particleCount = 10000;

  // Generate positions/colors
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 3 + Math.random() * 1.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

		colors[i * 3] = 0.145 // Red
		colors[i * 3 + 1] = 0.388 // Green
		colors[i * 3 + 2] = 0.922 // Blue

    }
    return { positions, colors };
  }, [particleCount]);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
			attach="attributes-position"
			args={[particles.positions, 3]}
			/>
			<bufferAttribute
			attach="attributes-color"
			args={[particles.colors, 3]}
		/>

        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}
