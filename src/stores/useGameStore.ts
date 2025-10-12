import { create } from 'zustand';
import questionsData from '../data/questions.json';

// Tentukan tipe data untuk setiap pertanyaan
interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  points: number;
  clueForNext: string;
  position: [number, number, number];
}

// Tentukan tipe data untuk state
interface GameState {
  questions: Question[];
  score: number;
  currentQuestionIndex: number | null;
  currentClue: string;
  isQuestionModalOpen: boolean;
  visibleBoxIndex: number; // index kotak yang terlihat
  answerError: boolean;
  startQuestion: (questionIndex: number) => void;
  submitAnswer: (answer: string) => void;
  closeModal: () => void;
  resetAnswerError: () => void;
}

export const useGameStore = create<GameState>((set, get) => ({
  questions: questionsData as Question[],
  score: 0,
  currentQuestionIndex: null,
  currentClue: (questionsData[0]?.clueForNext || "Tantangan pertama menantimu!"),
  isQuestionModalOpen: false,
  visibleBoxIndex: 0,
  answerError: false,

  startQuestion: (questionIndex: number) => {
    // Hanya bisa buka kotak yang sesuai urutan
    if (questionIndex === get().visibleBoxIndex) {
      set({ currentQuestionIndex: questionIndex, isQuestionModalOpen: true });
    }
  },

  submitAnswer: (answer: string) => {
    const { questions, currentQuestionIndex } = get();
    if (currentQuestionIndex === null) return;

    const question = questions.find(q => q.id === currentQuestionIndex);
    if (!question) return;

    if (question.correctAnswer === answer) {
      set((state: GameState) => {
        const nextIndex = state.visibleBoxIndex + 1;
        const nextClue = state.questions.find(q => q.id === nextIndex)?.clueForNext || "Selamat! Kamu telah menyelesaikan semua tantangan!";
        return {
          score: state.score + question.points,
          currentClue: nextClue,
          isQuestionModalOpen: false,
          currentQuestionIndex: null,
          visibleBoxIndex: nextIndex,
          answerError: false,
        };
      });
    } else {
      set({ answerError: true });
    }
  },
  resetAnswerError: () => set({ answerError: false }),
  
  closeModal: (): void => {
    set({ isQuestionModalOpen: false, currentQuestionIndex: null });
  }
}));