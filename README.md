# FolioFusion - Portfolio Generator

![Project Logo](./public/logo.png)

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Screenshots](#screenshots)
7. [Live Demo](#live-demo)
8. [Demo Video](#demo-video)

---

## Project Overview

FolioFusion is a simple and interactive **portfolio generator** built with Next.js. It allows developers and designers to quickly create a personalized portfolio by adding projects, skills, social links, and a profile image. The generated portfolio can then be previewed instantly.

---

## Features

* Add multiple **projects** with name, description, and tech stack.
* Add **skills** categorized into Frontend, Backend, Version Control, and Other.
* Upload a **profile image** with preview.
* Input basic information: **Name, Bio, GitHub, LinkedIn**.
* Preview **projects and skills** dynamically.
* Reset form to start over.
* Auto-save projects, skills, and image in **localStorage** for persistence.
* Generate a portfolio link instantly.

---

## Technologies Used

* **Frontend Framework:** Next.js 13 (App Router)
* **React Hooks:** useState, useEffect
* **Routing & Navigation:** Next.js `useRouter`, `useSearchParams`
* **Styling:** CSS modules / inline styling
* **Storage:** LocalStorage for temporary data persistence
* **Deployment:** Vercel

---

## Installation

Clone this repository and install dependencies:

```bash
git clone https://github.com/<your-username>/foliofusion.git
cd foliofusion
npm install
```

---

## Usage

Run the development server:

```bash
npm run dev
```

* Open [http://localhost:3000](http://localhost:3000) in your browser.
* Fill in your **Name, Bio, GitHub, LinkedIn**.
* Add **Projects** and **Skills**.
* Upload a **Profile Image** (optional).
* Click **Generate Portfolio** to see the preview.

Reset form anytime using the **Reset** button.

---

## Screenshots

### Home / Generator Page

![Screenshot 1](./screenshots/home.png)

### Projects Preview

![Screenshot 2](./screenshots/projects.png)

### Skills Preview

![Screenshot 3](./screenshots/skills.png)

### Portfolio Preview Page

![Screenshot 4](./screenshots/portfolio.png)

---

## Live Demo

Check out the live deployed website here:

[Live Demo](https://foliofusion.vercel.app)

---

## Demo Video

Watch a demo of FolioFusion in action:

[Demo Video](./demo/foliofusion-demo.mp4)

---

*This project was developed as a simple, user-friendly tool for quickly generating a personalized portfolio. Perfect for developers, designers, and students looking to showcase their work professionally.*
