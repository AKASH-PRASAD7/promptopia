# Promptopia

Promptopia is a web application that allows users to create and share AI prompts with others. It provides CRUD (Create, Read, Update, Delete) functionality for managing prompts, and users can sign in using their Google account for a seamless experience. The project is built using Next.js, Tailwind CSS, MongoDB for database storage, NextAuth for authentication, and Google Sign-In for user management.

## Screenshot

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Create Prompts**: Users can create AI prompts with ease, providing a title, description, and any additional details.

- **Read Prompts**: Browse through the collection of prompts shared by the community.

- **Update Prompts**: Edit and refine prompts that you've created.

- **Delete Prompts**: Remove prompts that are no longer relevant.

- **Google Sign-In**: Users can authenticate using their Google accounts.

## Tech Stack

- **Next.js**: A React framework for building server-rendered React applications.

- **Tailwind CSS**: A utility-first CSS framework for quickly styling the application.

- **MongoDB**: A NoSQL database for storing prompt data.

- **NextAuth**: Provides authentication, including Google Sign-In, for the application.

- **Google Sign-In/Console**: Integrates with Google's authentication services for user management.

- **Session Management**: Handles user sessions to keep them authenticated.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/AKASH-PRASAD7/promptopia.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Promptopia
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up a `.env.local` file with the following environment variables:

   ```env
   NEXTAUTH_URL=http://localhost:3000
   CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
   GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET
   MONGODB_URI=YOUR_MONGODB_URI
   NEXTAUTH_URL_INTERNAL=http://localhost:3000
   NEXTAUTH_SECRET=YOUR_NEXTAUTH_SECRET
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

The application will be accessible at `http://localhost:3000`.

## Usage

- Visit the app at `http://localhost:3000`.

- Sign in using your Google account.

- Create, read, update, and delete prompts as needed.

## Contributing

Contributions are welcome! Feel free to open issues and pull requests to help improve this project.

## License

This project is licensed under the [MIT License](LICENSE).

---
