const Agent = require("../models/Agent");
const mongoose = require("mongoose");


module.exports = {
  addAgent,
  postAgent


};



///New Agent form

function addAgent(req, res) {
    const locals = {
      title: "Add New Agent",
    };
    res.render("agent/add", locals);

  }

  ///Post  Agent to database

  async function postAgent(req, res) {
    console.log(req.body);
    const locals = {
      title: "Add New Agent",
    };
  
    const newAgent = new Agent({
      agentName: req.body.agentName,
  
    });
  
    try {
      await Agent.create(newAgent);
      res.render("agent/add", locals);

    } catch (error) {
      console.log(error);
    }
  }

  async function postCustomer(req, res) {
    console.log(req.body);
  
    const newCustomer = new Customer({
      productName: req.body.productName,
      releaseDate: req.body.releaseDate,
      productCategory: req.body.productCategory,
  
    });
  
    try {
      await Customer.create(newCustomer);
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  }