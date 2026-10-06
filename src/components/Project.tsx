import React from 'react';
import '../assets/styles/Project.scss';

function Project() {
  return(
    <div className="container" id="projects">
      <div className="projects-container">
        <h1>Projects</h1>
        <div className="projects-grid">
          <div className="project">
            <a href="https://ikkuasdataming.streamlit.app/" target="_blank" rel="noreferrer">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600" className="zoom" alt="Data Mining" width="100%"/>
            </a>
            <a href="https://ikkuasdataming.streamlit.app/" target="_blank" rel="noreferrer"><h2>UAS Data Mining - Prediksi Estimasi Biaya & IKK</h2></a>
            <p>Mengembangkan model Linear Regression untuk memprediksi estimasi biaya konstruksi berdasarkan data historis Indeks Kemahalan Konstruksi (IKK) selama 10 tahun terakhir yang dideploy menggunakan Streamlit.</p>
          </div>

          <div className="project">
            <a href="https://github.com/Aurora-zalfa/Project_RAG_ChatbotHukum.git" target="_blank" rel="noreferrer">
              <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600" className="zoom" alt="Yuris AI" width="100%"/>
            </a>
            <a href="https://github.com/Aurora-zalfa/Project_RAG_ChatbotHukum.git" target="_blank" rel="noreferrer"><h2>Yuris AI - Chatbot Hukum Indonesia</h2></a>
            <p>Membangun agen cerdas berbasis Retrieval-Augmented Generation (RAG) menggunakan LangChain untuk membantu memberikan jawaban yuridis seputar aturan hukum dan UU di Indonesia.</p>
          </div>

          <div className="project">
            <a href="https://github.com/Aurora-zalfa/Chatbot-IMDB" target="_blank" rel="noreferrer">
              <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=600" className="zoom" alt="Sentiment Analysis" width="100%"/>
            </a>
            <a href="https://github.com/Aurora-zalfa/Chatbot-IMDB" target="_blank" rel="noreferrer"><h2>IMDB Movie Sentiment Analysis</h2></a>
            <p>Sistem klasifikasi teks menggunakan algoritma Machine Learning dan teknik pemrosesan NLP untuk memetakan sentimen bernada positif maupun negatif pada ulasan film IMDB.</p>
          </div>

          <div className="project">
            <a href="https://github.com/Aurora-zalfa/stable-diffusion-demo" target="_blank" rel="noreferrer">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600" className="zoom" alt="Stable Diffusion" width="100%"/>
            </a>
            <a href="https://github.com/Aurora-zalfa/stable-diffusion-demo" target="_blank" rel="noreferrer"><h2>Stable Diffusion Image Generator Demo</h2></a>
            <p>Eksperimentasi dan implementasi teknologi Generative AI menggunakan pustaka Diffusers dan PyTorch untuk menghasilkan visualisasi gambar otomatis lewat instruksi teks.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;