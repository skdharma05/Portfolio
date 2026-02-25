import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// ── Node positions forming a layered neural network ──────────────────────────
const LAYERS = [
    // Input layer  (x = -3.0)
    [-3.0, -1.2, 0], [-3.0, -0.4, 0], [-3.0, 0.4, 0], [-3.0, 1.2, 0],
    // Hidden 1     (x = -1.0)
    [-1.0, -1.8, 0.3], [-1.0, -0.9, 0.5], [-1.0, 0.0, -0.4], [-1.0, 0.9, 0.6], [-1.0, 1.8, -0.2],
    // Hidden 2     (x =  1.0)
    [1.0, -1.4, -0.5], [1.0, -0.5, 0.4], [1.0, 0.4, 0.6], [1.0, 1.4, -0.3],
    // Output layer (x =  3.0)
    [3.0, -0.8, 0.2], [3.0, 0.0, -0.3], [3.0, 0.8, 0.1],
];

// Pairs of node indices that should be connected
const CONNECTIONS = [
    // Input → Hidden1
    [0, 4], [0, 5], [0, 6], [1, 5], [1, 6], [1, 7], [2, 6], [2, 7], [2, 8], [3, 7], [3, 8],
    // Hidden1 → Hidden2
    [4, 9], [4, 10], [5, 10], [5, 11], [6, 10], [6, 11], [6, 12], [7, 11], [7, 12], [8, 12],
    // Hidden2 → Output
    [9, 13], [9, 14], [10, 14], [10, 15], [11, 14], [11, 15], [12, 14], [12, 15],
];

const NODE_COLORS = [
    '#818cf8', '#6366f1', // input — indigo
    '#ec4899', '#f472b6', '#db2777', // hidden1 — pink
    '#06b6d4', '#22d3ee', '#0891b2', // hidden2 — cyan
    '#a78bfa', '#8b5cf6', // output — violet
];

// Animated connection line using BufferGeometry
function Connection({ start, end, index }) {
    const ref = useRef();

    useFrame(({ clock }) => {
        if (ref.current) {
            const t = (Math.sin(clock.elapsedTime * 1.4 + index * 0.7) + 1) / 2;
            ref.current.material.opacity = 0.08 + t * 0.35;
        }
    });

    const points = [
        new THREE.Vector3(...start),
        new THREE.Vector3(...end),
    ];
    const geom = new THREE.BufferGeometry().setFromPoints(points);

    return (
        <line ref={ref} geometry={geom}>
            <lineBasicMaterial
                color="#818cf8"
                transparent
                opacity={0.2}
                linewidth={1}
            />
        </line>
    );
}

// Single pulsing neuron node
function Node({ position, index }) {
    const ref = useRef();
    const color = NODE_COLORS[index % NODE_COLORS.length];

    useFrame(({ clock }) => {
        if (ref.current) {
            const pulse = 1 + 0.15 * Math.sin(clock.elapsedTime * 2.2 + index * 1.1);
            ref.current.scale.setScalar(pulse);
        }
    });

    return (
        <mesh ref={ref} position={position}>
            <sphereGeometry args={[0.14, 16, 16]} />
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.8}
                roughness={0.2}
                metalness={0.4}
            />
        </mesh>
    );
}

// The full scene graph
function NeuralScene() {
    const groupRef = useRef();

    useFrame(({ clock }) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.25) * 0.4;
            groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.18) * 0.12;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Connection lines */}
            {CONNECTIONS.map(([a, b], i) => (
                <Connection key={i} start={LAYERS[a]} end={LAYERS[b]} index={i} />
            ))}
            {/* Neuron nodes */}
            {LAYERS.map((pos, i) => (
                <Node key={i} position={pos} index={i} />
            ))}
        </group>
    );
}

const NeuralNetwork3D = () => {
    return (
        <div className="w-full h-full">
            <Canvas
                camera={{ position: [0, 0, 7], fov: 55 }}
                style={{ background: 'transparent' }}
                gl={{ alpha: true, antialias: true }}
            >
                <ambientLight intensity={0.3} />
                <pointLight position={[5, 5, 5]} intensity={1.5} color="#818cf8" />
                <pointLight position={[-5, -3, -5]} intensity={1.0} color="#ec4899" />
                <pointLight position={[0, 6, 2]} intensity={0.8} color="#06b6d4" />
                <NeuralScene />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.6}
                    maxPolarAngle={Math.PI * 0.75}
                    minPolarAngle={Math.PI * 0.25}
                />
            </Canvas>
        </div>
    );
};

export default NeuralNetwork3D;
