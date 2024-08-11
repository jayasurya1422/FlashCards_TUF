import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Flashcard from './Flashcard'; // Import Flashcard component

const FetchRandomQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://opentdb.com/api.php', {
          params: {
            amount: 5,
            type: 'multiple',
            difficulty: 'easy'
          }
        });

        // Format the questions for the flashcard component
        const formattedQuestions = response.data.results.map(q => ({
          question: q.question,
          answer: q.correct_answer,
          options: [...q.incorrect_answers, q.correct_answer].sort() // Shuffle answers
        }));

        formattedQuestions[0].isFirst = true;
        formattedQuestions[formattedQuestions.length - 1].isLast = true;

        setQuestions(formattedQuestions);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (questions.length === 0) return <div>Loading...</div>;

  return (
    <Flashcard
      flashcard={questions[currentIndex]}
      onNext={handleNext}
      onPrevious={handlePrevious}
    />
  );
};

export default FetchRandomQuestions;
