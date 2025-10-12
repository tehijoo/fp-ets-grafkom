import { useGameStore } from '../stores/useGameStore';

export function QuestionModal() {
  const {
    isQuestionModalOpen,
    questions,
    currentQuestionIndex,
    submitAnswer,
    closeModal,
    answerError,
    resetAnswerError,
  } = useGameStore();

  if (!isQuestionModalOpen || currentQuestionIndex === null) {
    return null;
  }

  // Cari pertanyaan berdasarkan ID yang aktif saat ini
  const question = questions.find(q => q.id === currentQuestionIndex);
  if (!question) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-11/12 md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">{question.question}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => submitAnswer(option)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
              disabled={answerError}
            >
              {option}
            </button>
          ))}
        </div>
        {answerError && (
          <div className="mt-4 text-red-400 font-bold flex flex-col items-center">
            Jawaban salah, coba lagi!
            <button
              onClick={resetAnswerError}
              className="mt-2 bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
            >
              Coba Lagi
            </button>
          </div>
        )}
        <button onClick={closeModal} className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Tutup
        </button>
      </div>
    </div>
  );
}