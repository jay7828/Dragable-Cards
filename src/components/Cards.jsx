import React, { useState } from 'react';
import { ResizableBox } from 'react-resizable';
import Draggable from 'react-draggable';
import Modal from 'react-modal';

const Card = ({ id, text, position, onRemove, onUpdatePosition }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  // Handle "Show More" button click to open modal
  const handleShowMore = () => {
    setIsOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsOpen(false);
    setShowMore(false);
  };

  // Handle card removal
  const handleRemove = () => {
    onRemove(id);
  };

  // Handle drag stop event to update card position
  const handleDragStop = (e, data) => { 
    onUpdatePosition(id, { x: data.x, y: data.y });
  };

  return (
    <Draggable 
      defaultPosition={position} 
      handle=".handle-drag" 
      onStop={handleDragStop}
    >
      <ResizableBox
        height={200}
        width={300}
        minConstraints={[200, 150]}
        maxConstraints={[600, 300]}
      >
        <div className="bg-gray-200 flex flex-col handle-drag w-full h-full border border-gray-300 shadow-md py-4 px-2 rounded-lg">
          {/* Card text */}
          <p className="text-gray-800 text-wrap full h-full">
            {showMore ? text : `${text.substring(0, 25)}...`}
          </p>
          <div className="flex flex-col items-center justify-between gap-1">
            {/* Show More button */}
            <button
              onClick={handleShowMore}
              className="text-white hover:underline bg-blue-600 p-1.5 w-full rounded-md"
            >
              Show more
            </button>
            {/* Remove button */}
            <button
              onClick={handleRemove}
              className="text-white hover:underline bg-red-600 p-1 rounded-md w-full"
            >
              Remove
            </button>
          </div>

          {/* Modal for showing full card details */}
          <Modal
            isOpen={isOpen}
            onRequestClose={handleCloseModal}
            contentLabel="Card Details"
            ariaHideApp={false}
            className="bg-white p-6 rounded-lg shadow-xl max-w-lg mx-auto mt-20"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          >
            <h2 className="text-2xl font-bold mb-4">Card Details</h2>
            <p className="text-lg mb-4">{text}</p>
            <button
              onClick={handleCloseModal}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Close
            </button>
          </Modal>
        </div>
      </ResizableBox>
    </Draggable>
  );
};

export default Card;
