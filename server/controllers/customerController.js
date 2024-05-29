const Customer = require("../models/Customer");
const Agent = require("../models/Agent");



module.exports = {
  mainhomepage,
  homepage,
  addCustomer,
  postCustomer,
  view,
  edit,
  editpost,
  deleteCustomer,
 // producttoagent
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

async function homepage(req, res) {
  const locals = {
    title: "Products & Review Managemant System",
  };

  try {
    const customers = await Customer.find({});
    
    res.render("customer/allproducts", {title: "Products & Review Managemant System",customers: customers});
  } catch (error) {
    console.log(error)
  }

}

///New customer form

async function addCustomer(req, res) {
  const locals = {
    title: "Add New Product",
  };
  // fetching Agents Details
  const agents = await Agent.find({});

  if(!agents){
    console.log("Agents not found")
  }

  // Passing Aggents details to customer/add form
  res.render("customer/add", {locals, agents});
}

///New customer database add

async function postCustomer(req, res) {
  console.log(req.body);

  const newCustomer = new Customer({
    productName: req.body.productName,
    manufacturer: req.body.manufacturer,
    productCategory: req.body.productCategory,
    salesPeople: req.body.salesPeople

  });

  try {
    await Customer.create(newCustomer);
    res.redirect("/allproducts");
  } catch (error) {
    console.log(error);
  }
}


///View user data

async function view(req, res) {
  try {
    const customer = await Customer.findOne({ _id: req.params.id });
    console.log(req.params)

    const locals = {
      title: "View Product Data",
     
    };

    
    res.render("customer/view", {
      locals,
      customer,
    });
  } catch (error) {
    console.log(error);
  }
}
/**
 * GET /
 * Edit Customer Data
 */
async function edit (req, res){
  try {
    const customer = await Customer.findOne({ _id: req.params.id });
    //const salesPeople =  customer.salesPeople
    const locals = {
      title: "Edit Product Data",
    
    };
console.log(customer);

    res.render("customer/edit", {
      locals,
      customer
    });
  } catch (error) {
    console.log(error);
  }
}

/**
 * GET /
 * Update Customer Data
 */
async function editpost (req, res){
  try {
    await Customer.findByIdAndUpdate(req.params.id, {
      productName: req.body.productName,
      manufacturer: req.body.manufacturer,
      productCategory: req.body.productCategory,

    });
    await res.redirect(`/edit/${req.params.id}`);

    console.log("redirected");
  } catch (error) {
    console.log(error);
  }
}

/**
 * Delete /
 * UDelete customer
 */
async function deleteCustomer (req, res){
  try {
    await Customer.deleteOne({ _id: req.params.id });
    res.redirect("/allproducts");
  } catch (error) {
    console.log(error);
  }
}

// async function producttoagent(req, res) {
//   const gettingAgents = await Customer.findById(req.params.id).populate('Agent');


//   const agentMapping = await Agent.find({ _id: { $nin: Customer.salesPeople } }).sort('name');

//   res.render("customer/view", {
//     title: "View Product Data",
//     agentMapping,gettingAgents
//   });
// }