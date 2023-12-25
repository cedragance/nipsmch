var express = require("express")
var router = express.Router()

const username = "NiP"
const password = "Spasic"

router.post('/:client_type', (req, res) => {
 let p_username = req.body.username
 let p_password = req.body.password
 
 if(p_username == username && p_password == password){
  res.redirect('/mainMenu.html');
 } else {
  res.redirect('/login.html');
 }
})

module.exports = router;
