# SkillSwap

A platform to connect talent — bridging the gap between designers, developers, and creatives to showcase skills and explore opportunities.
---
Table of Contents

About the Project

Project Overview

Key Features

Tech Stack

Dependencies

Installation & Setup

Folder Structure

Contributions

Contact

About the Project

SkillSwap is a dynamic platform designed to help users connect through their unique talents. The goal is to create a community where professionals—whether they are designers, developers, or musicians—can create profiles, list their specific skills, and explore what others have to offer. It simplifies the process of finding the right talent for collaboration.

Project Overview

SkillSwap provides a seamless interface for users to manage their professional identity and discover others.
It includes:

Secure and diverse login options

Protected routes for user privacy

Comprehensive profile management

Real-time data updates for user profiles

Live URL: https://meek-longma-711520.netlify.app/

Key Features

Secure Authentication Robust login system supporting both Email/Password and Google Sign-In using Firebase Authentication.

Private Routes Secure navigation ensuring that sensitive content and profile management are accessible only to authenticated users.

Profile Management Users can create detailed profiles showcasing their skills, profession, and personal information.

Profile Updates Intuitive interface allowing users to easily update their personal details and skill sets.

Interactive UI Engaging user interface featuring smooth transitions and animations using Framer Motion and React Spring.

Tech Stack

Frontend: React (Vite) · React Router

Styling: Tailwind CSS · DaisyUI

Backend / Auth: Firebase

Animations: Framer Motion · AOS · React Spring · Swiper

Notifications: React Hot Toast

Dependencies

{
  "@react-spring/parallax": "^10.0.3",
  "@react-spring/web": "^10.0.3",
  "@tailwindcss/vite": "^4.1.15",
  "aos": "^2.3.4",
  "firebase": "^12.4.0",
  "framer-motion": "^12.23.24",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-hot-toast": "^2.6.0",
  "react-icons": "^5.5.0",
  "react-router": "^7.9.4",
  "swiper": "^12.0.3",
  "tailwindcss": "^4.1.15"
}


Installation & Setup

Clone the repository

git clone [https://github.com/your-username/SkillSwap.git](https://github.com/your-username/SkillSwap.git)
cd SkillSwap
npm install


Set up environment variables Create a .env file in the root directory and add your Firebase configuration:

VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id


Run the application

npm run dev


Folder Structure

SkillSwap/
│
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Application pages (Home, Login, Profile)
│   ├── layouts/         # Main layouts (Navbar, Footer wrapper)
│   ├── hooks/           # Custom React hooks
│   ├── routes/          # Router configuration and Private Routes
│   ├── context/         # AuthProvider and global state
│   └── utils/           # Helper functions
├── public/              # Static assets
└── package.json


Contributions

Name

Role

Contributions

Tanvir Hussain Khan

Fullstack Developer

Entire project design & development

📞 Contact
