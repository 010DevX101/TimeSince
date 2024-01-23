# TimeSince
JavaScript NPM package to calculate the time difference between two dates.

## Usage
To get the time difference of two dates in the supported time formats, use the `timeSince.Difference` method:
```js
const timeSince = require("@devx./timesince")
console.log(timeSince.Difference("2000-06-01", "2023-01-02")) // ISO dates
console.log(timeSince.Difference("1974-02-04 2:37:49:10 PM", "2021-02-04 4:37:38:40 PM")) // ISO dates with time format
console.log(timeSince.Difference("06/28/1987", "07/26/2024")) // MM/DD/YYYY dates
console.log(timeSince.Difference("06/28/1987 2:47:29:24 AM", "07/26/2024 7:29:47:12 PM")) // MM/DD/YYYY dates with time format
console.log(timeSince.Difference("01/01/1970", Date.now())) // Date.now() to calculate differences of time
console.log(timeSince.Difference("1970-01-01 12:00:00:00 AM", "09/28/1997 2:38 PM")) // Use ISO and MM/DD/YYYY times interchangeably
```

You can also get the difference between two dates in a timestamp format:
```js
const timeSince = require("@devx./timesince")
console.log(timeSince.FromTimestamp("2000-06-01", "2023-01-02")) // Returns difference in timestamp
console.log(timeSince.FromTimestamp("1970-01-01", Date.now()))
```

Check out the `tests` folder for extra features.

## Contribute
I made this project for fun as I know there are many NPM packages similar to this, if you want to contribute code, submit a pull request.