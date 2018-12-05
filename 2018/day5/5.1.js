module.exports = input => {
    let index = 0
    input = input.split('')
    while (index < input.length - 1) {
        if (input[index].toLowerCase() === input[index + 1].toLowerCase() && input[index] !== input[index + 1]) {
            input.splice(index, 2)
            index--
        } else {
            index++
        }
    }
    return input.length
}