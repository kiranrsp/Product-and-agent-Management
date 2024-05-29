const Customer = require("../models/Customer");
const Agent = require("../models/Agent");



module.exports = {
  mainhomepage,
  
};

///get homepage

async function mainhomepage(req, res) {
  const locals = {
    title: "Products & Review Managemant System",
  };

  try {
       
    res.render("readonlyindex", {title: "Products & Review Managemant System"});
  } catch (error) {
    console.log(error)
  }

}
