import React from "react";
import "./Cocolanka.css";

function Expenses() {
  return (
    <section className="coco-page section">
      <div className="coco-hero">
        <h1 className="coco-title">Expenses Tracking App</h1>
        <p className="coco-subtitle">Android app to track daily expenses and monthly summaries.</p>
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
            <source src={`${process.env.PUBLIC_URL}/Video%20Project%205/video.mp4`} type="video/mp4" />
            {/* Fallbacks if the file is directly in public or has a space before extension */}
            <source src={`${process.env.PUBLIC_URL}/Video%20Project%205.mp4`} type="video/mp4" />
            <source src={`${process.env.PUBLIC_URL}/Video Project 5 .mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="coco-description-card">
          <h2>Project Overview</h2>
          <p>
            Expenses Tracking App helps users record daily expenses and generates monthly summaries for better budgeting.
            Built with Kotlin and SQLite for offline-first functionality and smooth Android experience.
          </p>
          <div className="coco-meta">
            <div className="meta-item"><span>Stack:</span> Kotlin, SQLite, Android</div>
            <div className="meta-item"><span>Features:</span> Add/Edit/Delete expenses, categories, monthly reports</div>
          </div>
          <div className="coco-actions">
            <a className="btn" href="/">Back to Home</a>
            <a className="btn primary" href="https://github.com/ImalshaAnu/FInanceTracker" target="_blank" rel="noreferrer">View Code</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expenses;



