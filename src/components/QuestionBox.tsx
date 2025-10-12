import { useGameStore } from '../stores/useGameStore';
import { CuboidCollider, RigidBody } from '@react-three/rapier';

interface QuestionBoxProps {
  position: [number, number, number];
  questionId: number;
}

export function QuestionBox({ position, questionId }: QuestionBoxProps) {
  const startQuestion = useGameStore((state) => state.startQuestion);

  return (
    <RigidBody type="fixed" colliders={false} position={position}>
      {/* Mesh visual untuk kotaknya */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="gold" emissive="yellow" emissiveIntensity={2}/>
      </mesh>
      {/* Collider sensor untuk deteksi tabrakan tanpa fisik */}
      <CuboidCollider
        args={[0.6, 0.6, 0.6]}
        sensor
        onIntersectionEnter={() => {
          console.log(`Player entered question box ${questionId}`);
          startQuestion(questionId);
        }}
      />
    </RigidBody>
  );
}