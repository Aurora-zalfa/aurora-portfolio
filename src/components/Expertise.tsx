import React from 'react';
import PsychologyIcon from '@mui/icons-material/Psychology';
import StorageIcon from '@mui/icons-material/Storage';
import DnsIcon from '@mui/icons-material/Dns';
import '../assets/styles/Expertise.scss';

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <PsychologyIcon sx={{ fontSize: 50, color: '#5000ca' }} />
            <h3>Artificial Intelligence & Data</h3>
            <p>Berpengalaman dalam mengonstruksi sistem cerdas, pemrosesan bahasa alami (NLP), arsitektur RAG, serta penambangan data prediktif (Data Mining) menggunakan pendekatan statistik.</p>
            <div className="flex-chips">
              <span className="chip">Python</span>
              <span className="chip">LangChain</span>
              <span className="chip">Scikit-Learn</span>
              <span className="chip">Pandas</span>
            </div>
          </div>

          <div className="skill">
            <DnsIcon sx={{ fontSize: 50, color: '#5000ca' }} />
            <h3>Robust Backend Development</h3>
            <p>Keahlian mendalam dalam membangun arsitektur server yang scalable, pengelolaan logika bisnis, serta pembuatan RESTful API menggunakan berbagai framework populer berbasis PHP, Python, dan JavaScript.</p>
            <div className="flex-chips">
              <span className="chip">Laravel</span>
              <span className="chip">Django</span>
              <span className="chip">Node.js / Express</span>
              <span className="chip">JavaScript / ES6</span>
            </div>
          </div>

          <div className="skill">
            <StorageIcon sx={{ fontSize: 50, color: '#5000ca' }} />
            <h3>Database & Cloud Integration</h3>
            <p>Mampu merancang skema database relasional maupun non-relasional, integrasi arsitektur cloud/BaaS, serta optimasi penyimpanan data berbasis vektor (Vector DB) untuk kebutuhan AI.</p>
            <div className="flex-chips">
              <span className="chip">PostgreSQL</span>
              <span className="chip">MySQL</span>
              <span className="chip">Supabase</span>
              <span className="chip">Vector Database</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;