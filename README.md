
# The New York Times - React News Application

This is a dynamic, real-time news application inspired by **The New York Times**, built with modern web technologies. The app allows users to view and read the latest news, breaking stories, and access individual news details fetched from an API. Users need to **log in securely** to view specific news details. The app supports **Email/Password**, **Google**, and **GitHub** login methods via **Firebase Authentication**. The news section displays the most current headlines, updated dynamically with **Moment.js**.

## Live Demo
You can check out the live application here:  
[The New York Times - Live Demo](https://the-new-york-times-d3d7f.web.app/category/01)

## Features

- **Real-time News Feed:** View the latest headlines fetched via an external API.
- **Breaking News:** A marquee feature for showing breaking news headlines dynamically.
- **User Authentication:** Secure login with **Email/Password**, **Google**, or **GitHub** using Firebase Authentication.
- **Login Required for News Details:** Only logged-in users can access detailed news articles to ensure privacy and secure content viewing.
- **Dynamic Date & Time:** Moment.js is used to display real-time dates and times for news articles.
- **Responsive Design:** Fully responsive UI using **TailwindCSS** to ensure compatibility across devices.
- **Individual News Details:** Click on any news headline to view detailed information about the news article, but login is required for full access.
- **React Router:** Handles seamless navigation between different pages within the app.
- **React Icons:** Enhances UI with visually appealing and customizable icons.

## Technologies Used

- **React** - The core library for building the UI.
- **TailwindCSS** - Utility-first CSS framework for styling the app with a modern design.
- **HTML5** - The structure and layout of the web pages.
- **API** - News data is fetched dynamically via an external API.
- **Context API** - Used for global state management, especially for user authentication.
- **Firebase** - Used for user authentication, supporting **Email/Password**, **Google**, and **GitHub** login methods.
- **Moment.js** - Library used for displaying dynamic real-time dates and times for news articles.
- **React Router** - For routing between pages (Home, Category, News Details, etc.).
- **React Icons** - Provides customizable icons throughout the app.

## Installation

### Clone the repository:

```bash
git clone https://github.com/your-username/the-new-york-times.git
cd the-new-york-times
```

### Install dependencies:

```bash
npm install
```

### Start the development server:

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Firebase Setup

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project or use an existing one.
3. Enable Firebase Authentication with **Email/Password**, **Google**, and **GitHub** sign-in methods.
4. Set up the **Firebase configuration** in the project’s `firebase.config.js` file.
5. Deploy the app using Firebase Hosting once everything is set up.

## Secure Login Process

- **Login Required for News Details:** To ensure the privacy and security of news content, users must log in to access detailed articles. This ensures that only authenticated users can interact with the full content of the news. Firebase Authentication provides a highly secure way of logging in via **Email/Password**, **Google**, or **GitHub**.
  
- **Authentication Security:** Firebase Authentication uses secure token-based authentication, ensuring user credentials and data are encrypted during login. Additionally, the **OAuth** sign-in methods (Google and GitHub) leverage industry-standard security practices, ensuring a smooth and secure user experience.

## How It Works

- **Authentication:** Users can sign up and log in using their email and password, or they can use **Google** or **GitHub** to authenticate themselves via Firebase.
- **News Feed:** The app fetches news articles from an external API and displays them in a card-style layout.
- **Marquee & Breaking News:** The marquee displays breaking news headlines that change dynamically.
- **Individual News Page:** Users must log in to view detailed news articles. Clicking on a news headline redirects users to the detailed page, but login is required to see the full content.

