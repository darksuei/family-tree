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

const constructobj = (obj)=>{
  const one = {}
  let two = one
  let i = 0
  let j = 0
  let defaultarr = [{},{},{},{},{}];

  while(obj.length>0 && obj[0]){
    let arr = defaultarr;
    let val = obj[0];
    let val2 = obj[1];
    obj.shift();
    obj.shift();

    if(Array.isArray(val)){
        // for(let x=0;x<val.length;x++){
          defaultarr[0].patriach = val[0];
          defaultarr[0].spouse = val2[0];
          defaultarr[0].children = defaultarr;
        // }
    }else{
        two.patriach = val;
        two.spouse = val2;
    }
    two.children = defaultarr;

  }
  return one;
}
// const constructobj()

function findtree(name){
  return Tree.find({lastname:name})
}

module.exports.index = function(req, res) {
    res.render(path.join(__dirname,'..','views','index'), { title: 'Family Tree' });
}  

module.exports.family_tree = function(req, res) {
  res.render(path.join(__dirname,'..','views','family_tree'), { title: 'Family Tree' });
}

module.exports.family_tree_search = function(req, res) {
  let searchstr = req.query.search;
  details = findtree(searchstr)
  res.render(path.join(__dirname,'..','views','family_tree'), { title: 'Family Tree' });
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