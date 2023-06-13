import React, { useRef, useState } from 'react';
import './Section1.css'
import Electricity from './../assets/musics/artist-image/electricity.jpeg'
import Unavailable from './../assets/musics/artist-image/unavailable.jpg'
import BadInfluence from './../../src/assets/musics/artist-image/badinfluence.jpg'
import AudioA from '../assets/musics/artist-audio/Un.mp3'
import AudioB from '../assets/musics/artist-audio/Ele.mp3'
import AudioC from '../assets/musics/artist-audio/Bad.mp3'
import AudioD from '../assets/musics/artist-audio/odo.mp3'
import mara from './../assets/musics/artist-image/mara.jpeg'




const Section1 = () => {
    const audioRef = useRef(null);
    const [currentAudio, setCurrentAudio] = useState(null);

    const playAudio = () => {
      if (currentAudio) {
        currentAudio.pause();
      }
  
      if (audioRef.current.paused) {
        audioRef.current.play();
        setCurrentAudio(audioRef.current);
      } else {
        audioRef.current.pause();
        setCurrentAudio(null);
      }
    };
      const audioRef1 = useRef(null);
    const playAudio1 = () => {
        if (audioRef1.current.paused) {
          audioRef1.current.play();
        } else {
          audioRef1.current.pause();
        }
      };
      const audioRef2 = useRef(null);
    const playAudio2 = () => {
        if (audioRef2.current.paused) {
          audioRef2.current.play();
        } else {
          audioRef2.current.pause();
        }
      };
      const audioRef3= useRef(null);
    const playAudio3 = () => {
        if (audioRef3.current.paused) {
          audioRef3.current.play();
        } else {
          audioRef3.current.pause();
        }
      };
      const downloadUrls = [
        AudioA,
        AudioB,
        AudioC,
        AudioD,
      ];
      const handleDownload = (downloadUrl) => {
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = downloadUrl.substring(downloadUrl.lastIndexOf('/') + 1);
        link.click();
      };
      
    
    return (
        <>

            <div className="container">   
                <h1>TRENDING</h1>
                <div className="row">
                    <div className="col-md-3">
                        <div>
                            <img width='100%' className="" src={Unavailable} alt="una" />
                        </div>
                        < p className="text-center">Timeless by Davido</p>
                        <audio className='hiddens' ref={audioRef} controls id="myAudio">
                            <source src={AudioA}></source>
                        </audio>

                        <button type="button" onClick={playAudio} className="btn btn-primary btn-block">play</button>
                        <button onClick={() => handleDownload(downloadUrls[0])}>Download</button>

                    </div>
                    <div className="col-md-3">
                        <img width='100%' className="" src={Electricity} alt="ele" />
                        <p className="text-center"> Electricity by pheelz-ft-davido</p>
                        <audio  className='hiddens' ref={audioRef1} controls>
                            <source   src={AudioB}></source>
                        </audio> 
                        <button onClick={playAudio1}  className="btn btn-primary btn-block ">play</button>
                        <button onClick={() => handleDownload(downloadUrls[1])}>Download</button>

                    </div>
                    <div className="col-md-3">
                        <img width='100%' className="" src={BadInfluence} alt="bad" />
                        <p className="text-center"> Bad Influence by Omah Lay </p>
                        <audio className='hiddens'  ref={audioRef2}  controls>
                            <source  src={AudioC}></source>
                        </audio>
                        <button  onClick={playAudio2}  className="btn btn-primary btn-block ">play</button>
                        <button onClick={() => handleDownload(downloadUrls[2])}>Download</button>


                    </div>
                    <div className="col-md-3">
                        <img width='100%' className="" src={mara} alt="odo" />
                        <p className="text-center"> dj-khalipha-mara-pass-mara-beat-</p>
                        <audio  className='hiddens' ref={audioRef3} controls>
                            <source   src={AudioD}></source>
                        </audio> 
                        <button onClick={playAudio3}  className="btn btn-primary btn-block ">play</button>
                        <button onClick={() => handleDownload(downloadUrls[3])}>Download</button>

                    </div>
                    
                </div>

            </div>




        </>








    );
}

export default Section1;