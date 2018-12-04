const _ = require('lodash')

module.exports = input => {
    const guardNumRegex = /#(\d+)/
    const minRegex = /:(\d\d)]\s[fw]/

    let sortedInput = _.sortBy(input)
    let guardData = {}

    for (let i = 0; i < sortedInput.length;) {
        let [, guardNum] = sortedInput[i++].match(guardNumRegex)
        if (!guardData[guardNum]) guardData[guardNum] = {sleepTime: 0, fellAsleep: [], wokeUp: []}
        while (i < (sortedInput.length - 1) && sortedInput[i].match(minRegex)) {
            let [, sleep] = sortedInput[i++].match(minRegex)
            let [, wake] = sortedInput[i++].match(minRegex)
            guardData[guardNum].sleepTime += wake - sleep
            guardData[guardNum].fellAsleep.push(sleep)
            guardData[guardNum].wokeUp.push(wake)
        }
    }

    let sleepiestGuard = _.reduce(guardData, (max, val, key) => val.sleepTime > max.sleepTime ? {...val, guardNum: key} : max, {sleepTime: 0})

    let minsOfHour = Array(60).fill(0)
    for (let i = 0; i < sleepiestGuard.fellAsleep.length; i++) {
        for (let j = parseInt(sleepiestGuard.fellAsleep[i]); j < parseInt(sleepiestGuard.wokeUp[i]); j++) {
            minsOfHour[j]++
        }
    }
    let {maxKey} = _.reduce(minsOfHour, (max, val, key) => val > max.maxMins ? {maxMins: val, maxKey: key} : max, {maxMins: 0})

    return maxKey * sleepiestGuard.guardNum
}
