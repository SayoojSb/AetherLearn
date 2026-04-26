# AetherLearn

**AetherLearn** is a visual flashcard learning platform built for students who learn better through images and simplified content — including learners with hearing impairments, learning disabilities, or language processing challenges.

No audio. No clutter. Just clear, visual study material you build yourself.

---

## What is AetherLearn?

AetherLearn lets you create flashcard sets where each card holds a **term**, a **definition**, and an optional **image URL** for visual context. You study by flipping cards, navigating at your own pace, and reinforcing concepts through visual association.

It runs entirely in the browser — no backend, no account fees, no setup beyond `npm install`.

---

## Who is it for?

| Learner type | How AetherLearn helps |
|---|---|
| **Students** | Break down subjects into bite-sized cards for exam prep or daily review |
| **Hearing-impaired learners** | Fully visual — no audio dependency anywhere in the app |
| **Diverse learners** | Image-paired cards offer an alternative to text-heavy study methods |
| **Educators** | Build sets for students to study independently at their own pace |

---

## Features

- **Flip-card study mode** — 3D card flip animation, progress bar, Previous / Next navigation
- **Visual cues** — Attach any image URL to a card to pair a picture with the concept
- **Unlimited sets** — Create as many sets as you need, each with as many cards as you want
- **Instant search** — Filter your sets by title in real time on the My Flashcards page
- **User accounts** — Register, log in, and keep your sets saved between sessions
- **Inclusive design** — Minimal text, clear layout, image support throughout

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm

### Install and run

```bash
# 1. Clone the repo
git clone <repository-url>
cd aetherlearn

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Build for production

```bash
npm run build
```

Output goes to `dist/`.

---

## How to use AetherLearn

### 1. Create an account
Go to the landing page (`/`) and click **Get started free**. Register with a username and password.

### 2. Create a flashcard set
From the Dashboard or the **+ New Set** button in the nav, go to **Create a new set**:
- Enter a **title** for the set (e.g. *Biology — Chapter 3: Cells*)
- Add cards one by one. Each card has:
  - **Term** — the word or concept
  - **Definition** — the explanation
  - **Image URL** *(optional)* — paste any image link to add a visual cue
- Click **+ Add Card** to add more cards
- Click **Save Set** when done

### 3. Study your sets
Go to **My Flashcards** to see all your sets. Use the search bar to filter by title.

Click any set to enter **Review Mode**:
- The card shows the **term** on the front
- Click the card to **flip** it and reveal the definition (and image if you added one)
- Use **← Previous** and **Next →** to move between cards
- The progress bar at the top shows how far through the set you are
- Click **Done** to return to My Flashcards

### 4. Manage your profile
Click **Profile** in the nav to see your account info. Click **Sign Out** to log out.

---

## Project structure

```
aetherlearn/
├── public/
│   └── _redirects           # Vercel/Netlify SPA redirect rule
├── src/
│   ├── assets/              # Static images and icons
│   ├── components/
│   │   ├── Layout.jsx       # Shared layout wrapper (renders Navbar)
│   │   ├── Navbar.jsx       # Shared navigation header for authenticated pages
│   │   └── ReviewSet.jsx    # Flip-card study component
│   ├── context/
│   │   └── AuthContext.jsx  # Global auth state (login, logout, register)
│   ├── pages/
│   │   ├── Home.jsx         # Landing page (public)
│   │   ├── Login.jsx        # Sign-in page
│   │   ├── Register.jsx     # Registration page
│   │   ├── ForgotPassword.jsx
│   │   ├── Dashboard.jsx    # Post-login home
│   │   ├── MyFlashcards.jsx # Set list with search
│   │   ├── CreateFlashcardSet.jsx
│   │   ├── Profile.jsx
│   │   └── About.jsx
│   ├── styles/              # Per-page and component CSS
│   ├── App.jsx              # Routes and auth guards
│   ├── main.jsx             # React entry point
│   └── index.css            # Global CSS variables and base styles
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

---

## Tech stack

| Tool | Purpose |
|---|---|
| React 19 | UI |
| Vite | Build tool and dev server |
| React Router DOM v7 | Client-side routing |
| CSS3 (custom properties) | Styling |
| localStorage | Data persistence |

---

## Deployment

The project includes a `vercel.json` and a `public/_redirects` file for SPA routing on Vercel and Netlify respectively. Run `npm run build` and deploy the `dist/` folder to either platform.

---

## Possible future improvements

- Real backend with secure authentication and a database
- Image upload (instead of URL-only)
- Spaced repetition algorithm
- Study progress tracking and statistics
- Shareable sets
- Mobile app

---

*Built with care for diverse learners. Together, we can make learning truly inclusive.*
