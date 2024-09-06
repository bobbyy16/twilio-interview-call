const express = require("express");
const router = express.Router();
const ivrController = require("../controllers/twilio.controllers.js");

router.post("/call", ivrController.makeCall);
router.post("/ivr", ivrController.ivrResponse);
router.post("/gather", ivrController.handleGather);

module.exports = router;
