import React from 'react'
import { useState } from 'react'


function Button() {

  const [like, setLike] = useState(0)
  const [dislike, setDisLike] = useState(0)

  const handleCountLike = () => {
    setLike(like + 1)
  }
  const handleCountDislike = () => {
    setDisLike(dislike + 1)
  }
  return (
    <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: "center", marginTop: '-130px', gap: '15px' }}>
      <button type='button' onClick={handleCountLike} style={{ color: 'red', backgroundColor: 'black', border: 'none', paddin: '5px', borderRadius: '10px', width: '80px', height: '30px' }}>
        Likes  {like}
      </button>
      <button type='button' onClick={handleCountDislike} style={{ color: 'red', backgroundColor: 'black', border: 'none', paddin: '5px', borderRadius: '10px', width: '80px', height: '30px' }}>
        Dislikes  {dislike}
      </button>
    </div>
  )
}

export default Button

