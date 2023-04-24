let path = require('path')
const Tree = require('../models/treemodel')

// const constructobj = (obj)=>{
//   const one = {}
//   let two = one
//   while(obj.length>0){
//     const val = obj[0]
//     obj.shift()
//     if(Array.isArray(val)){
//       for(let i=0;i<val.length;i++){
//         if(val[i]==""){
//           break
//         }
//         two.father = val[i]
//         two.son = {}
//         two = two.son
        
//       }
//     }else{
//       two.father = val
//       two.son = {}
//       two = two.son
//     }
//   };
//   return one
// }

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
    res.render(path.join(__dirname,'..','views','index'), { title: 'Family Tree' });
}  

module.exports.family_tree = function(req, res) {
  res.render(path.join(__dirname,'..','views','family_tree'), { title: 'Family Tree' });
}

module.exports.getData = async function (req,res){
  let searchstr = req.query.search;
  var treeDetails = await Tree.findOne({name:searchstr},{'_id': false, '__v': false});
  var data = { title: 'Family Tree', treeDetails: treeDetails};
  // res.json(data)
  res.render(path.join(__dirname,'..','views','family_tree'), { title: 'Family Tree', treeDetails: treeDetails});
  // res.send(data)
}

module.exports.family_tree_search = async function(req, res) {
  let searchstr = req.body.search;
  var treeDetails = await Tree.findOne({name:searchstr},{'_id': false, '__v': false});
  // res.send(treeDetails)
  res.render(path.join(__dirname,'..','views','family_tree'), { title: 'Family Tree', treeDetails: JSON.stringify(treeDetails)});
}

module.exports.login = function(req, res) {
res.render(path.join(__dirname,'..','views','login'), { title: 'Family tree Login' });
}

module.exports.register = function(req, res) {
res.render(path.join(__dirname,'..','views','registration'), { title: 'Registration' });
}

module.exports.display = function(req, res) {
  if(req.method === 'GET'){
    console.log(req.query)
      const tree = new Tree(
        constructobj(Object.values(req.query))
      )
      tree.save().then(()=>{
        console.log("works")
        res.status(200);
        res.render(path.join(__dirname,'..','views','dataInput'));
      }).catch((error)=>{
        console.log(error)
      res.status(400).send(error);
    })}else{
    res.status(201)
    res.render(path.join(__dirname,'..','views','dataInput'));
  }
  }

  module.exports.inputform = function(req, res) {
    res.render(path.join(__dirname,'..','views','jsondisplay'), { title: 'Family Tree' });
    }