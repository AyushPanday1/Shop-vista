const router = require("express").Router();
const stripe = require("stripe")("sk_test_51NZqX6SBTesCPENLt0b7STExxfFNVo3BEPiZ1SBE9M6yiHSn5lEtT1N2Gnwym3i2H01ud6PBBWUHsEN8qtg41lP900OY5UuqK0");


router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
