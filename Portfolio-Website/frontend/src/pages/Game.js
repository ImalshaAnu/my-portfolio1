import React from "react";
import "./Cocolanka.css";

function Expenses() {
  return (
    <section className="coco-page section">
      <div className="coco-hero">
        <h1 className="coco-title">Gaming Site</h1>
        <p className="coco-subtitle">Developed a website to manage and display games, with admin and user functionalities.</p>
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
            {/* Preferred: folder "frontend/public/Video Project 5/video.mp4" */}
            <source src={`${process.env.PUBLIC_URL}/`} type="video/mp4" />
            {/* Fallbacks if the file is directly in public or has a space before extension */}
            <source src={`${process.env.PUBLIC_URL}/`} type="video/mp4" />
            <source src={`${process.env.PUBLIC_URL}/`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="coco-description-card">
          <h2>Project Overview</h2>
          <p>
          Developed a website to manage and display games, with admin and user functionalities.
          </p>
          <div className="coco-meta">
            <div className="meta-item"><span>Stack:</span> Java,MySQL</div>
            <div className="meta-item"><span>Features:</span> Add/Edit/Delete, categories,</div>
          </div>
          <div className="coco-actions">
            <a className="btn" href="/">Back to Home</a>
            <a className="btn primary" href="https://github.com/ImalshaAnu/Gaming-Website" target="_blank" rel="noreferrer">View Code</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expenses;