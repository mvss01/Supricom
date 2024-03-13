const express = require("express");
const router = express.Router();

router.get('/results', async (req, res) => {
    res.render('results')
})


module.exports = router
