
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function PortfolioPage() {
  // state for skills
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const stored = localStorage.getItem("foliofusion_skills");
    if (stored) setSkills(JSON.parse(stored));
  }, []);

  // state for uploaded image
  const [uploadedImage, setUploadedImage] = useState(null);
  useEffect(() => {
    try {
      const dataUrl = localStorage.getItem("foliofusion_uploaded_image");
      if (dataUrl) setUploadedImage(dataUrl);
    } catch (err) {
      console.warn("Could not read image from localStorage", err);
    }
  }, []);

  // state for projects
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const stored = localStorage.getItem("foliofusion_projects");
    if (stored) setProjects(JSON.parse(stored));
  }, []);

  // read URL parameters
  const params = useSearchParams();
  const name = params.get("name") || "John Doe";
  const bio = params.get("bio") || "A passionate developer.";
  const github = params.get("github") || "#";
  const linkedin = params.get("linkedin") || "#";

  // show content only if value exists
  function showIf(value, children) {
    if (!value || value.trim() === "") return null;
    return children;
  }

  return (
    <div className="container">
      {/* header / navbar */}
      <nav className="header">
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <a href="/">
            <img src="/logo.png" alt="logo" className="logo-img" />
          </a>
          <div style={{ fontWeight: 700 }}>{name}'s Portfolio</div>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        {/* HOME */}
        <section id="home" className="row">
          <div className="col card">
            <h1>
              Hello World! <br />
              <span style={{ color: "#d00" }}>I’m {name}</span>
            </h1>
            <p style={{ marginTop: 8 }}>{bio}</p>
            
          </div>

          <div className="col card" style={{ textAlign: "center" }}>
            <div style={{ maxWidth: "400px", margin: "0 auto" }}>
              <img
                src={uploadedImage || "/hero.png"}
                alt="Hero"
                className="section-image"
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  height: "200px",
                  margin: "0 auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <div className="card">
            <h2>My Skills</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1rem" }}>
              {skills.length > 0 ? (
                skills.map((skill, index) => (
                  <div
                    key={index}
                    style={{
                      flex: "1 1 250px",
                      backgroundColor: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      color: "white",
                    }}
                  >
                    <p><strong>Frontend:</strong> {skill.frontend}</p>
                    <p><strong>Backend:</strong> {skill.backend}</p>
                    <p><strong>Version Control:</strong> {skill.versionControl}</p>
                    <p><strong>Other:</strong> {skill.other}</p>
                  </div>
                ))
              ) : (
                <p>No skills added yet.</p>
              )}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <div className="card">
            <h2>My Projects</h2>
            <div style={{ display: "flex", gap: "1rem", overflowX: "auto", padding: "1rem 0" }}>
              {projects.length > 0 ? (
                projects.map((proj, index) => (
                  <div
                    key={index}
                    style={{
                      minWidth: "250px",
                      backgroundColor: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      color: "white",
                      flexShrink: 0,
                    }}
                  >
                    <h3>{proj.name}</h3>
                    <p>{proj.description}</p>
                    <p style={{ fontStyle: "italic", fontSize: "0.9rem" }}>
                      Tech: {proj.tech}
                    </p>
                  </div>
                ))
              ) : (
                <p>No projects added yet.</p>
              )}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="row">
          <div className="col card">
            <h2>A bit about me...</h2>
            <p style={{ marginTop: 8 }}>{bio}</p>
          </div>
          <div className="col card">
            <img
              src="/about.png"
              className="section-image"
              alt="about"
              style={{
                width: "100%",
                maxWidth: "200px",
                height: "200px",
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
              }}
            />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="row">
          <div className="col card">
            <h2>Would love to chat!</h2>
            <div style={{ marginTop: 8 }}>
              {showIf(params.get("github"), (
                <a className="btn" href={github} target="_blank" rel="noreferrer">GitHub</a>
              ))}
              {showIf(params.get("linkedin"), (
                <a className="btn secondary" href={linkedin} target="_blank" rel="noreferrer" style={{ marginLeft: 8 }}>LinkedIn</a>
              ))}
              {(!params.get("github") && !params.get("linkedin")) && (
                <p className="small" style={{ marginTop: 8 }}>No social links provided.</p>
              )}
            </div>
          </div>

          <div className="col card">
            <img
              src="/end.png"
              className="section-image"
              alt="end"
              style={{
                width: "100%",
                maxWidth: "200px",
                height: "200px",
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
              }}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
