function AdjustNegativeDifference(difference) {
    if (difference.years < 0) {
        console.error("Invalid date provided");
        return false;
    } else if (difference.months < 0) {
        difference.years -= 1;
        difference.months += 12;
        return AdjustNegativeDifference(difference);
    } else if (difference.days < 0) {
        difference.months -= 1;
        difference.days += new Date(difference.years, difference.months, 0).getDate();
        return AdjustNegativeDifference(difference);
    } else if (difference.hours < 0) {
        difference.days -= 1;
        difference.hours += 24;
        return AdjustNegativeDifference(difference);
    } else if (difference.minutes < 0) {
        difference.hours -= 1;
        difference.minutes += 60;
        return AdjustNegativeDifference(difference);
    } else if (difference.seconds < 0) {
        difference.minutes -= 1;
        difference.seconds += 60;
        return AdjustNegativeDifference(difference);
    } else if (difference.milliseconds < 0) {
        difference.seconds -= 1;
        difference.milliseconds += 1000;
        return AdjustNegativeDifference(difference);
    }
    return true;
}

function Difference(date1, date2) {
    date1 = new Date(date1);
    date2 = new Date(date2);
    let units = {
        years: date2.getFullYear() - date1.getFullYear(),
        months: date2.getMonth() - date1.getMonth(),
        days: date2.getDate() - date1.getDate(),
        hours: date2.getHours() - date1.getHours(),
        minutes: date2.getMinutes() - date1.getMinutes(),
        seconds: date2.getSeconds() - date1.getSeconds(),
        milliseconds: date2.getMilliseconds() - date1.getMilliseconds(),
    }
    if (AdjustNegativeDifference(units)) {
        return units;
    }
}

function IsLeapYear(year) {
    if ((year % 4 != 0) || (year % 100 == 0 && year % 400 != 0)) return false;
    return true;
}

function FromTimestamp(timestamp1, timestamp2) {
    return Date.parse(new Date(timestamp2)) - Date.parse(new Date(timestamp1));
}

module.exports = { Difference, FromTimestamp, IsLeapYear }