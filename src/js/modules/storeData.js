const storeData = {
  set (data) {
    console.log(data)
    console.log("adding rdwData to localStorage")
    localStorage.setItem("rdwData", JSON.stringify(data))
    return data
  },
  get () {
    console.log("getting rdwData from localStorage")
    const rdwData = JSON.parse(localStorage.getItem("rdwData"))
    return rdwData
  }
}
// async function filterData(data) {
//   const photoset = {
//     owner: data.photoset.ownername,
//     albumname: data.photoset.title,
//     amount: data.photoset.total,
//     photos: data.photoset.photo.map(data => {
//       const tags = data.tags.split(' ')
//       const mapTags = tags.map(tag => {
//         return {
//           tag: tag
//         }
//       })
//       return {
//         id: data.id,
//         url_small: data.url_s,
//         url_large: data.url_l,
//         title: data.title,
//         tags: mapTags,
//         date: data.datetaken
//       }
//     })
//   }


//   return photoset
// }

export {
  storeData
}