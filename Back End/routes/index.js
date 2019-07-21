const express = require('express')
//this is telling express to use ROUTER which is a built in express command when you call the variable router.
const router = express.Router();
const DBC = require('./People')
const REL = require('./Relationships')

//here is your first ROUTES folder. The main part of express and something we did not really go into in depth in class is routing to different
//folders so that you can use middleware. An example of middleware is the fact that we only have to tell express to use url encoded true once.
//every file thats connected through routes after that then has that automatically.

//This is the first and only route we have so far. It just leads to commands. This can be any url you want and i normally seperate them by 
//tables/collections. So for instance i would normally set this to accounts. It then just like the last time tells the route to point to our
///./people folder. See a pattern yet?
router.use('/commands', DBC)
router.use('/relationships', REL)

//module.exports basically lets other files know that when you "use" this file your specifically using the router commands. Youll start to
//understand it as we start to make more routes.

module.exports = router;