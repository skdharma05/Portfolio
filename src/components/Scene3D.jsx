import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';

function FloatingMesh() {
    return (
        <Float
            speed={2}
            rotationIntensity={1.5}
            floatIntensity={2}
            floatingRange={[-0.3, 0.3]}
        >
            <mesh>
                <torusKnotGeometry args={[1, 0.35, 128, 32]} />
                <MeshDistortMaterial
                    color="#6366f1"
                    attach="material"
                    distort={0.3}
                    speed={2}
                    roughness={0.1}
                    metalness={0.8}
                    emissive="#818cf8"
                    emissiveIntensity={0.2}
                />
            </mesh>
        </Float>
    );
}

const Scene3D = () => {
    return (
        <div className="w-full h-full">
            <Suspense fallback={<div className="w-full h-full bg-transparent" />}>
                <Canvas
                    camera={{ position: [0, 0, 5], fov: 60 }}
                    style={{ background: 'transparent' }}
                    gl={{ alpha: true, antialias: true }}
                >
                    <ambientLight intensity={0.4} />
                    <directionalLight position={[5, 5, 5]} intensity={1.2} color="#818cf8" />
                    <pointLight position={[-5, -5, -5]} intensity={0.8} color="#ec4899" />
                    <pointLight position={[0, 5, 0]} intensity={0.6} color="#06b6d4" />
                    <FloatingMesh />
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        autoRotate
                        autoRotateSpeed={1.5}
                        maxPolarAngle={Math.PI}
                    />
                </Canvas>
            </Suspense>
        </div>
    );
};

export default Scene3D;
