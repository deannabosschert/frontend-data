const renderGraph = {
    barz: (data) => {
        return new Promise((resolve, reject) => {
            console.log("render the yeets")
            console.log(data)
            // console.log(data.parkingOpen[0])
            // console.log(data.parkingTijdvak[0])
            // console.log(data.gebiedRegeling[0])

            d3
                .select(".target") // select the elements that have the class 'target'
                .style("stroke-width", 8) // change their style: stroke width is not equal to 8 pixels

            resolve(data)
            // return  cleanData1, cleanData2



        })
    }
}

export {
    renderGraph
}