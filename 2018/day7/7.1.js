const {uniq, difference, forEach, sortBy, omit, includes} = require('lodash')

module.exports = input => {
    let steps = {}, before = [], after = []
    input.map(line => {
        let [, a, b] = line.match(/[A-Z]/g)
        before.push(a)
        after.push(b)
        steps[b] ? steps[b].push(a) : steps[b] = [a]
    })
    before = uniq(before)
    after = uniq(after)

    let beginningSteps = sortBy(difference(before, after)), lastStep = difference(after, before)[0]
    let nextStep = beginningSteps.shift()
    beginningSteps.forEach(val => steps[val] = [])
    
    let order = nextStep
    while (nextStep !== lastStep) {
        let possibleNextSteps = []
        forEach(steps, (step, key) => {
            if (includes(step, nextStep)) step.splice(step.indexOf(nextStep), 1)
            if (step.length === 0) possibleNextSteps.push(key)
        })
        nextStep = sortBy(possibleNextSteps).shift()
        order += nextStep
        steps = omit(steps, nextStep)
    }

    return order
}