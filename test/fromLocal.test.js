const timeSince = require("../main")

let date1 = "2000-06-01";
let date2 = "2023-01-02";

let difference = timeSince.FromLocal(date1, date2)
console.log(`Time difference between ${date1} and ${date2} in local time is: ${difference.years} year/s, ${difference.months} month/s, ${difference.days} day/s, ${difference.hours} hour/s, ${difference.minutes} minute/s, ${difference.seconds} second/s and ${difference.milliseconds} millisecond/s.`)