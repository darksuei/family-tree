var height = 29000;
var width = 150000; 

var margin = {left: 50,right:50,top:2000,bottom:0};

var tree = d3.tree().size([width,height]);

var svg = d3.select('body').append('svg').attr('width',width - 50).attr('height',height +4000);
var chartGroup = svg.append('g').attr('transform','translate('+margin.left+','+margin.top+')');

var mainfunc = async function(){
        let x = await fetchData();
        var heading = gdata.treeDetails.name + "'s family tree"
        heading = heading.toUpperCase()
        let mdata = gdata.treeDetails;
        let data =[]
        data.push(mdata)
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
                        
}

mainfunc();