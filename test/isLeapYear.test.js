const timeSince = require("../main")

let years = [2049, 2000, 1970, 2730, 1900, 1898, 2015]
years.forEach(year => {
    console.log(timeSince.IsLeapYear(year)) // Returns whether year is leap or not
})