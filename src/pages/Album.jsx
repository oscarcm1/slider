import React, { useState } from 'react'
import "./album.css"
import Angel from "../assets/Portafolio/angel.webp"
import Dragon from "../assets/Portafolio/dragon2.webp"
import Fire from "../assets/Portafolio/Fire.png"
import Red from "../assets/Portafolio/red.webp"
import Neon from "../assets/Portafolio/Neon.png"

let pictures= [Angel, Fire, Dragon, Red, Neon];

function Album() {

    let size = pictures.length - 1;

    const [count, setCount] = useState(0);
    if (count > size) {
        setCount(0);
    }
    else if (count < 0) {
        setCount(size);
    }

    return (
        <div className='album'>

            <div className='slider-album'>

                <div className='photo small'>
                    <img src={pictures[count -1]} alt='' />
                </div>

                <div className='photo'>
                    <img src={pictures[count]} alt='' />
                </div>

                <div className='photo small'>
                    <img src={ pictures[count + 1]} alt='' />
                </div>
            </div>

            <div className='left'>
                <button onClick={() => setCount(count - 1)}><i className="bi bi-arrow-left-short"></i></button>
            </div>
            <div className='right'>
                <button onClick={() => setCount(count + 1)}><i className="bi bi-arrow-right-short"></i></button>
            </div>

        </div>
    )
}

export default  Album