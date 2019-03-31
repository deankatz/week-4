


// •	If the complaint type is...
// o	"finance", the function should return console.log("Money doesn't grow on trees, you know.")
// o	"weather", the function should return console.log("It is the way of nature. Not much to be done.")
// o	"emotions", the function should return console.log("It'll pass, as all things do, with time.)"
// •	This function should use the FINANCE, WEATHER, and EMOTIONS properties from the consts module
// o	In other words, you should not hard-code: if(complaint.type === "finance")

const handle = require('./consts')
const handleComplaints = function (complaint) {
   
    if (complaint.type == handle.FINANCE) {
        console.log("Money doesn't grow on trees, you know.")
    }
    if (complaint.type == handle.WEATHER) {
        console.log("It is the way of nature. Not much to be done.")
    }
    if (complaint.type == handle.EMOTIONS) {
        console.log("It'll pass, as all things do, with time.")
    }
}
module.exports = handleComplaints
