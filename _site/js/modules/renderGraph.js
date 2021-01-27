const renderGraph = {
    barz: (data1, data2, data3) => {
        return new Promise((resolve, reject) => {
            console.log("render the yeets")
            console.log(data1[0])
            console.log(data2[0])
            console.log(data3[0])

            d3
                .select(".target") // select the elements that have the class 'target'
                .style("stroke-width", 8) // change their style: stroke width is not equal to 8 pixels

            resolve(data1, data2, data3)
            // return  cleanData1, cleanData2



        })
    }
};

export {
    renderGraph
}