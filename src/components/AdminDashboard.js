import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [editingCard, setEditingCard] = useState(null);

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/flashcards');
        setFlashcards(response.data);
      } catch (error) {
        console.error('Error fetching flashcards:', error);
      }
    };

    fetchFlashcards();
  }, []);

  const handleAddFlashcard = async () => {
    if (editingCard) {
      // Update existing flashcard
      try {
        const updatedCard = { ...editingCard, question, answer };
        await axios.put(`http://localhost:5000/api/flashcards/${updatedCard.id}`, updatedCard);
        setFlashcards(flashcards.map(card => card.id === updatedCard.id ? updatedCard : card));
        setEditingCard(null);
      } catch (error) {
        console.error('Error updating flashcard:', error);
      }
    } else {
      // Add new flashcard
      try {
        const newCard = { question, answer };
        const response = await axios.post('http://localhost:5000/api/flashcards', newCard);
        setFlashcards([...flashcards, response.data]);
      } catch (error) {
        console.error('Error adding flashcard:', error);
      }
    }
    setQuestion('');
    setAnswer('');
  };

  const handleDeleteFlashcard = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/flashcards/${id}`);
      setFlashcards(flashcards.filter(card => card.id !== id));
    } catch (error) {
      console.error('Error deleting flashcard:', error);
    }
  };

  const handleEditFlashcard = (card) => {
    setQuestion(card.question);
    setAnswer(card.answer);
    setEditingCard(card);
  };

  return (
    <div className="container mx-auto p-6 bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-4 text-gray-900">Admin Dashboard</h2>
      
      <div className="flashcard-form mb-6 p-4 bg-gradient-to-r from-green-100 to-green-50 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">Add or Edit Flashcard</h3>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Question"
          className="block w-full p-2 mb-2 border border-gray-300 rounded-md bg-white text-gray-700"
        />
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Answer"
          className="block w-full p-2 mb-4 border border-gray-300 rounded-md bg-white text-gray-700"
        />
        <button 
          onClick={handleAddFlashcard}
          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-md shadow hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {editingCard ? 'Update Flashcard' : 'Add Flashcard'}
        </button>
      </div>

      <div className="flashcard-list">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">Flashcard List</h3>
        <ul className="list-disc pl-5">
          {flashcards.map(card => (
            <li key={card.id} className="flex items-center justify-between mb-2 p-2 bg-gradient-to-r from-gray-100 to-gray-50 rounded-md shadow-sm">
              <span className="text-gray-700">{card.question} - {card.answer}</span>
              <div>
                <button 
                  onClick={() => handleEditFlashcard(card)}
                  className="px-2 py-1 bg-gradient-to-r from-green-400 to-green-300 text-white font-semibold rounded-md shadow hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDeleteFlashcard(card.id)}
                  className="ml-2 px-2 py-1 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-md shadow hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
