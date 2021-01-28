const renderGraph = {
    barz: async (allData) => {

        console.log("render the yeets")
        console.log(allData)
        // const amount = yeet.length

        function update(data) {
            const keys = Object.keys(data)
            const values = Object.values(data)
            const entries = Object.entries(data)
            //set domain for the x axis
            xScale.domain(keys);
            //set domain for y axis
            yScale.domain([0, d3.max(values)]).nice();

            //get the width of each bar 
            var barWidth = width / entries.length;

            //select all bars on the graph, take them out, and exit the previous data set. 
            //then you can add/enter the new data set
            var bars = chart.selectAll(".bar")
                .remove()
                .exit()
                .data(values)
            //now actually give each rectangle the corresponding data
            bars.enter()
                .append("rect")
                .attr("class", "bar")
                .attr("x", function (d, i) {
                    return i * barWidth + 1
                })
                .attr("y", yScale)
                .attr("height", function (d) {
                    return height - yScale(d);
                })
                .attr("width", barWidth - 1)
                .attr("fill", function () {
                    if (data === allData.start) {
                        return "rgb(219, 91, 101)";
                    } else if (data === allData.end) {
                        return "rgb(96, 160, 212)";
                    } else {
                        return "rgb(147,112,219)";
                    }
                });
            //left axis
            chart.select('.y')
                .call(yAxis)
            //bottom axis
            chart.select('.xAxis')
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis)
                .selectAll("text")
                .style("text-anchor", "end")
                .attr("dx", "-.8em")
                .attr("dy", ".15em")
                .attr("transform", function (d) {
                    return "rotate(-65)";
                });

        } //end update

        //functions for toggling between data
        function change(value) {
            if (value === 'start')
                update(allData.start)
            else if (value === 'end')
                update(allData.end)
            else update(allData.both)
        }

        //set up chart
        var margin = {
            top: 20,
            right: 20,
            bottom: 95,
            left: 50
        };
        var width = 800;
        var height = 500;

        var chart = d3.select(".chart")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var xScale = d3.scaleBand()
            .range([0, width]);

        var yScale = d3.scaleLinear()
            .nice()
            .range([height, 0]);

        var xAxis = d3.axisBottom(xScale);
        var yAxis = d3.axisLeft(yScale);

        //set up axes
        //left axis
        chart.append("g")
            .attr("class", "y axis")
            .call(yAxis)

        //bottom axis
        chart.append("g")
            .attr("class", "xAxis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function (d) {
                return "rotate(-65)";
            });

        //add labels
        chart
            .append("text")
            .attr("transform", "translate(-35," + (height + margin.bottom) / 2 + ") rotate(-90)")
            .style("font", "18px sans-serif")
            .text("amount of conflicting parking spots");

        chart
            .append("text")
            .attr("transform", "translate(" + (width / 2) + "," + (height + margin.bottom - 5) + ")")
            .attr('text-anchor', 'middle')
            .style("font", "18px sans-serif")
            .text("Cities/Managers");

        d3.select('.radio').selectAll('input').on('change', (_, i, list) =>
            change(list[i].value)
        );

        update(allData.both);
        return allData
    }
}

export {
    renderGraph
}