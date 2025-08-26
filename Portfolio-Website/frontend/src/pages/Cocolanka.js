import React from "react";
import "./Cocolanka.css";

function Cocolanka() {
  return (
    <section className="coco-page section">
      <div className="coco-hero">
        <h1 className="coco-title">Coconut Products E-commerce Website</h1>
        <p className="coco-subtitle">Full‑stack web application built with Spring Boot, React, and SQL Server.</p>
      </div>

      <div className="coco-content">
        <div className="coco-video-card">
          <video
            className="coco-video"
            controls
            autoPlay
            muted
            loop
            playsInline
            poster="/logo512.png"
          >
            {/* Preferred: folder "frontend/public/Video Project 4/video.mp4" */}
            <source src={`${process.env.PUBLIC_URL}/Video%20Project%204/video.mp4`} type="video/mp4" />
            {/* Fallbacks in case the file is directly in public or has a space before extension */}
            <source src={`${process.env.PUBLIC_URL}/Video%20Project%204.mp4`} type="video/mp4" />
            <source src={`${process.env.PUBLIC_URL}/Video Project 4 .mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="coco-description-card">
          <h2>Project Overview</h2>
          <p>
            Coconut Products E-commerce Website is a feature‑rich platform for managing coconut product operations. It includes role‑based
            authentication, product management, order workflows, and analytics dashboards. The backend is powered by
            Spring Boot REST APIs with robust validation and layered architecture, while the frontend is a responsive
            React app.
          </p>
          <div className="coco-meta">
            <div className="meta-item"><span>Stack:</span> Spring Boot, React, SQL Server</div>
            <div className="meta-item"><span>Features:</span> Auth, CRUD, Dashboards, Reports</div>
          </div>
          <div className="coco-actions">
            <a className="btn" href="/">Back to Home</a>
            <a className="btn primary" href="https://github.com/ImalshaAnu/coconut-product-pro" target="_blank" rel="noreferrer">View Code</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cocolanka;


