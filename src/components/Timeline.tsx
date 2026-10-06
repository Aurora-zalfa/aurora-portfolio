import React from "react";
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Education & History</h1>
        <VerticalTimeline>
          {/* Paling atas: Studi Independen */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2026 - Sekarang"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<StarIcon />}
          >
            <h3 className="vertical-timeline-element-title">Studi Independen</h3>
            <h4 className="vertical-timeline-element-subtitle">Nurul Fikri Academy - AI for Business</h4>
            <p>
              Sedang mempelajari pembuatan solusi AI untuk membantu kebutuhan bisnis, seperti
              membangun chatbot yang dapat melayani pelanggan secara otomatis. Dalam prosesnya,
              saya juga menggunakan n8n untuk merancang dan mengotomatiskan alur kerja (workflow
              automation) yang menghubungkan model AI dengan berbagai layanan.
            </p>
          </VerticalTimelineElement>

          {/* Tengah: Kuliah */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - Sekarang"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Teknik Informatika</h3>
            <h4 className="vertical-timeline-element-subtitle">STT Terpadu Nurul Fikri</h4>
            <p>
              Fokus mendalami topik inti Ilmu Komputer, Data Science, Pemrograman Basis Data,
              Fullstack Development, dan Spesialisasi Kecerdasan Buatan (AI).
            </p>
          </VerticalTimelineElement>

          {/* Paling bawah: SMK */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2024"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Teknik Komputer dan Jaringan</h3>
            <h4 className="vertical-timeline-element-subtitle">SMKS Teratai Putih Global 3 Bekasi</h4>
            <p>
              Mempelajari dasar-dasar jaringan komputer dan administrasi sistem. Selama di SMK,
              saya menggunakan VirtualBox untuk membuat dan mengelola mesin virtual, mempelajari
              sistem operasi Linux Ubuntu mulai dari instalasi hingga penggunaan terminal, serta
              belajar Winbox untuk mengonfigurasi dan mengelola router MikroTik.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
