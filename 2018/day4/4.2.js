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
    
    _.forEach(guardData, (guard, guardNum) => {
        let minsOfHour = Array(60).fill(0)
        for (let i = 0; i < guard.fellAsleep.length; i++) {
            for (let j = parseInt(guard.fellAsleep[i]); j < parseInt(guard.wokeUp[i]); j++) {
                minsOfHour[j]++
            }
        }
       guardData[guardNum] = _.reduce(minsOfHour, (max, val, key) => val > max.maxMins ? {maxMins: val, maxKey: key} : max, {maxMins: 0})
    })
    
    let {maxKey, guardNum} = _.reduce(guardData, (acc, guard, key) => guard.maxMins > acc.maxMins ? {...guard, guardNum: key} : acc, {maxMins: 0})
    
    return maxKey * parseInt(guardNum)
}