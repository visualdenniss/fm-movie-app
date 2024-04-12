// PlayMedia.jsx
'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './PlayAnime.module.css'; // Import CSS module
import { fetchAnimeVideo } from '@/lib/action';

const PlayMedia = ({ id }) => {
  const [videoData, setVideoData] = useState(null); // State to store video data
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handlePlay = async () => {
    const data = await fetchAnimeVideo(id);
    setVideoData(data);
    setShowModal(true); // Show modal on play button click
  };

  const closeModal = () => {
    setShowModal(false); // Close modal
  };

    // Event listener to handle escape key press
    useEffect(() => {
        const handleEscKeyPress = (event) => {
          if (event.key === 'Escape') {
            closeModal(); // Close modal if escape key is pressed
          }
        };
    
        window.addEventListener('keydown', handleEscKeyPress);
    
        return () => {
          window.removeEventListener('keydown', handleEscKeyPress);
        };
      }, []); // Empty dependency array ensures that this effect runs only once

  return (
    <>
      <div className='absolute inset-0 hidden place-content-center bg-black/50 group-hover:grid'>
        <button className='flex items-center gap-3 bg-playBgHalfOpacity p-2 w-[110px] rounded-full' onClick={handlePlay}>
          <Image src='/assets/icon-play.svg' width={33} height={27} />
          <span className="text-lg font-medium">Play</span>
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={closeModal} aria-modal="true" role="dialog">
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            {/* Embed video */}
            {videoData && (
              <iframe
                title={videoData.name}
                src={videoData[0].player_url}
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
              ></iframe>
            )}
          </div>
          <button className='absolute text-4xl text-accent hover:text-white md:top-2 right-5 top-16' onClick={closeModal} aria-label="Close Modal">X</button>
        </div>
      )}
    </>
  );
};

export default PlayMedia;