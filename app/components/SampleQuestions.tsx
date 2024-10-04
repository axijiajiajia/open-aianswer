'use client'

import React from 'react';

interface Question {
  question: string;
  answer: string;
}

interface SampleQuestionsProps {
  questions: Question[];
}

const SampleQuestions: React.FC<SampleQuestionsProps> = ({ questions }) => {
  return (
    <div>
      <h2>Sample Questions</h2>
      <ul>
        {questions.map((q, index) => (
          <li key={index}>
            <h3>{q.question}</h3>
            <p>{q.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SampleQuestions;