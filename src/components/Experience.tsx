import { KeyboardControls, PositionalAudio } from "@react-three/drei";
import { useLoader, useThree } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import { useEffect } from "react";
import * as THREE from "three";
import { Character } from "./Character";
import { InvasionEnvironment } from "./Invasion_environment";
import AtmosphericEffects from "./AtmosphericEffects";
import keyboardMap from "../data/keyboardMap.json";
import animationSet from "../data/animationSet.json";
import { QuestionBox } from './QuestionBox'; // <-- Impor komponen baru
import { useGameStore } from '../stores/useGameStore'; // <-- Impor store
import { useState } from 'react';

useLoader.preload(THREE.TextureLoader, "/models/Textures/sky.jpg");

const Experience = ({ shadows }: { shadows: boolean }) => {
  const characterURL = "/models/character.glb";
  
  // =================== PERUBAHAN DIMULAI DI SINI ===================
  // Ambil data pertanyaan dan index kotak yang terlihat dari store
  const questions = useGameStore((state) => state.questions);
  const visibleBoxIndex = useGameStore((state) => state.visibleBoxIndex);
  // =================== PERUBAHAN SELESAI DI SINI ===================

  const texture = useLoader(THREE.TextureLoader, "/models/Textures/sky.jpg");
  texture.mapping = THREE.EquirectangularReflectionMapping;

  const { scene } = useThree();
  useEffect(() => {
    scene.background = texture;
  }, [scene, texture]);

  return (
    <>
      <PositionalAudio
        url="/sounds/background.mp3"
        distance={1}
        loop
        autoplay
      />
      <ambientLight intensity={0.7} color="#b8d0ff" />
      <directionalLight
        intensity={1.5}
        castShadow
        position={[-30, 40, 30]}
        shadow-mapSize={[8192, 8192]}
        shadow-camera-far={120}
        shadow-camera-near={0.1}
        shadow-camera-left={-60}
        shadow-camera-right={60}
        shadow-camera-top={60}
        shadow-camera-bottom={-60}
        shadow-bias={-0.0002}
        color="#fffbe8"
      />
      <spotLight
        position={[0, 50, 0]}
        angle={0.7}
        penumbra={0.7}
        intensity={2.5}
        color="#fff7e0"
        castShadow
        shadow-mapSize={[4096, 4096]}
      />
      <pointLight
        position={[0, 10, 0]}
        intensity={0.5}
        color="#ffeedd"
        castShadow
      />
      {/* Atmospheric Effects */}
      <AtmosphericEffects />
      <Physics>
        <RigidBody type="fixed" colliders="trimesh">
          <InvasionEnvironment
            shadows={shadows}
            scale={1}
            position={[0, 0, 0]}
          />
        </RigidBody>
        <KeyboardControls map={keyboardMap}>
          <Ecctrl
            animated
            capsuleHalfHeight={0.05}
            scale={1.5}
            floatHeight={0.49}
            position={[-25, 25, -18]}
            jumpVel={3}
            {...{
              characterInitDir: 4.5, // Character initial facing direction (in rad)
              camMaxDis: -10,
              camMinDis: -1,
              camUpLimit: 1.3,
              camLowLimit: -0.5,
              camInitDir: { x: 0.23, y: 1.3 },
            }}
          >
            <EcctrlAnimation
              characterURL={characterURL}
              animationSet={animationSet}
            >
              <Character position={[0, -0.51, 0]} />
            </EcctrlAnimation>
          </Ecctrl>
        </KeyboardControls>

        {/* Render hanya kotak pertanyaan yang sesuai visibleBoxIndex */}
        {visibleBoxIndex < questions.length ? (
          questions
            .filter((q) => q.id === visibleBoxIndex)
            .map((q) => (
              <QuestionBox key={q.id} position={q.position} questionId={q.id} />
            ))
        ) : (
          <EndGameModal />
        )}

      </Physics>
    </>
  );
};


function EndGameModal() {
  const score = useGameStore((state) => state.score);
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col justify-center items-center z-50">
      <div className="bg-white text-gray-900 p-10 rounded-lg shadow-2xl flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Selamat!</h1>
        <p className="text-xl mb-2">Kamu telah menyelesaikan semua tantangan 🎉</p>
        <p className="text-lg mb-6">Skor akhir: <span className="font-bold">{score}</span></p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
          onClick={() => window.location.reload()}
        >
          Main Lagi
        </button>
      </div>
    </div>
  );
}

export default Experience;