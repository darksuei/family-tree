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
  res.render(path.join(__dirname,'..','views','index'), { title: 'Uchegbu Family Tree' });
}  

module.exports.about = function(req, res) {
  res.render(path.join(__dirname,'..','views','about_us'), { title: 'About Us' });
}

module.exports.success = function(req, res) {
  res.render(path.join(__dirname,'..','views','success'), { title: 'Registration Success' });
}

module.exports.family_tree_search = async function(req, res) {
  const url = req.originalUrl;
  console.log(url);
  let slicedurl = url.slice(19);
  console.log(slicedurl)
  let newurl = '/getdata'+slicedurl
  console.log(newurl)
  res.render(path.join(__dirname,'..','views','family_tree'), { title: 'Family Tree', newurl: newurl});
}

module.exports.getData = async function (req,res){
  let searchstr = req.query.search;
  var treeDetails = await Tree.findOne({name:searchstr},{'_id': false, '__v': false});
  var data = { title: 'Family Tree', treeDetails:treeDetails};
  res.send(data);
}

module.exports.default_tree = async function (req,res){
  const data = req.session.data;
  res.render(path.join(__dirname,'..','views','default_family_tree'), { title: 'Uchegbu Family Tree', data: data });
}

module.exports.login = function(req, res) {
res.render(path.join(__dirname,'..','views','login'), { title: 'Uchegbu Family tree | Login' });
}

module.exports.logout = function(req, res) {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.render(path.join(__dirname,'..','views','index'), { title: 'Family Tree', message: 'Successfully logged out..!', alerttype: "success" });
    }
  });
}

module.exports.register = function(req, res) {
res.render(path.join(__dirname,'..','views','registration'), { title: 'Uchegbu Family Tree | Sign Up' });
}

module.exports.display = function(req, res) {
  if(req.method === 'post'){
    console.log(req.query)
      const tree = new Tree(
        constructobj(Object.values(req.query))
      )
      tree.save().then(()=>{
        console.log("works")
        res.status(200);
        res.render(path.join(__dirname,'..','views','dataInput', {title: 'Edit Family Tree'}));
      }).catch((error)=>{
        console.log(error)
      res.status(400).send(error);
    })}else{
    res.status(201)
    res.render(path.join(__dirname,'..','views','dataInput'),{title: 'Edit Family Tree'});
  }
  }