# MERN App Documentation

### App Overview

This MERN app is designed to provide a content management system where an admin can create and manage various types of content, including HTML, media files, and text. The app includes authentication and authorization features to ensure secure access to different functionalities.

##### Key Features

- Admin Dashboard:
  - The admin dashboard is protected and requires authentication to access.
  - Admins can log in using their credentials to access the dashboard.
- Admin Content Management:
  - Admins have the ability to create and manage different types of content.
  - The content can include HTML, media files (images, videos, etc.), and text.
  - Admins can create rich and engaging content using HTML formatting.
- User Content Viewing:
  - Users (guests) can view content created by the admin.
  - The content is presented based on certain conditions.
- Content Visibility Conditions:
  - Content visibility can be based on various conditions set by the admin.

##### User Flow

- Admin Workflow:
  - Admins log in to the admin dashboard using their credentials.
  - Inside the dashboard, they can create new content items.
  - They can write HTML code, upload media files, and add text to create engaging content.
  - Admins can set visibility conditions for each content item.
- User Workflow:
  - Users can visit the app's main interface without needing to log in.
  - Based on the visibility conditions set by the admin, users see different content items.
  - Content might be tailored to specific user roles or other attributes.

##### Additional Points

- The app leverages JWT-based authentication for admin access, ensuring secure authentication.
- Content management is dynamic, allowing admins to add, update content items.
- Admins have the flexibility to change visibility conditions for content items as needed.
- The app provides a seamless user experience, offering rich and diverse content to users.
- Admins can utilize media files to create visually appealing content for better engagement.
- Users can benefit from personalized content experiences based on their attributes and roles.

### Folder Structure
```
MERN-App
├── client
│   ├── public
│   └── src
│       ├── components
│       ├── constant
│       ├── context
│       ├── Hooks
│       ├── pages
│       ├── routes
|       ├── App.js
|       ├── App.css
|       ├── index.js
|       ├── index.css
│       └── services
└── server
    ├── build
    └── src
        ├── config
        ├── controllers
        ├── middlewares
        ├── models
        ├── public
        ├── routes
        ├── .babelrc
        ├── .env
        ├── webpack.config.js
        ├── package.json
        └── util
```

# Running the App

To bootstrap the app, you need to open two separate terminals. Navigate to the server and client folders in each terminal:

#### Terminal 1:

```bash
 cd client
 npm install
```

#### Terminal 2:

```bash
  cd server
  npm install
```

## Server App

Inside sever app at root level create .env file and add

```bash
SERVER_PORT=8080
JWT_SECRET=4f3eA$5*8_9bZc1D
MONGO_URL=mongodb+srv://poc:S361qT0tguq0cEtY@cluster0.aqalfes.mongodb.net/?retryWrites=true&w=majority
```

The server app is built using Express and includes the following dependencies:

- @babel/core: ^7.22.10
- bcrypt: ^5.1.0
- cors: ^2.8.5
- express: ^4.18.2
- jsonwebtoken: ^9.0.1
- mongoose: ^7.4.3
- multer: ^1.4.5-lts.1
- webpack: ^5.88.2
- concurrently: ^8.2.0
- webpack-node-externals: ^3.0.0

The server uses `JWT-based` authentication.
To run the server app in development mode, use the following command:

```bash
 npm run start:dev
```

This will start the server on `http://localhost:8080`.

## Client App

The client app is built using React. Here are some of the key dependencies used:

- axios: ^1.4.0
- react: ^18.2.0
- react-dom: ^18.2.0
- react-router-dom: ^6.15.0

To run the client app, execute the following command:

```bash
 npm run start
```

This will start the client app on `http://localhost:3000`.
