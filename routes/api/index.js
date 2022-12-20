const router = require('express').Router();
const userRoutes = require('./userRoutes');
const spotifyRoutes = require('./spotifyRoutes');
const checkoutRoutes = require('./checkoutRoutes');

router.use('/checkout', checkoutRoutes);
router.use('/spotify', spotifyRoutes);
router.use('/users', userRoutes);


module.exports = router;
