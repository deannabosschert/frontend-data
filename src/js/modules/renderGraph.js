const renderGraph = {
    barz: (finalData) => {
        const allData = finalData
        return new Promise((resolve, reject) => {
            console.log("render the yeets")
            console.log(allData)
            const startAmount = allData.start.length
            const endAmount = allData.end.length
            console.log(startAmount)

            console.log(endAmount)

            const dataAmount = [{
                timeFrame: "Start Time",
                amount: startAmount
            }, {
                timeFrame: "End Time",
                amount: endAmount
            }]

//             //set up data
// var bothData = [
//     {
//       "viewer_gender": "FEMALE",
//       "viewer_age": "AGE_13_17",
//       "channel_display_name": "syncopika",
//       "channel_id": "T2NUI3KLGK6sDILFbzUZZg",
//       "views": "3.3",
//       "watch_time_minutes": "2.8"
//     },
//     {
//       "viewer_gender": "MALE",
//       "viewer_age": "AGE_13_17",
//       "channel_display_name": "syncopika",
//       "channel_id": "T2NUI3KLGK6sDILFbzUZZg",
//       "views": "12.8",
//       "watch_time_minutes": "13.5"
//     },
//     {
//       "viewer_gender": "FEMALE",
//       "viewer_age": "AGE_18_24",
//       "channel_display_name": "syncopika",
//       "channel_id": "T2NUI3KLGK6sDILFbzUZZg",
//       "views": "7.1",
//       "watch_time_minutes": "6.6"
//     },
//     {
//       "viewer_gender": "MALE",
//       "viewer_age": "AGE_18_24",
//       "channel_display_name": "syncopika",
//       "channel_id": "T2NUI3KLGK6sDILFbzUZZg",
//       "views": "37.1",
//       "watch_time_minutes": "35.8"
//     },
//     {
//       "viewer_gender": "FEMALE",
//       "viewer_age": "AGE_25_34",
//       "channel_display_name": "syncopika",
//       "channel_id": "T2NUI3KLGK6sDILFbzUZZg",
//       "views": "2.7",
//       "watch_time_minutes": "3.9"
//     },
//     {
//       "viewer_gender": "MALE",
//       "viewer_age": "AGE_25_34",
//       "channel_display_name": "syncopika",
//       "channel_id": "T2NUI3KLGK6sDILFbzUZZg",
//       "views": "23.5",
//       "watch_time_minutes": "24.7"
//     },
//     {
//       "viewer_gender": "FEMALE",
//       "viewer_age": "AGE_35_44",
//       "channel_display_name": "syncopika",
//       "channel_id": "T2NUI3KLGK6sDILFbzUZZg",
//       "views": "1.0",
//       "watch_time_minutes": "0.8"
//     },
//     {
//       "viewer_gender": "MALE",
//       "viewer_age": "AGE_35_44",
//       "channel_display_name": "syncopika",
//       "channel_id": "T2NUI3KLGK6sDILFbzUZZg",
//       "views": "6.4",
//       "watch_time_minutes": "5.0"
//     },
//     {
//       "viewer_gender": "FEMALE",
//       "viewer_age": "AGE_45_54",
//       "channel_display_name": "syncopika",
//       "channel_id": "T2NUI3KLGK6sDILFbzUZZg",
//       "views": "0.7",
//       "watch_time_minutes": "1.3"
//     },
//     {
//       "viewer_gender": "MALE",
//       "viewer_age": "AGE_45_54",
//       "channel_display_name": "syncopika",
//       "channel_id": "T2NUI3KLGK6sDILFbzUZZg",
//       "views": "3.3",
//       "watch_time_minutes": "3.4"
//     },
//     {
//       "viewer_gender": "FEMALE",
//       "viewer_age": "AGE_55_64",
//       "channel_display_name": "syncopika",
//       "channel_id": "T2NUI3KLGK6sDILFbzUZZg",
//       "views": "0.1",
//       "watch_time_minutes": "0.1"
//     },
//     {
//       "viewer_gender": "MALE",
//       "viewer_age": "AGE_55_64",
//       "channel_display_name": "syncopika",
//       "channel_id": "T2NUI3KLGK6sDILFbzUZZg",
//       "views": "0.8",
//       "watch_time_minutes": "0.7"
//     },
//     {
//       "viewer_gender": "FEMALE",
//       "viewer_age": "AGE_65_",
//       "channel_display_name": "syncopika",
//       "channel_id": "T2NUI3KLGK6sDILFbzUZZg",
//       "views": "0.2",
//       "watch_time_minutes": "0.2"
//     },
//     {
//       "viewer_gender": "MALE",
//       "viewer_age": "AGE_65_",
//       "channel_display_name": "syncopika",
//       "channel_id": "T2NUI3KLGK6sDILFbzUZZg",
//       "views": "1.1",
//       "watch_time_minutes": "1.3"
//     }
//   ];
  
//   var maleData = [];
//   var femaleData = [];
  
//   for(var i = 0; i < bothData.length; i++){
//       if(bothData[i]["viewer_gender"] === "MALE"){
//           maleData.push(bothData[i]);
//       }else{
//           femaleData.push(bothData[i]);
//       }
//   }

//    //use bothData to begin with
//    update(bothData);



  
        //     var svg = d3.select("svg"),
        //     margin = {top: 20, right: 20, bottom: 30, left: 40},
        //     width = +svg.attr("width") - margin.left - margin.right,
        //     height = +svg.attr("height") - margin.top - margin.bottom;
        
        // var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
        //     y = d3.scaleLinear().rangeRound([height, 0]);
        
        // var g = svg.append("g")
        //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        
        //     var tsv = dataAmount
        //   // filter the data based on the inital value
        //   var data = tsv.filter(function(d) { 
        //     var sq = d3.select("#filter").property("value");
        //     return d.group === sq;
        //   });
        
        //   // set the domains of the axes
        //   x.domain(data.map(function(d) { return d.letter; }));
        //   y.domain([0, d3.max(data, function(d) { return d.frequency; })]);
        
        //   // add the svg elements
        //   g.append("g")
        //       .attr("class", "axis axis--x")
        //       .attr("transform", "translate(0," + height + ")")
        //       .call(d3.axisBottom(x));
        
        //   g.append("g")
        //       .attr("class", "axis axis--y")
        //       .call(d3.axisLeft(y).ticks(10, "%"))
        //     .append("text")
        //       .attr("transform", "rotate(-90)")
        //       .attr("y", 6)
        //       .attr("dy", "0.71em")
        //       .attr("text-anchor", "end")
        //       .text("Frequency");
        
        //   // create the bars
        //   g.selectAll(".bar")
        //     .data(data)
        //     .enter().append("rect")
        //       .attr("class", "bar")
        //       .attr("x", function(d) { return x(d.letter); })
        //       .attr("y", function(d) { return y(d.frequency); })
        //       .attr("width", x.bandwidth())
        //       .attr("height", function(d) { return height - y(d.frequency); });
        
        //   // add a change event handler 
        //   d3.select("#filter").on("change", function() {
        //       applyFilter(this.value);
        //     });
        
        
        //   // call this whenever the filter changes
        //   function applyFilter(value) {
        //     // filter the data
        //     var data = tsv.filter(function(d) {return d.group === value;})
        
        //     // update the bars
        //     d3.selectAll(".bar")
        //       .data(data)
        //       .transition().duration(1000)
        //       .attr("x", function(d) { return x(d.letter); })
        //       .attr("y", function(d) { return y(d.frequency); })
        //       .attr("height", function(d) { return height - y(d.frequency); });
        
        //   }
        
        
            resolve(allData)
        })
    }
}

export {
    renderGraph
}