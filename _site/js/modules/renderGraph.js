const renderGraph = {
    barz: () => {
        return new Promise((resolve, reject) => {
            console.log("render the yeets")
            d3
                .select(".target") // select the elements that have the class 'target'
                .style("stroke-width", 8) // change their style: stroke width is not equal to 8 pixels

            resolve('yeet')
            return 'teey'

        })
    }
};

export {
    renderGraph
}