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
    let workers = []
    for (let i = 0; i < 5; i++) {
        workers.push({currentStep: null, timeLeft: 0})
    }
    for (let i = 0; i < Math.min(beginningSteps.length, workers.length); i++) {
        workers[i].currentStep = beginningSteps[i]
        workers[i].timeLeft = beginningSteps[i].charCodeAt(0) - 4
    }

    let time = 0
    let order = ''
    let possibleNextSteps = []
    while (!includes(order, lastStep)) {
        workers.forEach(worker => {
            if (worker.currentStep) {
                worker.timeLeft--
                if (worker.timeLeft === 0) {
                    order += worker.currentStep
                    forEach(steps, (step, key) => {
                        if (includes(step, worker.currentStep)) step.splice(step.indexOf(worker.currentStep), 1)
                        if (step.length === 0 && !includes(possibleNextSteps, key)) possibleNextSteps.push(key)
                    })
                    if (possibleNextSteps.length > 0) {
                        possibleNextSteps = sortBy(possibleNextSteps)
                        let nextStep = possibleNextSteps.shift()
                        worker.currentStep = nextStep
                        worker.timeLeft = nextStep.charCodeAt(0) - 4
                        steps = omit(steps, worker.currentStep)
                    } else {
                        worker.currentStep = null
                    }
                }
            } else if (possibleNextSteps.length > 0) {
                possibleNextSteps = sortBy(possibleNextSteps)
                let nextStep = possibleNextSteps.shift()
                worker.currentStep = nextStep
                worker.timeLeft = nextStep.charCodeAt(0) - 4
                steps = omit(steps, worker.currentStep)
            }
        })
        time++
    }
    return time
}