module.exports = input => {
    let pastFrequencies = {}, currentFrequency = 0
    while (true) {
        for (let i = 0; i < input.length; i++) {
            currentFrequency += parseInt(input[i])
            if (pastFrequencies[currentFrequency]) return currentFrequency
            pastFrequencies[currentFrequency] = true
        }
    }
}