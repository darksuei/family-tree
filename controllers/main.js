let path = require('path')
const Tree = require('../models/treemodel')

//FUNCTION FOR NESTING THE INPUT IN JSON FORMAT
const constructobj = (obj)=>{
  const one = {}
  let two = one
  let counter = 0;
  let defaultarr = [{},{},{},{},{}];
  let holdarr = [{},{},{},{},{}];

  while(obj.length>0 && obj[0]){
    console.log(obj)
    let arr = defaultarr;
    let val = obj[0];
    let val2 = obj[1];
    obj.shift();
    obj.shift();

    if(counter == 0){
      two.name = val;
      two.parent = "root";
      two.married = "+";
      two.spouse = val2;
      two.children = defaultarr;
  }
  else if(counter >=1){
    arr[counter-1].name = val;
    arr[counter-1].parent = two.name; //parent should inherit name from immediate parent node
    arr[counter-1].married = "+";
    arr[counter-1].spouse = val2;
    arr[counter-1].children = [];
  }
    counter++;
  }
  return one;
}

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
      "children" : [
        {
          "name" : req.body.childfname +" "+ req.body.childlname,
          "parent" : req.body.fatherfname +" "+ req.body.fatherlname,
          "married" : "+",
          "spouse" : req.body.cspousefname +" "+ req.body.cspouselname
        }
      ]
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

module.exports.editput = function (req, res) {
  
  let usertree = {
    "email" : req.session.data.user.email,
    "name" : req.body.fatherfname +" "+ req.body.fatherlname,
    "parent" : "root",
    "married" : "+",
    "spouse" : req.body.motherfname +" "+ req.body.motherlname,
    "children" : [
      {
        "name" : req.body.childfname +" "+ req.body.childlname,
        "parent" : req.body.fatherfname +" "+ req.body.fatherlname,
        "married" : "+",
        "spouse" : req.body.cspousefname +" "+ req.body.cspouselname
      }
    ]
  }

    Tree.findOneAndUpdate({ email: req.session.data.user.email }, usertree, { new: true, useFindAndModify: false })
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
