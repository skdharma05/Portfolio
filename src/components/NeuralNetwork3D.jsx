import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// ── GENERATE BRAIN POINT CLOUD ──────────────────────────────────────────────
const generateBrainNodes = (count = 200) => {
    const nodes = [];
    while (nodes.length < count) {
        // Random point in an ellipsoid bounding box
        const x = (Math.random() - 0.5) * 4.0; // Width
        const y = (Math.random() - 0.5) * 3.0; // Height
        const z = (Math.random() - 0.5) * 4.5; // Depth (front to back)

        // Math for a brain-like volume (ellipsoid + hemispheres)
        const inEllipsoid = (x * x) / 4.0 + (y * y) / 2.25 + (z * z) / 5.06 <= 1;

        if (inEllipsoid) {
            // Create sagittal fissure (gap between left and right hemispheres)
            if (Math.abs(x) < 0.2) continue;

            // Indent the bottom a bit (cerebellum/brainstem area cut)
            if (y < -0.8 && z > -0.5 && z < 2.0 && Math.abs(x) < 1.2) continue;

            // Frontal lobe is slightly taller, occipital is slightly lower/wider — basic shaping
            // (We just use the raw ellipsoid for a modern tech feel)

            nodes.push([x, y, z]);
        }
    }
    return nodes;
};

// ── CONNECT NEARBY NODES ────────────────────────────────────────────────────
const generateConnections = (nodes, maxDistSq = 0.8) => {
    const lines = [];
    for (let i = 0; i < nodes.length; i++) {
        let connects = 0;
        for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i][0] - nodes[j][0];
            const dy = nodes[i][1] - nodes[j][1];
            const dz = nodes[i][2] - nodes[j][2];
            const distSq = dx * dx + dy * dy + dz * dz;

            if (distSq < maxDistSq) {
                // limit connections per node to avoid visual clutter
                if (connects < 4 && Math.random() > 0.2) {
                    lines.push(nodes[i][0], nodes[i][1], nodes[i][2]);
                    lines.push(nodes[j][0], nodes[j][1], nodes[j][2]);
                    connects++;
                }
            }
        }
    }
    return new Float32Array(lines);
};

const BrainGroup = () => {
    const groupRef = useRef();
    const materialRef = useRef();

    // Memoize the geometry generation so it only happens once
    const { nodes, linePositions } = useMemo(() => {
        const generatedNodes = generateBrainNodes(250); // density of brain
        const generatedLines = generateConnections(generatedNodes, 1.0); // connect radius
        return { nodes: generatedNodes, linePositions: generatedLines };
    }, []);

    // Gentle floating and rotation animation
    useFrame(({ clock }) => {
        if (groupRef.current) {
            const t = clock.elapsedTime;
            // Rotate the whole brain slowly
            groupRef.current.rotation.y = t * 0.15;
            // Slight tilt wobble
            groupRef.current.rotation.x = Math.sin(t * 0.5) * 0.1;
            groupRef.current.rotation.z = Math.cos(t * 0.5) * 0.05;
        }

        // Pulse the lines opacity slightly
        if (materialRef.current) {
            materialRef.current.opacity = 0.15 + Math.sin(clock.elapsedTime * 2) * 0.05;
        }
    });

    return (
        <group ref={groupRef} scale={[1.2, 1.2, 1.2]}>
            {/* The nodes (Neurons) */}
            {nodes.map((pos, i) => {
                // Determine color based on position to give a gradient look
                // Left hemisphere vs right, front to back
                const isLeft = pos[0] < 0;
                const isFront = pos[2] > 0;
                const color = isLeft
                    ? isFront ? '#6366f1' : '#818cf8' // Indigos
                    : isFront ? '#ec4899' : '#d946ef'; // Pinks/Fuchsias

                return (
                    <mesh key={i} position={pos}>
                        <sphereGeometry args={[0.06, 8, 8]} />
                        <meshStandardMaterial
                            color={color}
                            emissive={color}
                            emissiveIntensity={0.8}
                            roughness={0.2}
                            metalness={0.6}
                        />
                    </mesh>
                );
            })}

            {/* The connections (Synapses) -> Single LineSegments object for high FPS */}
            <lineSegments>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={linePositions.length / 3}
                        array={linePositions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <lineBasicMaterial
                    ref={materialRef}
                    color="#a5b4fc"
                    transparent
                    opacity={0.15}
                    depthWrite={false}
                />
            </lineSegments>
        </group>
    );
};

const NeuralNetwork3D = () => {
    return (
        <div className="w-full h-full relative">
            <Canvas
                camera={{ position: [0, 0, 7], fov: 55 }}
                style={{ background: 'transparent' }}
                gl={{ alpha: true, antialias: true }}
            >
                <ambientLight intensity={0.4} />
                {/* Colored lights to enhance the brain dual-tone effect */}
                <directionalLight position={[5, 3, 5]} intensity={1.5} color="#ec4899" />
                <directionalLight position={[-5, 3, -5]} intensity={1.5} color="#6366f1" />
                <directionalLight position={[0, -5, 0]} intensity={0.5} color="#06b6d4" />

                <BrainGroup />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                    maxPolarAngle={Math.PI * 0.65}
                    minPolarAngle={Math.PI * 0.35}
                />
            </Canvas>
        </div>
    );
};

export default NeuralNetwork3D;
