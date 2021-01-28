const renderGraph = {
    barz: async (allData) => {
        console.log("render the yeets")
        console.log(allData)

        function update(data) {
            const keys = Object.keys(data)
            const values = Object.values(data)
            const entries = Object.entries(data)

            xScale.domain(keys) //x-as domein
            yScale.domain([0, d3.max(values)]).nice() //y-as domein, .nice voor die mooie afronding en whitespace
            let barWidth = width / entries.length // width per bar (dus; totale breedte gedeeld door aantal steden = width want het moet wel passen)

            // alle bars selecteren, eruit trekken en een evt vorige dataset eruit gooien
            // daarna de dataset allData erin
            let bars = chart.selectAll(".bar")
                .remove()
                .exit()
                .data(values)

            // data aan de bars binden
            bars.enter()
                .append("rect")
                .attr("class", "bar")
                .attr("x", function (d, i) {
                    return i * barWidth + 1
                })
                .attr("y", yScale)
                .attr("height", function (d) {
                    return height - yScale(d)
                })
                .attr("width", barWidth - 1)
                .attr("fill", function () { // vul de bars met de juiste kleuren bij de data
                    if (data === allData.start) {
                        return "rgb(219, 91, 101)"
                    } else if (data === allData.end) {
                        return "rgb(96, 160, 212)"
                    } else {
                        return "rgb(147,112,219)"
                    }
                })
            chart.select('.y') //linkeras
                .call(yAxis)

            chart.select('.xAxis') //onderste as (x)
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis)
                .selectAll("text")
                .style("text-anchor", "end")
                .attr("dx", "-.8em")
                .attr("dy", ".15em")
                .attr("transform", function (d) {
                    return "rotate(-65)"
                })

        } //dat was 'm voor update

        // toggelen tussen de datasoorten
        function change(value) {
            if (value === 'start')
                update(allData.start)
            else if (value === 'end')
                update(allData.end)
            else update(allData.both)
        }

        //chartdimensies
        let margin = {
            top: 20,
            right: 20,
            bottom: 95,
            left: 50
        }
        let width = 800
        let height = 500

        let chart = d3.select(".chart")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

        let xScale = d3.scaleBand()
            .range([0, width]) //stel de range in, beginnende bij 0

        let yScale = d3.scaleLinear()
            .nice() //mooimaak
            .range([height, 0]) //stel de range in, beginnende bij 0

        let xAxis = d3.axisBottom(xScale)
        let yAxis = d3.axisLeft(yScale)

        chart.append("g") // linkeras
            .attr("class", "y axis")
            .call(yAxis)

        chart.append("g") //onderste as
            .attr("class", "xAxis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function (d) {
                return "rotate(-65)"
            })

        chart //label toevoegen: y-as
            .append("text")
            .attr("transform", "translate(-35," + (height + margin.bottom) / 2 + ") rotate(-90)")
            .style("font", "18px sans-serif")
            .text("amount of conflicting parking spots")

        chart //label toevoegen: x-as
            .append("text")
            .attr("transform", "translate(" + (width / 2) + "," + (height + margin.bottom - 5) + ")")
            .attr('text-anchor', 'middle')
            .style("font", "18px sans-serif")
            .text("Cities/Managers")

        d3.select('.radio').selectAll('input').on('change', (_, i, list) => //basically een eventlistener
            change(list[i].value)
        )

        update(allData.both)
        return allData
    }
}

export {
    renderGraph
}