const timeSince = require("../main")

console.log(timeSince.FromTimestamp("2000-06-01", "2023-01-02")) // Returns difference in timestamp
console.log(timeSince.FromTimestamp("1970-01-01", Date.now()))