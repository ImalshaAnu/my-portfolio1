import React from "react";
import "./Cocolanka.css";

function Expenses() {
  return (
    <section className="coco-page section">
      <div className="coco-hero">
        <h1 className="coco-title">Surplus Food Reduction and Redistribution System</h1>
        <p className="coco-subtitle">Built a platform to connect donors and receivers of surplus food, promoting zero waste.</p>
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
            <source src={`${process.env.PUBLIC_URL}/Video%20Project%206/video.mp4`} type="video/mp4" />
            {/* Fallbacks if the file is directly in public or has a space before extension */}
            <source src={`${process.env.PUBLIC_URL}/Video%20Project%206.mp4`} type="video/mp4" />
            <source src={`${process.env.PUBLIC_URL}/Video Project 6 .mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="coco-description-card">
          <h2>Project Overview</h2>
          <p>
            Description: Built a platform to connect donors and receivers of
            surplus food, promoting zero waste.
          </p>
          <div className="coco-meta">
            <div className="meta-item"><span>Stack:</span> MERN Stack (MongoDB, Express.js, React.js, Node.js)</div>
            <div className="meta-item"><span>Features:</span> Add/Edit/Delete, categories, monthly reports</div>
          </div>
          <div className="coco-actions">
            <a className="btn" href="/">Back to Home</a>
            <a className="btn primary" href="https://github.com/ImalshaAnu/ITP-Project" target="_blank" rel="noreferrer">View Code</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expenses;



