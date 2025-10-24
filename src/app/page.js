
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  // project state
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [projectTech, setProjectTech] = useState("");

  // skill state
  const [skills, setSkills] = useState([]);
  const [frontend, setFrontend] = useState("");
  const [backend, setBackend] = useState("");
  const [versionControl, setVersionControl] = useState("");
  const [other, setOther] = useState("");

  // image state
  const [uploadedImage, setUploadedImage] = useState("");

  // add project
  function addProject() {
    if (!projectName) return;
    const newProject = { name: projectName, description: projectDesc, tech: projectTech };
    setProjects([...projects, newProject]);
    setProjectName("");
    setProjectDesc("");
    setProjectTech("");
    localStorage.setItem("foliofusion_projects", JSON.stringify([...projects, newProject]));
  }

  // add skill
  function addSkill() {
    if (!frontend && !backend && !versionControl && !other) return;
    const newSkill = { frontend, backend, versionControl, other };
    setSkills([...skills, newSkill]);
    setFrontend("");
    setBackend("");
    setVersionControl("");
    setOther("");
    localStorage.setItem("foliofusion_skills", JSON.stringify([...skills, newSkill]));
  }

  // upload image
  function handleFileChange(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      setUploadedImage(dataUrl);
      localStorage.setItem("foliofusion_uploaded_image", dataUrl);
    };
    reader.readAsDataURL(file);
  }

  // load saved image
  useEffect(() => {
    const dataUrl = localStorage.getItem("foliofusion_uploaded_image");
    if (dataUrl) setUploadedImage(dataUrl);
  }, []);

  // form fields
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const router = useRouter();

  // username helper
  function makeUsername(nameStr) {
    if (!nameStr) return "user";
    return nameStr.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
  }

  // submit → portfolio
  function handleSubmit(e) {
    e.preventDefault();
    const username = makeUsername(name || "user");
    const params = new URLSearchParams({
      name: name || "Anonymous",
      bio: bio || "A developer who loves building things.",
      github: github || "",
      linkedin: linkedin || "",
      username,
    }).toString();
    router.push(`/portfolio?${params}`);
  }

  // reset
  function resetForm() {
    if (!window.confirm("Are you sure you want to reset everything?")) return;
    localStorage.clear();
    setName("");
    setBio("");
    setGithub("");
    setLinkedin("");
    setUploadedImage("");
    setProjects([]);
    setSkills([]);
  }

  return (
    <div className="container">
      {/* header */}
      <div className="header">
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <img src="/logo.png" alt="logo" className="logo-img" />
          <div>
            <div style={{ fontWeight: 700 }}>FolioFusion</div>
            <div className="small">Simple portfolio generator</div>
          </div>
        </div>
      </div>

      {/* form card */}
      <div className="card">
        <h2>Create your portfolio</h2>
        <form onSubmit={handleSubmit}>
          <label>Full name</label>
          <input type="text" value={name} placeholder="yourName" onChange={(e) => setName(e.target.value)} />

          <label>Short bio</label>
          <textarea value={bio} placeholder="Who are you & What do you do ?" onChange={(e) => setBio(e.target.value)} />

          {/* add project */}
          <div style={{ marginTop: "1rem" }}>
            <h3>Add a Project</h3>
            <input type="text" placeholder="Project Name" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
            <textarea placeholder="Project Description" value={projectDesc} onChange={(e) => setProjectDesc(e.target.value)} rows={2} />
            <input type="text" placeholder="Tech Stack (comma separated)" value={projectTech} onChange={(e) => setProjectTech(e.target.value)} />
            <button type="button" onClick={addProject} className="btn">Add Project</button>
          </div>

          {/* project preview */}
          <div style={{ display: "flex", gap: "1rem", overflowX: "auto", marginTop: "1rem" }}>
            {projects.map((proj, i) => (
              <div key={i} style={{ minWidth: "250px", backgroundColor: "#111", padding: "1rem", borderRadius: "8px", color: "white" }}>
                <h4>{proj.name}</h4>
                <p>{proj.description}</p>
                <p style={{ fontStyle: "italic", fontSize: "0.9rem" }}>Tech: {proj.tech}</p>
              </div>
            ))}
          </div>

          {/* add skills */}
          <div style={{ marginTop: "2rem" }}>
            <h3>Add Skills</h3>
            <input type="text" placeholder="Frontend Skills" value={frontend} onChange={(e) => setFrontend(e.target.value)} />
            <input type="text" placeholder="Backend Skills" value={backend} onChange={(e) => setBackend(e.target.value)} />
            <input type="text" placeholder="Version Control" value={versionControl} onChange={(e) => setVersionControl(e.target.value)} />
            <input type="text" placeholder="Other Techstack" value={other} onChange={(e) => setOther(e.target.value)} />
            <button type="button" onClick={addSkill} className="btn">Add Skill</button>
          </div>

          {/* skill preview */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1rem" }}>
            {skills.map((s, i) => (
              <div key={i} style={{ flex: "1 1 250px", backgroundColor: "#111", padding: "1rem", borderRadius: "8px", color: "white" }}>
                <p><strong>Frontend:</strong> {s.frontend}</p>
                <p><strong>Backend:</strong> {s.backend}</p>
                <p><strong>Version Control:</strong> {s.versionControl}</p>
                <p><strong>Other:</strong> {s.other}</p>
              </div>
            ))}
          </div>

          {/* socials */}
          <label>GitHub URL (optional)</label>
          <input type="text" value={github} placeholder="https://github.com/yourname" onChange={(e) => setGithub(e.target.value)} />
          <label>LinkedIn URL (optional)</label>
          <input type="text" value={linkedin} placeholder="https://linkedin.com/in/yourname" onChange={(e) => setLinkedin(e.target.value)} />

          {/* image upload */}
          <div style={{ marginTop: "1rem" }}>
            <label>Upload profile image (optional)</label>
            <br />
            <br />
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {uploadedImage && (
              <div style={{ marginTop: "0.5rem" }}>
                <small>Preview:</small><br />
                <img src={uploadedImage} alt="Uploaded" style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "10px", marginTop: "0.5rem" }} />
              </div>
            )}
          </div>

          {/* buttons */}
          <br />
          <button className="btn" type="submit">Generate Portfolio</button>
          <button className="btn secondary" type="button" onClick={resetForm}>Reset</button>
          <p className="small" style={{ marginTop: 8 }}>After clicking Generate you’ll see your portfolio preview.</p>
        </form>
      </div>
    </div>
  );
}
