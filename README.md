# Get It Off Your Chest

Welcome to "Get It Off Your Chest," a personal journaling web application where users can Create, Read, Update, and Delete (CRUD) journal entries in a private and secure environment. This application is built with the intention of providing a simple yet intuitive interface for personal reflection and growth.

## Why this Project?

Journaling is a powerful tool for self-discovery and mental health. However, many find it hard to keep a consistent journaling habit. "Get It Off Your Chest" offers a digital solution that's accessible anywhere, anytime, encouraging users to maintain this beneficial practice.

## How It's Built

"Get It Off Your Chest" leverages several modern web technologies to provide a seamless and responsive user experience:

- **ReactJS**: A powerful JavaScript library for building interactive user interfaces.
- **TailwindCSS**: A utility-first CSS framework for rapidly building custom designs.
- **React Router Dom**: A standard library for routing in React, enabling navigation between different components in the application.
- **mockAPI**: A service that allows us to simulate a real API for testing and prototyping, which means faster development cycles.

## Features

- **CRUD Operations**: Users can create, read, update, and delete journal entries.
- **Responsive Design**: TailwindCSS ensures the app is fully responsive and functional on all devices.
- **Navigation**: React Router Dom provides smooth navigation across different sections of the application without page reloads.
- **API Simulation**: mockAPI gives a realistic backend experience for CRUD operations before deploying a live backend service.

## Getting Started

To get a local copy up and running, follow these simple steps:

1. Clone the repo
   ```sh
   git clone https://github.com/davidjamesdimalanta/journalapp.git

2. Install NPM packages
   ```sh
   npm install

3. Start the development server
   ```sh
   npm run dev

# Usage
Once you have the app running locally, you can perform the following actions:

- Create a new journal entry by navigating to the home page and filling out the textbox.
- View all your entries on the 'chat' page.
- Edit an existing entry by clicking the pencil button on any entry.
- Delete an entry by selecting the trashcan button on any entry (please don't do it to other people's entries!).
