"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { TECH_SPHERE_ITEMS } from "@/constants/data";

function TechNode({
  position,
  name,
  onHover,
}: {
  position: [number, number, number];
  name: string;
  onHover: (name: string | null) => void;
}) {
  const [hovered, setHovered] = useState(false);

  const handleOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHovered(true);
    onHover(name);
  };
  const handleOut = () => {
    setHovered(false);
    onHover(null);
  };

  return (
    <group position={position}>
      <mesh onPointerOver={handleOver} onPointerOut={handleOut}>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshBasicMaterial color={hovered ? "#ffffff" : "#38bdf8"} />
      </mesh>
      <Html center distanceFactor={8} style={{ pointerEvents: "none" }}>
        <span
          style={{
            color: "#e2f2ff",
            fontFamily: "var(--font-body), sans-serif",
            fontWeight: 600,
            fontSize: "14px",
            whiteSpace: "nowrap",
            textShadow: "0 0 8px rgba(0,0,0,0.8)",
          }}
        >
          {name}
        </span>
      </Html>
    </group>
  );
}

function SphereGroup({ onHover }: { onHover: (name: string | null) => void }) {
  const groupRef = useRef<THREE.Group>(null);
  const dragging = useRef(false);
  const prev = useRef({ x: 0, y: 0 });
  const rotation = useRef({ x: 0, y: 0 });
  const autoSpin = useRef(true);

  const nodePositions = useMemo(() => {
    const r = 3.4;
    return TECH_SPHERE_ITEMS.map((name, i) => {
      const phi = Math.acos(-1 + (2 * i) / TECH_SPHERE_ITEMS.length);
      const theta = Math.sqrt(TECH_SPHERE_ITEMS.length * Math.PI) * phi;
      const x = r * Math.cos(theta) * Math.sin(phi);
      const y = r * Math.sin(theta) * Math.sin(phi);
      const z = r * Math.cos(phi);
      return { name, position: [x, y, z] as [number, number, number] };
    });
  }, []);

  useFrame(() => {
    if (autoSpin.current) rotation.current.y += 0.0025;
    if (groupRef.current) {
      groupRef.current.rotation.y = rotation.current.y;
      groupRef.current.rotation.x = rotation.current.x;
    }
  });

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    autoSpin.current = false;
    prev.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerUp = () => (dragging.current = false);
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    rotation.current.y += (e.clientX - prev.current.x) * 0.005;
    rotation.current.x += (e.clientY - prev.current.y) * 0.005;
    prev.current = { x: e.clientX, y: e.clientY };
  };

  return (
    <group
      ref={groupRef}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerUp}
    >
      <mesh>
        <icosahedronGeometry args={[3.4, 2]} />
        <meshBasicMaterial color="#2563eb" wireframe transparent opacity={0.25} />
      </mesh>
      {nodePositions.map((n) => (
        <TechNode key={n.name} position={n.position} name={n.name} onHover={onHover} />
      ))}
    </group>
  );
}

export default function SphereScene() {
  const [, setHovered] = useState<string | null>(null);

  return (
    <Canvas camera={{ position: [0, 0, 9], fov: 55 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <SphereGroup onHover={setHovered} />
    </Canvas>
  );
}
