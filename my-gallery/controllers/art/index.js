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
    res.render("art/index.jsx", { art, user: req.session.username });
  } catch (err) {
    console.log(err);
  }
})
// NEW
router.get("/new", auth, (req, res) => {
  try{
    res.render("art/new.jsx")
  } catch(error){
    console.log(error)
  }
})
// DESTROY
router.delete("/:id", auth, async (req, res) => {
  try{
    await Art.findByIdAndDelete(req.params.id)
    res.redirect("/art/")
  } catch(error){
    console.log(error)
  }
})
// UPDATE
router.put("/edit/:id", auth, async (req, res) => {
  try{
    req.body.username = req.session.username
    await Art.findByIdAndUpdate(req.params.id, req.body)
    res.redirect("/art/")
  } catch(error){
    console.log(error)
  }
})
// CREATE
router.post("/", auth, async (req, res) => {
  try{
      req.body.username = req.session.username
      const newArt = await Art.create(req.body)
      res.redirect("/art/")
  } catch(error){
    console.log(error)
  }
})
// EDIT
router.get("/edit/:id", auth, async (req, res) => {
  try{
    const art = await Art.findById(req.params.id)
    res.render("art/edit.jsx", {art})
  } catch(error){
    console.log(error)
  }
})
// FRAME 
router.get("/frame/:id", auth, async (req, res) => {
  try{
    // req.body.username = req.session.username
    const art = await Art.findById(req.params.id);
    res.render("art/frame.jsx", {
      art,
      user: req.session.username,
      index: req.params.id
    });
  } catch (err) {
    console.log(err);
  }
})
// SHOW
router.get("/:id", auth, async (req, res) => {
  try{
    // req.body.username = req.session.username
    const art = await Art.findById(req.params.id);
    res.render("art/show.jsx", {
      art,
      user: req.session.username,
      index: req.params.id
    });
  } catch (err) {
    console.log(err);
  }
})


//TEST ROUTE TO SHOW HOW AUTH MIDDLEWARE WORKS

router.get("/", auth, (req, res) => {
  res.send("if you see this you are logged in");
});

///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
