import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function WireframeGlobe() {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.15;
    }
  });

  const arcLines = useMemo(() => {
    const arcs: THREE.Vector3[][] = [];
    const routes = [
      { from: [40.7, -74], to: [51.5, -0.1] },
      { from: [35.7, 139.7], to: [1.35, 103.8] },
      { from: [28.6, 77.2], to: [25.3, 55.3] },
      { from: [-33.9, 18.4], to: [48.9, 2.35] },
      { from: [37.8, -122.4], to: [35.7, 139.7] },
    ];

    for (const route of routes) {
      const points: THREE.Vector3[] = [];
      const [lat1, lon1] = route.from;
      const [lat2, lon2] = route.to;

      for (let t = 0; t <= 1; t += 0.02) {
        const lat = lat1 + (lat2 - lat1) * t;
        const lon = lon1 + (lon2 - lon1) * t;
        const alt = 1.02 + Math.sin(t * Math.PI) * 0.15;

        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lon + 180) * (Math.PI / 180);

        points.push(
          new THREE.Vector3(
            -alt * Math.sin(phi) * Math.cos(theta),
            alt * Math.cos(phi),
            alt * Math.sin(phi) * Math.sin(theta)
          )
        );
      }
      arcs.push(points);
    }
    return arcs;
  }, []);

  return (
    <group ref={ref}>
      {/* Wireframe sphere */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#00b4d8"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* Inner glow sphere */}
      <mesh>
        <sphereGeometry args={[0.98, 32, 32]} />
        <meshBasicMaterial
          color="#00b4d8"
          transparent
          opacity={0.03}
        />
      </mesh>

      {/* Flight path arcs */}
      {arcLines.map((points, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array(points.flatMap((p) => [p.x, p.y, p.z])), 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#00b4d8" transparent opacity={0.4} />
        </line>
      ))}
    </group>
  );
}

function FloatingPlane() {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime();
      ref.current.position.x = Math.sin(t * 0.3) * 2;
      ref.current.position.y = Math.cos(t * 0.2) * 0.5 + 0.5;
      ref.current.position.z = Math.cos(t * 0.3) * 1.5;
      ref.current.rotation.z = Math.sin(t * 0.3) * 0.2;
      ref.current.rotation.y = Math.atan2(
        Math.cos(t * 0.3) * 2 * 0.3,
        1
      );
    }
  });

  return (
    <group ref={ref} scale={0.08}>
      {/* Fuselage */}
      <mesh>
        <cylinderGeometry args={[0.3, 0.3, 4, 8]} />
        <meshBasicMaterial color="#00b4d8" transparent opacity={0.3} wireframe />
      </mesh>
      {/* Wings */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.05, 5, 1]} />
        <meshBasicMaterial color="#00b4d8" transparent opacity={0.25} wireframe />
      </mesh>
      {/* Tail */}
      <mesh position={[0, -1.8, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.05, 1.5, 0.5]} />
        <meshBasicMaterial color="#00b4d8" transparent opacity={0.25} wireframe />
      </mesh>
      {/* Vertical stabilizer */}
      <mesh position={[0, -1.8, 0]}>
        <boxGeometry args={[0.05, 0.8, 0.5]} />
        <meshBasicMaterial color="#00b4d8" transparent opacity={0.25} wireframe />
      </mesh>
    </group>
  );
}

function Particles() {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#00b4d8" size={0.02} transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

const HeroGlobe = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <WireframeGlobe />
        <FloatingPlane />
        <Particles />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default HeroGlobe;
