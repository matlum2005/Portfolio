"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 90;
const DUST_COUNT = 400;

function Network() {
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const target = useRef({ x: 0, y: 0 });
  const { camera } = useThree();

  const { nodePositions, nodeGeometry, lineGeometry, dustGeometry } = useMemo(() => {
    const positions = new Float32Array(NODE_COUNT * 3);
    const nodeVecs: THREE.Vector3[] = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      const r = 8 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      const z = r * Math.cos(phi) - 4;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      nodeVecs.push(new THREE.Vector3(x, y, z));
    }

    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const linePositions: number[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        if (nodeVecs[i].distanceTo(nodeVecs[j]) < 3.6 && Math.random() > 0.86) {
          linePositions.push(nodeVecs[i].x, nodeVecs[i].y, nodeVecs[i].z);
          linePositions.push(nodeVecs[j].x, nodeVecs[j].y, nodeVecs[j].z);
        }
      }
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));

    const dustPositions = new Float32Array(DUST_COUNT * 3);
    for (let i = 0; i < DUST_COUNT; i++) {
      dustPositions[i * 3] = (Math.random() - 0.5) * 40;
      dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 24;
      dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 30 - 5;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));

    return { nodePositions: nodeVecs, nodeGeometry: nodeGeo, lineGeometry: lineGeo, dustGeometry: dustGeo };
  }, []);

  useFrame(({ clock, pointer }) => {
    target.current.x = pointer.x;
    target.current.y = pointer.y;
    const t = clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.05 + target.current.x * 0.15;
      groupRef.current.rotation.x = target.current.y * 0.1;
    }
    if (linesRef.current && groupRef.current) {
      linesRef.current.rotation.copy(groupRef.current.rotation);
    }

    camera.position.x += (target.current.x * 1.5 - camera.position.x) * 0.03;
    camera.position.y += (-target.current.y * 1 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, -4);
  });

  return (
    <>
      <group ref={groupRef}>
        <points geometry={nodeGeometry}>
          <pointsMaterial color="#38bdf8" size={0.09} transparent opacity={0.9} />
        </points>
      </group>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#2563eb" transparent opacity={0.25} />
      </lineSegments>
      <points geometry={dustGeometry}>
        <pointsMaterial color="#ffffff" size={0.03} transparent opacity={0.35} />
      </points>
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 14], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      className="!absolute inset-0"
    >
      <Network />
    </Canvas>
  );
}
