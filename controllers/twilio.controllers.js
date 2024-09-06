// controllers/ivrController.js
const twilio = require("twilio");
require("dotenv").config;

// Twilio credentials (replace with your own)
const accountSid = process.env.SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.AUTH; // Your Auth Token from www.twilio.com/console
const client = new twilio(accountSid, authToken);

const myPhoneNumber = process.env.Twilio_NUMBER; // Twilio number
const recipientNumber = process.env.RECIPENT_NUMBER; // Your number
console.log(myPhoneNumber, recipientNumber);

// Audio and Interview Link
const audioUrl = "https://screenapp.io/app/#/shared/wkaGswaFVf"; // Put the direct link to your audio file here.
const interviewLink =
  "https://v.personaliz.ai/?id=9b697c1a&uid=fe141702f66c760d85ab&mode=test";

// Make the call
exports.makeCall = (req, res) => {
  client.calls
    .create({
      url: "https://05e6-152-58-242-135.ngrok-free.app/ivr",
      to: recipientNumber,
      from: myPhoneNumber,
    })
    .then((call) => {
      console.log(`Call initiated with ID: ${call.sid}`);
      res.status(200).send("Call initiated.");
    })
    .catch((error) => {
      console.error(`Failed to initiate call: ${error}`);
      res.status(500).send("Error initiating call.");
    });
};

// Respond to IVR call and play audio
exports.ivrResponse = (req, res) => {
  const twiml = new twilio.twiml.VoiceResponse();

  // Play the audio
  twiml.play(audioUrl);
  twiml.gather({
    action: "/gather",
    method: "POST",
    numDigits: 1,
    timeout: 5,
  });

  res.type("text/xml");
  res.send(twiml.toString());
};

// Handle input (press 1 to send SMS)
exports.handleGather = (req, res) => {
  const digits = req.body.Digits;
  const twiml = new twilio.twiml.VoiceResponse();

  if (digits === "1") {
    // Send interview link via SMS upon pressing 1
    client.messages
      .create({
        body: `Here is your interview link: ${interviewLink}`,
        from: myPhoneNumber,
        to: recipientNumber,
      })
      .then((message) => {
        console.log(`SMS sent with SID: ${message.sid}`);
      })
      .catch((error) => {
        console.error(`Failed to send SMS: ${error}`);
      });

    twiml.say("Thank you! We have sent the interview link to your phone.");
  } else {
    twiml.say("Invalid input. Goodbye!");
  }

  twiml.hangup();
  res.type("text/xml");
  res.send(twiml.toString());
};
