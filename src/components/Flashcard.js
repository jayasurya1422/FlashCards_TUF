import React, { useState } from 'react';

const Flashcard = ({ flashcard, onNext, onPrevious }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <div className="relative max-w-xs w-full mb-4">
        {/* Inline styles for 3D flip effect */}
        <style>
          {`
            .card-content {
              width: 100%;
              height: auto;
              min-height: 300px; /* Adjust if needed */
              position: relative;
              transition: transform 0.6s;
              transform-style: preserve-3d;
              display: flex;
              flex-direction: column;
              justify-content: center;
            }

            .card-content.flipped {
              transform: rotateY(180deg);
            }

            .front,
            .back {
              position: absolute;
              width: 100%;
              height: 100%;
              backface-visibility: hidden;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: 20px;
              box-sizing: border-box;
              font-size: 1.2em;
              text-align: center;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
              overflow: auto;
            }

            .front {
              background-color: #ffffff;
              border: 1px solid #d1d5db;
            }

            .back {
              background-color: #f3f4f6;
              border: 1px solid #e5e7eb;
              transform: rotateY(180deg);
            }

            .option {
              margin: 5px 0;
            }
          `}
        </style>

        <div
          className={`card-content ${flipped ? 'flipped' : ''} cursor-pointer`}
          onClick={handleFlip}
        >
          <div className="front flex flex-col items-center justify-center">
            <div className="text-gray-800 font-semibold mb-4 whitespace-normal break-words" dangerouslySetInnerHTML={{ __html: flashcard.question }} />
            <ul className="list-disc pl-5 text-gray-700 mt-4">
              {flashcard.options.map((option, index) => (
                <li key={index} className="option whitespace-normal break-words" dangerouslySetInnerHTML={{ __html: option }} />
              ))}
            </ul>
          </div>
          <div className="back flex flex-col items-center justify-center p-4">
            <p className="text-gray-800 font-medium mb-4 whitespace-normal break-words" dangerouslySetInnerHTML={{ __html: flashcard.answer }} />
          </div>
        </div>
      </div>

      <div className="flex justify-between w-full max-w-xs mt-4">
        <button
          onClick={onPrevious}
          disabled={flashcard.isFirst}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 disabled:bg-blue-400 transition-colors duration-300"
        >
          Previous
        </button>
        <button
          onClick={onNext}
          disabled={flashcard.isLast}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 disabled:bg-blue-400 transition-colors duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Flashcard;
