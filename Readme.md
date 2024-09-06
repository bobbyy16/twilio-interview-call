# 📞 Twilio IVR Call System with SMS Integration

This project is a Node.js-based IVR (Interactive Voice Response) system built using the Twilio API. The system allows users to receive a personalized IVR call with a voice message. If the user presses `1`, they will receive a personalized interview link via SMS. The project is designed with clear structure, leveraging the MVC pattern, and includes Twilio integration for both voice calls and SMS. 🎉

## 📝 Features

- 🔊 **IVR Call System**: Place automated voice calls and play a custom voice message.
- 📝 **User Interaction**: Users can interact via their phone’s keypad during the call.
- 💬 **SMS Integration**: Send personalized SMS interview links upon user input.
- 🔐 **Environment Variables**: Secure configuration of Twilio credentials using `.env`.
- 🚀 **Express Framework**: Built on top of Express.js for easy routing and server management.

## 📚 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Setup Instructions](#-setup-instructions)
- [Environment Variables](#-environment-variables)
- [Endpoints](#-endpoints)
- [Project Structure](#-project-structure)
- [How It Works](#-how-it-works)
- [Limitations](#-limitations)
- [Contributing](#-contributing)

## 🛠️ Technologies Used

- [Node.js](https://nodejs.org/en/) - JavaScript runtime for building fast and scalable server-side applications.
- [Express.js](https://expressjs.com/) - Web framework for handling routes and requests.
- [Twilio API](https://www.twilio.com/) - Cloud communications platform for voice and SMS functionality.
- [dotenv](https://www.npmjs.com/package/dotenv) - For managing environment variables.

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/twilio-ivr-system.git
cd twilio-ivr-system
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

- Create a .env file in the root directory and fill in the Twilio credentials and phone numbers, please refer .env.example.

```bash
touch .env
```

### 4. Start the Server

```bash
npm start
```

- Your server will be running on http://localhost:4000.

## 🌐 Endpoints

### 1. Initiate a Call

```bash
POST /call
```

- Initiates a phone call from your Twilio number to the recipient's number.

### 2. Respond to IVR Call

```bash
POST /ivr
```

- Responds to the call by playing a voice message and waits for user input (press 1 or 2).

### 3. Handle User Input

```bash
POST /gather
```

- Handles the user's input (e.g., pressing 1 to send the interview link via SMS).

## 📂 Project Structure

├── controllers
│ └── ivrController.js # Logic for handling Twilio API interactions
├── routes
│ └── ivrRoutes.js # Defines the routes for initiating calls and IVR responses
├── .env # Environment variables (not included in version control)
├── server.js # Main server file to run the Express app
└── README.md # This file!

## 🔄 How It Works

1. **Making the Call**: When the `/make-call` endpoint is hit, a call is initiated from your Twilio number to the recipient's number.

2. **IVR Response**: When the call is answered, the user hears a custom voice message (configured in `ivrResponse`). They are prompted to press 1 if they are interested.

3. **Handling User Input**: If the user presses 1, an SMS with a personalized interview link is sent to their phone number via the Twilio SMS API.

4. **Twilio Integration**: Twilio is used to handle both voice and SMS functionalities seamlessly. All communication (voice and SMS) happens through Twilio's APIs.

## ⚠️ Limitations

- **Trial Account Restrictions**: If you are using a Twilio trial account, you can only make calls and send SMS to phone numbers that you've verified with Twilio.
- **Audio File**: Currently, the system speaks the message using Twilio's `say()` feature. To play an audio file, you need a direct link to the file hosted on a service that supports public access.

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project, feel free to submit a pull request.

To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.
