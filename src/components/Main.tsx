import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import profileAvatar from '../assets/images/foto-aurora.jpg'; // <-- Baris import foto barumu
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section" style={{ paddingLeft: '40px', paddingRight: '20px' }}>
        <div className="image-wrapper" style={{ minWidth: '150px', maxWidth: '150px', height: '150px' }}>
          <img 
            src={profileAvatar} // <-- Menggunakan variabel foto lokal
            alt="Avatar" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
          />
        </div>
        <div className="content">
          <div className="social-icons">
            <a href="https://github.com/Aurora-zalfa" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/aurorrrzz" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:aurorazalhartono@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
          <h1>Aurora Zalfa Hartono</h1>
          <p>Informatics Student | AI, Data & Backend</p>

          <div className="mobile_social-icons">
            <a href="https://github.com/Aurora-zalfa" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/aurorrrzz" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:aurorazalhartono@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;