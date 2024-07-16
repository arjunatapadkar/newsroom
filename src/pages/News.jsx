import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const News = ({ isOpen, onClose, news }) => {


  return (
    <div>
        {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2 className='text-xs italic'>by {news.author}</h2>
            <p className='text-sm'>{news.description}</p>
            
            <button className="close-btn text-[10px]" onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default News