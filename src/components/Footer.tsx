import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://github.com/Aurora-zalfa" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://linkedin.com/in/aurorrrzz" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:aurorazalhartono@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/Aurora-zalfa" target="_blank" rel="noreferrer">Aurora Zalfa Hartono</a> with 💜</p>
    </footer>
  );
}

export default Footer;