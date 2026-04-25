# AetherLearn

AetherLearn is an inclusive, visually-driven flashcard learning platform designed to make education accessible and engaging for everyone — especially students with hearing impairments, learning disabilities, or language processing challenges. It transforms complex information into easily digestible, visually rich flashcard content.

---

## Features

- **Landing Page** — Welcomes users and introduces the platform's mission for visual learners.
- **User Authentication** — Simple client-side authentication with Login, Register, and Forgot Password flows.
- **Dashboard** — Central hub to navigate between learning and creating flashcards.
- **Create Flashcard Sets** — Build custom flashcard sets with terms, definitions, and optional image URLs for visual cues.
- **My Flashcards** — View and search all created flashcard sets.
- **Review Mode** — Interactive flip-card experience to study terms, view definitions, and see associated images.
- **Profile Page** — Displays logged-in user info and allows logout.
- **About Page** — Details the mission, vision, and inclusive design principles behind AetherLearn.

---

## Tech Stack

- **React 19** — UI library
- **Vite** — Fast build tooling and development server
- **React Router DOM v7** — Client-side routing
- **CSS3** — Custom styles for each page and component
- **LocalStorage** — Client-side data persistence for users and flashcard sets

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or any compatible package manager

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd aetherlearn
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist/` folder.

---

## Usage Guide

1. **Register** a new account or **Login** with existing credentials.
2. From the **Dashboard**, choose to **Start Learning** or **Add Flashcard**.
3. In **Create Flashcard Set**, enter a title and add as many flashcards as needed. Each card supports:
   - **Term** — The concept or word to learn.
   - **Definition** — The explanation or meaning.
   - **Image URL** *(optional)* — A visual cue to enhance memory and comprehension.
4. Visit **My Flashcards** to see all your sets and use the search bar to find specific topics.
5. Click any set to enter **Review Mode**, where you can:
   - Click the card to **flip** it and reveal the definition/image.
   - Use **Previous** and **Next** buttons to navigate through cards.
6. Access your **Profile** to view your username or **Logout** securely.

---

## Project Structure

```
aetherlearn/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Images and icons
│   ├── components/          # Reusable components (ReviewSet)
│   ├── context/             # AuthContext for authentication state
│   ├── pages/               # Page components (Home, Login, Dashboard, etc.)
│   ├── styles/              # CSS files for each page/component
│   ├── App.jsx              # Main app with routing
│   ├── main.jsx             # Entry point
│   ├── index.css            # Global styles
│   └── App.css              # App-level styles
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
└── vercel.json              # Vercel deployment config
```

---

## Future Improvements

- Backend integration with real database and secure authentication
- Image upload support instead of URL-only input
- Spaced repetition algorithm for optimized learning
- Progress tracking and statistics
- Mobile app version
- Multi-language support

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

*Built with care for diverse learners. Together, we can make learning truly inclusive.*

