import React, { useRef, useState } from 'react';
import './Section2.css';
import believe from './../assets/musics/artist-image/believe.jpg';
import peace from './../assets/musics/artist-image/peace.jpg';
import ajitu from './../assets/musics/artist-image/ajitu.jpg';
import psquare from './../assets/musics/artist-image/psquare.jpg';
import AudioA from '../assets/musics/artist-audio/sq.mp3';
import AudioB from '../assets/musics/artist-audio/Aji.mp3';
import AudioC from '../assets/musics/artist-audio/pe.mp3';
import AudioD from '../assets/musics/artist-audio/be.mp3';

const Section2 = () => {
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

  const audioRef3 = useRef(null);
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
        <h1>OLD SCHOOL</h1>
        <div className="row">
          <div className="col-md-3">
            <img width="100%" className="" src={psquare} alt="sq" />
            <p className="text-center">Ifunanya by psquare</p>
            <audio className="hiddens" ref={audioRef} controls>
              <source src={AudioA} />
            </audio>
            <button type="button" onClick={playAudio} className="btn btn-primary btn-block">
              Play
            </button>
            <button onClick={() => handleDownload(downloadUrls[0])}>Download</button>
          </div>
          <div className="col-md-3">
            <img width="100%" height={254} className="" src={ajitu} alt="Aji" />
            <p className="text-center"> Ajitu by lil tush</p>
            <audio className="hiddens" ref={audioRef1} controls>
              <source src={AudioB} />
            </audio>
            <button onClick={playAudio1} className="btn btn-primary btn-block ">
              Play
            </button>
            <button onClick={() => handleDownload(downloadUrls[1])}>Download</button>
          </div>
          <div className="col-md-3">
            <img width="100%" className="" src={peace} alt="pe" />
            <p className="text-center"> Peace Sped Up by Brown Joel </p>
            <audio className="hiddens" ref={audioRef2} controls>
              <source src={AudioC} />
            </audio>
            <button onClick={playAudio2} className="btn btn-primary btn-block ">
              Play
            </button>
            <button onClick={() => handleDownload(downloadUrls[2])}>Download</button>
          </div>
          <div className="col-md-3">
            <img width="100%" className="" src={believe} alt="be" />
            <p className="text-center"> believe me by johnny drille</p>
            <audio className="hiddens" ref={audioRef3} controls>
              <source src={AudioD} />
            </audio>
            <button onClick={playAudio3} className="btn btn-primary btn-block ">
              Play
            </button>
            <button onClick={() => handleDownload(downloadUrls[3])}>Download</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
