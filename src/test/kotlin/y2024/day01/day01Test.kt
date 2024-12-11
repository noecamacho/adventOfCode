package y2024.day01

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.TestInstance

import java.nio.file.Files
import java.nio.file.Paths

import kotlin.test.Test

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class day01Test {

    private val leftList = mutableListOf<Int>()
    private val rightList = mutableListOf<Int>()

    @BeforeAll
    fun setup() {
        val lines = Files.readAllLines(Paths.get("src/main/resources/inputs/day01.txt"))

        for (line in lines) {
            val parts = line.trim().split("\\s+".toRegex())
            val leftNumber = parts[0].toInt()
            val rightNumber = parts[1].toInt()

            leftList.add(leftNumber)
            rightList.add(rightNumber)
        }
    }

    @Test
    fun testPart1() {
        val day = day01()
        val leftInputExample = listOf(3, 4, 2, 1, 3, 3)
        val rightInputExample = listOf(4, 3, 5, 3, 9, 3)

        assertEquals(11, day.part1(leftInputExample, rightInputExample))
        assertEquals(2000468, day.part1(leftList, rightList))
    }

    @Test
    fun testPart2() {
        val day = day01()
        val leftInputExample = listOf(3, 4, 2, 1, 3, 3)
        val rightInputExample = listOf(4, 3, 5, 3, 9, 3)

        assertEquals(31, day.part2(leftInputExample, rightInputExample))
        assertEquals(18567089, day.part2(leftList, rightList))
    }



}