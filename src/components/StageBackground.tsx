import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { PointLight, SpotLight } from 'three'
import { OrbitControls } from '@react-three/drei'

function StageLights() {
  const light1Ref = useRef<PointLight>(null)
  const light2Ref = useRef<PointLight>(null)
  const light3Ref = useRef<PointLight>(null)
  const spotLightRef = useRef<SpotLight>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (light1Ref.current) {
      light1Ref.current.intensity = 2 + Math.sin(time * 2) * 0.5
    }
    if (light2Ref.current) {
      light2Ref.current.intensity = 1.5 + Math.sin(time * 2 + 1) * 0.3
    }
    if (light3Ref.current) {
      light3Ref.current.intensity = 2.5 + Math.sin(time * 2 + 2) * 0.7
    }
  })

  return (
    <>
      {/* Stage floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Back wall */}
      <mesh position={[0, 2, -10]}>
        <planeGeometry args={[20, 10]} />
        <meshStandardMaterial color="#0a0a0a" />
      </mesh>

      {/* Stage lights */}
      <pointLight
        ref={light1Ref}
        position={[-5, 5, 0]}
        color="#ff4444"
        intensity={2}
        distance={15}
      />
      <pointLight
        ref={light2Ref}
        position={[0, 5, 0]}
        color="#ffff44"
        intensity={1.5}
        distance={15}
      />
      <pointLight
        ref={light3Ref}
        position={[5, 5, 0]}
        color="#ff8844"
        intensity={2.5}
        distance={15}
      />

      {/* Spot light */}
      <spotLight
        ref={spotLightRef}
        position={[0, 8, 5]}
        angle={0.3}
        penumbra={0.5}
        intensity={3}
        color="#ffffff"
        castShadow
      />

      {/* Ambient light for overall illumination */}
      <ambientLight intensity={0.1} />
    </>
  )
}

export default function StageBackground() {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: -1,
      background: 'linear-gradient(to bottom, #000000, #1a1a1a)'
    }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <StageLights />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
} 