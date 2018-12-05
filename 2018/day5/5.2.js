module.exports = input => {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let min = Infinity
    letters.map(letter => {
        const re = new RegExp(`[${letter}${letter.toUpperCase()}]`, 'g')
        const inputWithout = input.replace(re, '')
        const reactedInput = react(inputWithout)
        if (reactedInput < min) min = reactedInput
    })
    return min
}

const react = input => {
    let index = 0
    input = input.split('')
    while (index < input.length - 1) {
        if (input[index].toLowerCase() === input[index + 1].toLowerCase() && input[index] !== input[index + 1]) {
            input.splice(index, 2)
            index > 0 ? index-- : index
        } else {
            index++
        }
    }
    return input.length
}