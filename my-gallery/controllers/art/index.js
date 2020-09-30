//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const auth = require("../authmiddleware");
const Art = require("../../models/art")

///////////////////////////////////////
// CREATE ROUTER
///////////////////////////////////////
const router = Router();

///////////////////////////////////////
// ROUTES
///////////////////////////////////////

// INDEX
router.get("/", auth, async (req, res) => {
  try{
    const art = await Art.find({username: req.session.username});
    res.render("art/index.jsx", { art });
  } catch (err) {
    console.log(err);
  }
})
// NEW

router.get("/new", auth, (req, res) => {
    res.render("art/signup.jsx")
})
// DESTROY
// UPDATE
// CREATE
router.post("/", auth, async (req, res) => {
  req.body.username = req.session.username
    const newArt = await Art.create(req.body)
    res.redirect("/art/")
})
// EDIT
// SHOW

//TEST ROUTE TO SHOW HOW AUTH MIDDLEWARE WORKS

router.get("/", auth, (req, res) => {
  res.send("if you see this you are logged in");
});

///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
