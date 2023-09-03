import { useState } from 'react';

function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [activo, setActivo] = useState(false);
  const toggleEstado = () => {
    setActivo(!activo);
    if (!isLiked) {
      setIsLiked(true);
      setLikeCount(likeCount + 1);
    } else {
      setIsLiked(false);
      setLikeCount(likeCount - 1);
    }
  };



  return (
    <div>
      <button className='heart-toglle like-button' onClick={toggleEstado}>
      {activo ? '❤️' : '🤍'}
        {isLiked ? '1' : ''}
    </button>
      
    </div>
  );
}

export default LikeButton;