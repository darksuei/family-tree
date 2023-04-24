var height = 29000;
var width = 150000; 

var heading = "THE UCHEGBU'S FAMILY TREE"

var margin = {left: 50,right:50,top:2000,bottom:0};

var tree = d3.tree().size([width,height]);

var svg = d3.select('body').append('svg').attr('width',width - 50).attr('height',height +4000);
var chartGroup = svg.append('g').attr('transform','translate('+margin.left+','+margin.top+')');

if (!data){
  var data = [
    {
      "name": "Chief Nwankwo UCHEGBU(Ogbambo Ego)",
      "parent": "root",
      "married": "+",
      "spouse": " Mrs Odoziaku Uchegbu",
      "children": [
        {
          "name": "Chief Nwokoye Akude UCHEGBU",
          "parent": "Chief Nwankwo UCHEGBU(Ogbambo Ego)",
          "married": "+",
          "spouse": "Chief MRS Nwaku Uchegbu",
          "children": [
            {
              "name": ["Mr Felix Uchegbu"],
              "parent": "Chief MRS Nwaku Uchegbu",
              "married": "+",
              "spouse": "Mrs Ngozi Uchegbu (Gold)",
              "children": [
                {
                  "name": "Chi chi Uchegbu",
                  "parent": "Mr Felix Uchegbu",
                  "married": "",
                  "spouse": "",
                  "children": [
                  
                  ]
                },
                {
                  "name": "Chief Ifeanyi Uchegbu",
                  "parent": "Mr Felix Uchegbu",
                  "married": "+",
                  "spouse": "Mrs Amaka Lilian Uchegbu",
                  "children": [
                    {
                      "name": "Ms Chinaza Uchegbu",
                      "parent": "Ms Chinaza Uchegbu",
                      "married": "",
                      "spouse": "",
                      "children": [
                      
                      ]
                    },{
                      "name": "Mr Onyedika Uchegbu",
                      "parent": "Mr Onyedika Uchegbu",
                      "married": "",
                      "spouse": "",
                      "children": [
                      
                      ]
                    },{
                      "name": "Mr Dumebi Uchegbu",
                      "parent": "Chief Ifeanyi Uchegbu",
                      "married": "",
                      "spouse": "",
                      "children": [
                      
                      ]
                    }
                  ]
                },
                {
                  "name": "Mr Okwudili Uchegbu",
                  "parent": "Mr Felix Uchegbu",
                  "married": "+",
                  "spouse": "Mrs Obianuju Love Uchegbu",
                  "children": [
                    {
                      "name": "Ms Ebube Uchegbu",
                      "parent": "Mr Okwudili Uchegbu",
                      "married": "",
                      "spouse": "",
                      "children": [
                      
                      ]
                    },
                    {
                      "name": "Mr Chibuike Uchegbu",
                      "parent": "Mr Okwudili Uchegbu",
                      "married": "",
                      "spouse": "",
                      "children": [
                      
                      ]
                    },
                    {
                      "name": "Ms Amanda Uchegbu",
                      "parent": "Mr Okwudili Uchegbu",
                      "married": "",
                      "spouse": "",
                      "children": [
                      
                      ]
                    },
                    {
                      "name": "Mr Chukwudalu Uchegbu",
                      "parent": "Mr Okwudili Uchegbu",
                      "married": "",
                      "spouse": "",
                      "children": [
                      
                      ]
                    }
                  ]
                }
              
              ]
            },
            {
              "name": "Chief Benedict Uchegbu",
              "parent": "Chief MRS Nwaku Uchegbu",
              "married": "+",
              "spouse": "Mrs Nkili Uchegbu  +  Mrs Ochomma Uchegbu",
              "children": [
                {
                  "name": "Mr Obiora Uchegbu",
                  "parent": "Chief Benedict Uchegbu",
                  "married": "",
                  "spouse": "",
                  "children": [
                  
                  ]
                },
                {
                  "name": "Mr Uchenna Uchegbu",
                  "parent": "Chief Benedict Uchegbu",
                  "married": "",
                  "spouse": "",
                  "children": [
                  
                  ]
                },
                {
                  "name": "Ms Nwanneka Uchegbu",
                  "parent": "Chief Benedict Uchegbu",
                  "married": "",
                  "spouse": "",
                  "children": [
                  
                  ]
                },
                {
                  "name": "Mr Ejiofor Uchegbu",
                  "parent": "Chief Benedict Uchegbu",
                  "married": "",
                  "spouse": "",
                  "children": [
                  
                  ]
                },
                {
                  "name": "Mr Chibuzor Uchegbu",
                  "parent": "Chief Benedict Uchegbu",
                  "married": "",
                  "spouse": "",
                  "children": [
                  
                  ]
                },
                {
                  "name": "Ms Onyinye Uchegbu",
                  "parent": "Chief Benedict Uchegbu",
                  "married": "",
                  "spouse": "",
                  "children": [
                    
                  
                  ]
                },
                {
                  "name": "Mr Chukwuma Uchegbu",
                  "parent": "Chief Benedict Uchegbu",
                  "married": "",
                  "spouse": "",
                  "children": [
                  
                  ]
                }
              ]
            },
            {
              "name": "Mrs Oliaku C. Ibegbu",
              "parent": "Chief MRS Nwaku Uchegbu",
              "married": "+",
              "spouse": "Mr Augustine Ibegbu",
              "children": [
                {
                  "name": "Ms Ngozi Ibegbu",
                  "parent": "Mrs Oliaku C. Ibegbu",
                  "married": "",
                  "spouse": "",
                  "children": [
                  
                  ]
                },
                {
                  "name": "Mr Augustine Ibegbu",
                  "parent": "Mrs Oliaku C. Ibegbu",
                  "married": "",
                  "spouse": "",
                  "children": [
                  
                  ]
                },
                {
                  "name": "Ms Angela Ibegbu",
                  "parent": "Mrs Oliaku C. Ibegbu",
                  "married": "",
                  "spouse": "",
                  "children": [
                  
                  ]
                },
                {
                  "name": "Mr Calista Ibegbu",
                  "parent": "Mrs Oliaku C. Ibegbu",
                  "married": "",
                  "spouse": "",
                  "children": [
                  
                  ]
                },
                {
                  "name": "Mr Emeka Ibegbu",
                  "parent": "Mrs Oliaku C. Ibegbu",
                  "married": "",
                  "spouse": "",
                  "children": [
                  
                  ]
                },
                {
                  "name": "Ms Chinwe Ibegbu",
                  "parent": "Mrs Oliaku C. Ibegbu",
                  "married": "",
                  "spouse": "",
                  "children": [
                  
                  ]
                },
                {
                  "name": "Mr Chikwue Ibegbu",
                  "parent": "Mrs Oliaku C. Ibegbu",
                  "married": "",
                  "spouse": "",
                  "children": [
                  
                  ]
                }
              ]
            },
            {
              "name": "Chief Mike Uchegbu",
              "parent": "Chief MRS Nwaku Uchegbu",
              "married": "+",
              "spouse": "Dr. Mrs Obianuju N. Uchegbu",
              "children": [
                {
                  "name": "Ms Adaobi Uchegbu",
                  "parent": "Chief Mike Uchegbu",
                  "married": "",
                  "spouse": "",
                  "children": [
                  
                  ]
                },
                {
                  "name": "Mr Onyebuchi Uchegbu",
                  "parent": "Chief Mike Uchegbu",
                  "married": "",
                  "spouse": "",
                  "children": [
                  
                  ]
                },
                {
                  "name": "Mr Chike Uchegbu",
                  "parent": "Chief Mike Uchegbu",
                  "married": "",
                  "spouse": "",
                  "children": [
                  
                  ]
                },
                {
                  "name": "Mr Chiebonam Uchegbu",
                  "parent": "Chief Mike Uchegbu",
                  "married": "",
                  "spouse": "",
                  "children": [
                  
                  ]
                },
                {
                  "name": "Mr Udemezue Uchegbu",
                  "parent": "Chief Mike Uchegbu",
                  "married": "",
                  "spouse": "",
                  "children": [
                  
                  ]
                }
              ]
            },
            {
              "name": "Mrs Uzunma E. Ifedi",
              "parent": "Chief MRS Nwaku Uchegbu",
              "married": "+",
              "spouse": "Mr Okey Ifedi",
              "children": [
                {
                  "name": "Mr Enuma Ifedi",
                  "parent": "Mrs Uzunma E. Ifedi",
                  "married": "",
                  "spouse": "",
                  "children": [
                  
                  ]
                },
                {
                  "name": "Mr Nonso Ifedi",
                  "parent": "Mrs Uzunma E. Ifedi",
                  "married": "",
                  "spouse": "",
                  "children": [
                  
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Chief Samuel Onwunalike UCHEGBU",
          "parent": "Chief Nwankwo UCHEGBU(Ogbambo Ego)",
          "married": "+",
          "spouse": "Mrs Adagu Uchegbu  +  Mrs Rose Uchegbu  +  Mrs Ojiugo Uchegbu",
          "children": [
            {
              "name": "Mrs Adagu Uchegbu children",
              "parent": "Chief Samuel Onwunalike UCHEGBU",
              "married": "",
              "spouse": "",
              "children": [
                {
                  "name": "Mr Clement Uchegbu",
                  "parent": "Mrs Adagu Uchegbu children",
                  "married": "+",
                  "spouse": "Mrs Ifeoma Uchegbu",
                  "children": [
                    {
                      "name": "MRS Nwaneka Uchegbu",
                      "parent": "Mr Clement Uchegbu + Mrs Ifeoma Uchegbu",
                      "married": "",
                      "spouse": "",
                      "children": [
                        
                      ]
                    },
                    {
                      "name": "Mr Afamefuna Uchegbu",
                      "parent": "Mr Clement Uchegbu + Mrs Ifeoma Uchegbu",
                      "married": "",
                      "spouse": "",
                      "children": [
                        
                      ]
                    },
                    {
                      "name": "Mrs Nkiruka Uchegbu",
                      "parent": "Mr Clement Uchegbu + Mrs Ifeoma Uchegbu",
                      "married": "",
                      "spouse": "",
                      "children": [
                        
                      ]
                    }
                  ]
                },
                {
                  "name": "Mrs Theresa Okakpu",
                  "parent": "Mrs Adagu Uchegbu children",
                  "married": "+",
                  "spouse": "Mr Oduche Okakpu",
                  "children": [
                    {
                      "name": "Mr Oduche Okakpu",
                      "parent": "Mrs Theresa Okakpu + Mr Oduche Okakpu",
                      "married": "",
                      "spouse": "",
                      "children": [
                        
                      ]
                    },
                    {
                      "name": "Mr Charles Okakpu",
                      "parent": "Mrs Theresa Okakpu + Mr Oduche Okakpu",
                      "married": "",
                      "spouse": "",
                      "children": [
                        
                      ]
                    },
                    {
                      "name": "Ms Adaobi Okakpu",
                      "parent": "Mrs Theresa Okakpu + Mr Oduche Okakpu",
                      "married": "",
                      "spouse": "",
                      "children": [
                        
                      ]
                    },
                    {
                      "name": "Ms Ifeoma Okakpu",
                      "parent": "Mrs Theresa Okakpu + Mr Oduche Okakpu",
                      "married": "",
                      "spouse": "",
                      "children": [
                        
                      ]
                    },
                    {
                      "name": "Ms Obianuju Okakpu",
                      "parent": "Mrs Theresa Okakpu + Mr Oduche Okakpu",
                      "married": "",
                      "spouse": "",
                      "children": [
                        
                      ]
                    }
                  ]
                },
                {
                  "name": "PROF Amaechi Uchegbumarried 3 wives",
                  "parent": "Mrs Adagu Uchegbu children",
                  "married": "",
                  "spouse": "",
                  "children": [
                    {
                      "name": "Mrs Uta Uchegbu",
                      "parent": "PROF Amaechi Uchegbumarried 3 wives",
                      "married": "",
                      "spouse": "",
                      "children": [
                        {
                          "name": "Mr Osita Uchegbu",
                          "parent": "Mrs Uta Uchegbu",
                          "married": "",
                          "spouse": "",
                          "children": [
                          ]
                        },
                        {
                          "name": "Mr Dike Uchegbu",
                          "parent": "Mrs Uta Uchegbu",
                          "married": "",
                          "spouse": "",
                          "children": [
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Mrs Angela Uchegbu",
                      "parent": "PROF Amaechi Uchegbumarried 3 wives",
                      "married": "",
                      "spouse": "",
                      "children": [
                        {
                          "name": "Ms Ijeoma Uchegbu",
                          "parent": "Mrs Angela Uchegbu",
                          "married": "",
                          "spouse": "",
                          "children": [
                          ]
                        },
                        {
                          "name": "Mr Ikemefuna Uchegbu",
                          "parent": "Mrs Angela Uchegbu",
                          "married": "",
                          "spouse": "",
                          "children": [
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Prof Mrs Ijeoma Uchegbu",
                      "parent": "PROF Amaechi Uchegbumarried 3 wives",
                      "married": "",
                      "spouse": "",
                      "children": [
                        {
                          "name": "Ms Njideka Uchegbu",
                          "parent": "Prof Mrs Ijeoma Uchegbu",
                          "married": "",
                          "spouse": "",
                          "children": [
                            
                          ]
                        },
                        {
                          "name": "Ms Ifeyinwa Uchegbu",
                          "parent": "Prof Mrs Ijeoma Uchegbu",
                          "married": "",
                          "spouse": "",
                          "children": [
                            
                          ]
                        }
                      ]
                    },
                    {
                      "name": "",
                      "parent": "PROF Amaechi Uchegbumarried 3 wives",
                      "married": "",
                      "spouse": "",
                      "children": [
                        {
                          "name": "Mr Nnamdi Uchegbu",
                          "parent": " ",
                          "married": "",
                          "spouse": "",
                          "children": [
                          ]
                        }
                      ]
                    }
                    
                  ]
                },
                {
                  "name": "Ms Bridget Uchegbu",
                  "parent": "Mrs Adagu Uchegbu children",
                  "married": "",
                  "spouse": "",
                  "children": [
                    
                  ]
                },
                {
                  "name": "Mrs Veronica Okafor",
                  "parent": "Mrs Adagu Uchegbu children",
                  "married": "",
                  "spouse": "",
                  "children": [
                    {
                      "name": "Mr Emmanuel Okaro",
                      "parent": "Mrs Veronica Okafor",
                      "married": "",
                      "spouse": "",
                      "children": [
                      ]
                    },
                    {
                      "name": "Mr Patrick Uchegbu",
                      "parent": "Mrs Veronica Okafor",
                      "married": "",
                      "spouse": "",
                      "children": [
                      ]
                    },
                    {
                      "name": "Mr Scholar Uchegbu",
                      "parent": "Mrs Veronica Okafor",
                      "married": "",
                      "spouse": "",
                      "children": [
                      ]
                    },
                    {
                      "name": "Mr Kingsley Okafor",
                      "parent": "Mrs Veronica Okafor",
                      "married": "",
                      "spouse": "",
                      "children": [
                      ]
                    },
                    {
                      "name": "Mrs Ebele Okafor",
                      "parent": "Mrs Veronica Okafor",
                      "married": "",
                      "spouse": "",
                      "children": [
                      ]
                    },
                    {
                      "name": "Mr Charles Okafor",
                      "parent": "Mrs Veronica Okafor",
                      "married": "",
                      "spouse": "",
                      "children": [
                      ]
                    }
                  ]
                },
                {
                  "name": "Chief Sylvester Uchegbu",
                  "parent": "Mrs Adagu Uchegbu children",
                  "married": "+",
                  "spouse": "Mrs Rose Uchegbu",
                  "children": [
                    {
                      "name": "Mr Nkemakonam Uchegbu",
                      "parent": "Chief Sylvester Uchegbu",
                      "married": "",
                      "spouse": "",
                      "children": [
                        
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Mrs Rose Uchegbu chidren",
              "parent": "Chief Samuel Onwunalike UCHEGBU",
              "married": "",
              "spouse": "",
              "children": [
                
              ]
            },
            {
              "name": "Mrs Ojiugo Uchegbu children",
              "parent": "Chief Samuel Onwunalike UCHEGBU",
              "married": "",
              "spouse": "",
              "children": [
                {
                  "name": "Ms Nwamaka Uchegbu",
                  "parent": "Mrs Ojiugo Uchegbu children",
                  "married": "",
                  "spouse": "",
                  "children": [
                    {
                      "name": "Mr Izuchukwu Uchegbu",
                      "parent": "Ms Nwamaka Uchegbu",
                      "married": "",
                      "spouse": "",
                      "children": [
                        
                      ]
                    }
                  ]
                },
                {
                  "name": "Chief Nonso Uchegbu",
                  "parent": "Mrs Ojiugo Uchegbu children",
                  "married": "+",
                  "spouse": "Mrs Ndirika Uchegbu",
                  "children": [
                    {
                      "name": "Mr Chibueze Uchegbu",
                      "parent": "Chief Nonso Uchegbu",
                      "married": "",
                      "spouse": "",
                      "children": [
                        
                      ]
                    },
                    {
                      "name": "Mr Somtochukwu Uchegbu",
                      "parent": "Chief Nonso Uchegbu",
                      "married": "",
                      "spouse": "",
                      "children": [
                        
                      ]
                    }
                  ]
                },
                {
                  "name": "DR Mrs Okwuchukwu Otti",
                  "parent": "Mrs Ojiugo Uchegbu children",
                  "married": "+",
                  "spouse": "Mr Daniel Otti",
                  "children": [
                    
                  ]
                },
                {
                  "name": "Mrs Ebele Udechukwu",
                  "parent": "Mrs Ojiugo Uchegbu children",
                  "married": "+",
                  "spouse": "Mr Marshall Udechukwu",
                  "children": [
                    {
                      "name": "Mr Kenechukwu Udechukwu",
                      "parent": "Mrs Ebele Udechukwu",
                      "married": "",
                      "spouse": "",
                      "children": [
                        
                      ]
                    },
                    {
                      "name": "Mr Ikechukwu Udechukwu",
                      "parent": "Mrs Ebele Udechukwu",
                      "married": "",
                      "spouse": "",
                      "children": [
                        
                      ]
                    },
                    {
                      "name": "Mr Elochukwu Udechukwu",
                      "parent": "Mrs Ebele Udechukwu",
                      "married": "",
                      "spouse": "",
                      "children": [
                        
                      ]
                    },
                    {
                      "name": "Mr Elochukwu Udechukwu",
                      "parent": "Mrs Ebele Udechukwu",
                      "married": "",
                      "spouse": "",
                      "children": [
                        
                      ]
                    }
                  ]
                }
              ]
            }
            
          ]
        }
    ]
  }
  ]
  ;
}

// var data = [
//   {
//   "name": "Mr tanitoluwa",
//   "parent": "root",
//   "married": "+",
//   "spouse": "Mrs tanitoluwa",
//   "children": [
//     {
//       "name": "mr tani junior",
//       "parent": "Mr tanitoluwa",
//       "married": "+",
//       "spouse": "miss layla",
//       "children": []
//     },
//     {
//       "name": "mr abass",
//       "parent": "Mr tanitoluwa",
//       "married": "+",
//       "spouse": "miss simi",
//       "children": []
//     },
//     {
//       "name": "mr okon",
//       "parent": "Mr tanitoluwa",
//       "married": "+",
//       "spouse": "mrs precious",
//       "children": []
//     },
//     {
//       "name": "mr damilola",
//       "parent": "Mr tanitoluwa",
//       "married": "+",
//       "spouse": "mrs esther",
//       "children": []
//     },
//     {
//       "name": "mr dare",
//       "parent": "Mr tanitoluwa",
//       "married": "+",
//       "spouse": "mrs amani",
//       "children": []
//     }
//   ]
// }
// ];
if(data){
console.log(data[0]);
}else{
console.log("No data to display");
}
var root = d3.hierarchy(data[0]);
tree(root);

chartGroup.append("text").selectAll("tspan")
          .data(heading)
          .enter().append("tspan")
                  .attr("x","65000")
                  .attr("y","0")
                  .attr("fill","white")
                  // .attr("textLength", "1700")
                  // .attr("stroke","white")
                  // // .attr("stroke-width","2")
                  // .attr("text-anchor", "middle")
                  // .attr("dominant-baseline","middle")
                  .attr("font-size","2000")
                  .text(heading);


chartGroup.selectAll("path")
          .data(root.descendants().slice(1))
          .enter().append("path")
                  .attr("class","link")
                  .attr("stroke","white")
                  .attr("stroke-width","122px")
                  .attr("d",function(d){ return "M"+d.x+","+d.y+"L"+d.x+","+(d.parent.y+d.y)/2+" "+d.parent.x+","+(d.y+d.parent.y)/2+" "+d.parent.x+","+d.parent.y; })
                  ;

chartGroup.selectAll("rect.first")
          .data(root.descendants())
          .enter().append("rect")
                  .attr("height","900")
                  // .attr("border-radius","90")
                  // .attr("stroke","red")
                  .attr("width","3000")
                  .attr("fill","white")
                  .attr("x",function(d){ return d.x-1300; })
                  .attr("y",function(d){ return d.y+200;});

chartGroup.selectAll("rect.second")
          .data(root.descendants())
          .enter().append("rect")
                  .attr("height","300")
                  .attr("width","2600")
                  .attr("fill","#36441F")
                  .attr("stroke", "white")
                  .attr("stroke-width", "90")
                  .attr("x",function(d){ return d.x-1080; })
                  .attr("y",function(d){ return d.y+270;});
          

chartGroup.append("text").selectAll("tspan.first")
          .data(root.descendants())
          .enter().append("tspan")
                  .attr("x",function(d){ return d.x+50; })
                  .attr("y",function(d){ return d.y+450;})
                  .attr("fill","white")
                  .attr("textLength", "1700")
                  .attr("lengthAdjust", "spacingAndGlyphs")
                  // .attr("stroke","white")
                  // .attr("stroke-width","2")
                  .attr("text-anchor", "middle")
                  .attr("dominant-baseline","middle")
                  .attr("font-size","150")
                  .text(function(d){return d.data.name; });

chartGroup.append("text").selectAll("tspan.second")
                  .data(root.descendants())
                  .enter().append("tspan")
                          .attr("x",function(d){ return d.x; })
                          .attr("y",function(d){ return d.y+700;})
                          .attr("fill","black")
                          .attr("textLength", "200")
                          .attr("lengthAdjust", "spacingAndGlyphs")
                          // .attr("stroke","white")
                          // .attr("stroke-width","2")
                          .attr("text-anchor", "middle")
                          .attr("dominant-baseline","middle")
                          .attr("font-size","150")
                          .text(function(d){return d.data.married; });

chartGroup.append("text").selectAll("tspan.third")
                  .data(root.descendants())
                  .enter().append("tspan")
                          .attr("x",function(d){ return d.x+200; })
                          .attr("y",function(d){ return d.y+900;})
                          .attr("fill","black")
                          .attr("textLength", "2500")
                          .attr("lengthAdjust", "spacingAndGlyphs")
                          // .attr("stroke","white")
                          // .attr("stroke-width","2")
                          .attr("text-anchor", "middle")
                          .attr("dominant-baseline","middle")
                          .attr("font-size","190")
                          .text(function(d){return d.data.spouse; });
            

