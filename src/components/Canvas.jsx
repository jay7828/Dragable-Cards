import React, { useState } from 'react';
import Card from './Cards';
import Arrow from './Arrow';

const Canvas = () => {
  const [text, setText] = useState('');
  const [cards, setCards] = useState([
    { id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', position: { x: 50, y: 50 } },
    { id: 2, text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', position: { x: 500, y: 50 } },
  ]);
  const [connections, setConnections] = useState([{ startId: 1, endId: 2 }]);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  // Add a new card
  const addCard = () => {
    if (text.trim() === '') return;
    const newCard = {
      id: cards.length + 1,
      text,
      position: { x: 300, y: 100 },
    };
    setCards([...cards, newCard]);
    setText('');
  };

  // Remove a card
  const removeCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
    setConnections(connections.filter(conn => conn.startId !== id && conn.endId !== id));
  };

  // Update card position after dragging
  const updateCardPosition = (id, position) => {
    setCards(cards.map(card =>
      card.id === id ? { ...card, position } : card
    ));
  };

  // Get coordinates for arrow connection
  const getCordinates = (id) => {
    const card = cards.find((card) => card.id === id);  
    if (card) {
      return {
        x: card.position.x,
        y: card.position.y,
      };
    }
    return { x: 0, y: 0 };
  };

  // Handle arrow connection between cards
  const handleConnect = () => {
    if (start && end && start !== end) {
      if (!connections.some(conn => conn.startId === start && conn.endId === end)) {
        setConnections([...connections, { startId: parseInt(start), endId: parseInt(end) }]);
      }
    }
    setStart('');
    setEnd('');
  };

  return (
    <div className="p-4 h-screen flex flex-col bg-slate-600">
      {/* Input for adding a new card */}
      <div className="mb-4 flex items-center justify-between">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter card text"
          className="border border-gray-300 p-2 mr-2 rounded w-full"
        />
        <button
          onClick={addCard}
          className="bg-blue-500 w-28 p-2 text-white rounded hover:bg-blue-600 transition"
        >
          Add Card
        </button>
      </div>

      {/* Dropdowns for selecting start and end cards for connection */}
      <div className="mb-4 gap-2">
        <select className=' p-1 rounded-md mr-2' value={start} onChange={(e)=>setStart(e.target.value)} >
          <option value="">Select Start Card</option>
          {cards.map((card) => (
            <option key={card.id} value={card.id}>
              Card {card.id}
            </option>
          ))}
        </select>
        <select className=' p-1 rounded-md' value={end} onChange={(e)=>setEnd(e.target.value)}>
          <option value="">Select End Card</option>
          {cards.map((card) => (
            <option key={card.id} value={card.id}>
              Card {card.id}
            </option>
          ))}
        </select>
        <button 
          className="bg-green-500 p-2 text-white rounded ml-2"
          onClick={handleConnect}
        >
          Add Arrow
        </button>
      </div>

      {/* Canvas for cards and arrows */}
      <div className="relative flex-1 bg-gray-300 border border-gray-300 rounded-lg overflow-auto" style={{ minHeight: '500px' }}>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            text={card.text}
            position={card.position}
            onRemove={removeCard}
            onUpdatePosition={updateCardPosition}
          />
        ))}
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ zIndex: 10 }} // Ensure arrows are above other content
        >
          {connections.map((connection, index) => (
            <Arrow
              key={index}
              start={getCordinates(connection.startId)}
              end={getCordinates(connection.endId)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Canvas;
