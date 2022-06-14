import React, {useState} from 'react';
import Square from './Square';



export default function Body(){
    const [colors, setColor] = useState(['white', 'black', 'black', 'white'])
  
    function setDJSmall(){
        setColor( prevColor => prevColor[0] === 'white' 
            ? ['black', 'white', 'white', 'white']
            : ['white', 'black', 'black', 'black'] 
        )
  }
  

  
  function setParty(){
      setColor( prevColor => ['purple', 'purple', prevColor[2] , prevColor[3] ])
  }
  
  function setBottomLeft(){
      setColor( prevColor => [prevColor[0], prevColor[1], 'blue', prevColor[3]])
  }

  function setBottomRight(){
    setColor( prevColor => [prevColor[0], prevColor[1], prevColor[2], 'blue'])
}

function setBigOne(){
    setColor(prevColor => ['yellow', prevColor[1], prevColor[2], prevColor[3]])
}

function setBigTwo(){
    setColor(prevColor => [prevColor[0], 'coral', prevColor[2], prevColor[3]])
}

function setBigThree(){
    setColor(prevColor => [prevColor[0], prevColor[1], 'darkorchid', prevColor[3]])
}

function setBigFour(){
    setColor(prevColor => [prevColor[0], prevColor[1], prevColor[2], 'crimson'])
}


let makeNoiseArray = [setParty, setBottomLeft, setBottomRight, setBigOne, setBigTwo, setBigThree, setBigFour]

function setMakeNoise(){
 const music = new Audio('./wild-energy-electro-house-loop-music-034069440_nw_prev.mp4')
    music.play()
    music.playbackRate = 1
    setInterval( ()=>{
     let i = Math.floor(Math.random() * 7)
     makeNoiseArray[i]()
 }, 50)
}

    return(  
    <div className="body-container">
        <div className="image-container">
            <img className="DJimage" src="images/DJ.jpg" alt="dix" />
        </div>
        <div className="square-container">
            {colors.map((color, i) => <Square key={i} color={color} />)}
        </div>
        <div className="button-container">
            <button onClick={setDJSmall} className="button-small">DJ small</button>
            <button onClick={setParty} className="button-party">Party DJ</button>
            <button onClick={setBottomLeft} className="button-left-blue">Left Blue</button>
            <button onClick={setBottomRight} className="button-right-blue">Right Blue</button>
            <button onClick={setBigOne} className="button-big-one">Big DJ one</button>
            <button onClick={setBigTwo} className="button-big-two">Big DJ two</button>
            <button onClick={setBigThree} className="button-big-three">Big DJ three</button>
            <button onClick={setBigFour} className="button-big-four">Big DJ four</button>
            <button onClick={setMakeNoise}className="button-make-noise">Make Noise</button>
        </div>
    
    </div>)
}