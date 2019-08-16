// const sumator = (a, b) =>{
//     return a+b
// }

// module.exports = sumator;
const moment = require("moment")
const date = () =>{
    console.log(moment('2019-15-08', 'YYYY-DD-MM').format('MMM Do YY'));
}

module.exports = date;