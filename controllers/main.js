let path = require('path')
const Tree = require('../models/treemodel')

module.exports.index = function(req, res) {
  let isloggedIn = false;
  if(req.session.data){
    isloggedIn = true;
  }else{
    console.log("No session data...!")
    isloggedIn = false;
  }
  res.render(path.join(__dirname,'..','views','index'), { title: 'Uchegbu Family Tree', isloggedIn: isloggedIn });
}  

module.exports.loggedIn = function(req, res) {
  res.redirect('/');
}

module.exports.about = function(req, res) {
  if(req.session.data){
    isloggedIn = true;
  }else{
    isloggedIn = false;
  }
  res.render(path.join(__dirname,'..','views','about_us'), { title: 'About Us', isloggedIn: isloggedIn });
}

module.exports.success = function(req, res) {
  let text = "Successful..!"
  isloggedIn = false;
  if(req.session.data){
    isloggedIn = true;
  }
  res.render(path.join(__dirname,'..','views','success'), { title: 'Success', text: text, isloggedIn: isloggedIn });
}

module.exports.family_tree_search = async function(req, res, next) {
  if(req.session.data){
    var email = req.session.data.user.email;
    res.render(path.join(__dirname,'..','views','family_tree'),{email:email});
   }else{
    res.send("Please Login to view this page...!")
   }
}

module.exports.getData = async function (req,res){
  var email = req.session.data.user.email;
  var treeDetails = await Tree.findOne({email:email},{'_id': false, '__v': false});
  res.send(treeDetails);
}

module.exports.default_tree = async function (req,res){
  const data = req.session.data;
  res.render(path.join(__dirname,'..','views','default_family_tree'), { title: 'Uchegbu Family Tree', data: data });
}

module.exports.login = function(req, res) {
res.render(path.join(__dirname,'..','views','login'), { title: 'Uchegbu Family tree | Login' });
}

module.exports.logout = function(req, res) {
  if(req.session.data){
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
      } else {
        res.render(path.join(__dirname,'..','views','index'), { title: 'Family Tree', message: 'Successfully logged out..!', alerttype: "success" });
      }
    });
  }else{
    res.redirect('/');
  }
}

module.exports.register = function(req, res) {
res.render(path.join(__dirname,'..','views','registration'), { title: 'Uchegbu Family Tree | Sign Up' });
}

module.exports.edit = function(req, res) {
    Tree.findOne({email:req.session.data.user.email}, (err, data) => {
      if (err) {
        console.error(err);
      }
      res.status(201).render(path.join(__dirname,'..','views','dataInput'),{title: 'Edit Family Tree', data:data});
    });
} 

module.exports.editpost = function (req,res){
    let usertree = {
      "email" : req.session.data.user.email,
      "name" : req.body.fatherfname +" "+ req.body.fatherlname,
      "parent" : "root",
      "married" : "+",
      "spouse" : req.body.motherfname +" "+ req.body.motherlname,
      "children" : createChildrenArray(req.body.fatherfname,req.body.fatherlname,req.body.child1fname,req.body.child1lname,req.body.child2fname,req.body.child2lname,req.body.child3fname,req.body.child3lname)
    }
    // let treeobj = constructobj(Object.values(req.query)) RECURSSION FUNCTION

  Tree.create(usertree).then(() => {
    res.status(200).redirect('/success');
  }).catch((error) => {
    console.log(error)
    res.status(400).send(error);
  })
}

module.exports.editputpost = function (req,res,next){
  if (req.headers['x-http-method-override'] === 'PUT') {
    req.method = 'PUT';
  }
  next();
}

module.exports.editpost = function (req,res){
  let usertree = {
    "email" : req.session.data.user.email,
    "name" : req.body.fatherfname +" "+ req.body.fatherlname,
    "parent" : "root",
    "married" : "+",
    "spouse" : req.body.motherfname +" "+ req.body.motherlname,
    "children" : createChildrenArray(req.body.fatherfname,req.body.fatherlname,req.body.child1fname,req.body.child1lname,req.body.child2fname,req.body.child2lname,req.body.child3fname,req.body.child3lname)
  }
  // let treeobj = constructobj(Object.values(req.query)) RECURSSION FUNCTION

Tree.create(usertree).then(() => {
  res.status(200).redirect('/success');
}).catch((error) => {
  console.log(error)
  res.status(400).send(error);
})
}

module.exports.editputpost = function (req,res,next){
if (req.headers['x-http-method-override'] === 'PUT') {
  req.method = 'PUT';
}
next();
}

module.exports.editput = async function (req, res) {
  //SETUP USER INPUT AS AN OBJECT
  let usertree = {
    "email" : req.session.data.user.email,
    "name" : removeSpacesFromEnd(req.body.fatherfname) + " " + removeSpacesFromEnd(req.body.fatherlname),
    "parent" : "root",
    "married" : "+",
    "spouse" : req.body.motherfname + " " + req.body.motherlname,
    "children" : createChildrenArray(req.body.fatherfname, req.body.fatherlname, req.body.child1fname, req.body.child1lname, req.body.child2fname, req.body.child2lname, req.body.child3fname, req.body.child3lname)
  };

  //GET THE EXISTING USER TREE FROM DATABASE
  var email = req.session.data.user.email;
  var treeDetails = await Tree.findOne({ email: email }, { '_id': false, '__v': false });

  //UPDATE THE USER TREE WITH THE NEW USER INPUT
  var updatedTree = await updateTreeDetails(treeDetails, usertree);
  console.log(updatedTree);

  //UPDATE THE USER TREE IN THE DATABASE
  Tree.findOneAndUpdate({ email: req.session.data.user.email }, updatedTree, { new: true, useFindAndModify: false })
    .then((updatedtree) => {
      if (updatedtree) {
        // Tree found and updated successfully
        return updatedtree.save();
      } else {
        res.status(404).send("Tree data not found ");
      }
    })
    .then(() => {
      res.status(200).redirect('/success');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('An Error Occurred');
    });
};


function createChildrenObject(childfname,childlname,fatherfname,fatherlname){
  return {
    "name" : childfname +" "+ childlname,
    "parent" : fatherfname +" "+ fatherlname,
    "married" : "+",
    "spouse" : " ",
    "children" : []
  }
}

function createChildrenArray(fatherfname, fatherlname, child1fname, child1lname, child2fname, child2lname, child3fname, child3lname){
  let arr = [];
  if (child1fname){
    arr.push(createChildrenObject(child1fname,child1lname, fatherfname, fatherlname))
  }
  if (child2fname){
    arr.push(createChildrenObject(child2fname,child2lname, fatherfname, fatherlname))
  }
  if (child3fname){
    arr.push(createChildrenObject(child3fname,child3lname, fatherfname, fatherlname))
  }
  return arr;
}

function removeSpacesFromEnd(str){
  while (str.charAt(str.length-1) === " "){
    str = str.slice(0,-1);
  }
  return str;
}

async function updateTreeDetails(treeNode, usertree) {
  if (treeNode["name"] === usertree["name"]) {
    // If the names match, replace the entire node with usertree
    return usertree;
  } else {
    if (treeNode.children && Array.isArray(treeNode.children)) {
      for (let i = 0; i < treeNode.children.length; i++) {
        // Recursively search for the name in the children
        treeNode.children[i] = await updateTreeDetails(treeNode.children[i], usertree);
        if (treeNode.children[i]["name"] === usertree["name"]) {
          // If the names match after updating children, replace only the matching child with usertree
          return treeNode;
        }
      }
    }

    // If the name is not found in the children, return the unchanged treeNode
    return treeNode;
  }
}

