package y2024.day01

class day01 {

    fun part1(leftList: List<Int>, rightList: List<Int>): Int {
        val sortedLeftList = leftList.sortedDescending()
        val sortedRightList = rightList.sortedDescending()
        val distances = mutableListOf<Int>()

        for ((index, leftNum) in sortedLeftList.withIndex()) {
            val rightNum = sortedRightList[index]
            val diff = Math.abs(rightNum - leftNum)

            distances.add(diff)
        }

        val totalDistance = distances.sum()

        return totalDistance
    }

    fun part2(leftList: List<Int>, rightList: List<Int>): Int {
        val sortedLeftList = leftList.sortedDescending()
        val sortedRightList = rightList.sortedDescending()
        val distances = mutableListOf<Int>()
        val mappedOccurences = hashMapOf<Int, Int>()

        for (num in sortedLeftList) {
            mappedOccurences[num] = 0
        }

        for (num in sortedRightList) {
            if (mappedOccurences.containsKey(num)) {
                mappedOccurences[num] = mappedOccurences[num]!! + 1
            }
        }

        var totalSum = 0

        for (num in sortedLeftList) {
            totalSum += num.times(mappedOccurences[num]!!)
        }

        return totalSum
    }
}