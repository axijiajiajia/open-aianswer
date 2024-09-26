'use client';

import { useState } from 'react';

interface SampleQuestion {
  category: string;
  questions: string[];
}

interface QuestionFormProps {
  sampleQuestions: SampleQuestion[];
}

export default function QuestionForm({ sampleQuestions }: QuestionFormProps) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setAnswer(data.answer);
    } catch (error) {
      console.error("Error:", error);
      setAnswer("Sorry, an error occurred while generating the answer. Please try again later.");
    }
    setIsLoading(false);
  };

  const handleSampleQuestionClick = (sampleQuestion: string) => {
    setQuestion(sampleQuestion);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-8">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your question here..."
          className="w-full h-32 p-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500"
          maxLength={500}
        />
        <div className="text-right text-sm text-gray-400 mt-1">
          {question.length}/500
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-4 py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200 disabled:opacity-50"
        >
          {isLoading ? "Generating Answer..." : "Generate AI Answer"}
        </button>
      </form>

      {answer && (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-2">AI Generated Answer:</h2>
          <p className="whitespace-pre-wrap">{answer}</p>
        </div>
      )}

      <div className="mt-12">
        <h2 className="text-xl mb-4">Sample Marketing Questions for AI Answer Generator</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleQuestions.map((category, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">{category.category}</h3>
              <ul>
                {category.questions.map((q, qIndex) => (
                  <li key={qIndex} className="mb-2">
                    <button
                      onClick={() => handleSampleQuestionClick(q)}
                      className="text-left text-blue-400 hover:text-blue-300 transition duration-200"
                    >
                      {q}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}