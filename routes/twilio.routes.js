// routes/ivrRoutes.js
const express = require("express");
const router = express.Router();
const ivrController = require("../controllers/twilio.controllers.js");

// Route to initiate the call
router.post("/call", ivrController.makeCall);

// Route to handle the IVR response (audio and button press)
router.post("/ivr", ivrController.ivrResponse);

// Route to handle button press (e.g., pressing '1')
router.post("/gather", ivrController.handleGather);

module.exports = router;
