import React,{useEffect} from 'react';
import { Navbar } from './Navbar';
import { ParticleComponent } from './ParticleComponent';
import GlobeGif from '../Assets/Image/GlobeGif.gif';



function LandingPlace() {

  function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function () {

      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount)
        window.setTimeout(function () {
          var usedColor = colors.shift();
          colors.push(usedColor);
          var usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute('style', 'color:' + colors[0])
          letterCount += x;
          waiting = false;
        }, 1000)
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function () {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000)
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount)
        letterCount += x;
      }
    }, 120)
  }

  useEffect(() => {
    consoleText(['Websites', 'Applications', 'Softwares'], 'text',['tomato','yellowgreen','orange']);
  }, [])
  
  return (
    <>
      <ParticleComponent />
      <Navbar />
      <div className='d-flex align-items-center justify-content-center px-5'>
        <div className='w-50 d-flex flex-column justify-content-center pb-4' >
          <p style={{ color: "skyblue", fontWeight: 600, opacity: .7 }}>JOIN THE REVOLUTION</p>
          <p style={{ color: 'white', fontWeight: 200, fontSize: 45, fontFamily: 'Comfortaa', opacity: .7 }}>
            We Build Creative&nbsp;
            <span id='text' style={{ color: 'skyblue', opacity: 2, fontFamily: 'Comfortaa', marginTop: 20, fontWeight: 600 }}>
              
            </span>
          </p>
          <p style={{ color: 'white', fontWeight: 400, fontSize: 28, fontFamily: 'Comfortaa', opacity: .7 }}>Best IT Service Provider at Affordable Price.</p>
        </div>
        <div className='w-50 d-flex justify-content-center'>
          <img src={GlobeGif} alt="GlobeGif" style={{ height: '100%', width: "100%" }} />
        </div>
      </div>
    </>
  )
}

export { LandingPlace };