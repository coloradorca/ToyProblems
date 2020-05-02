
# Leetcode Jewels and Stones

# You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

# The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

# Example 1:

# Input: J = "aA", S = "aAAbbbb"
# Output: 3
# Example 2:

# Input: J = "z", S = "ZZ"
# Output: 0
# Note:

# S and J will consist of letters and have length at most 50.
# The characters in J are distinct.


class Solution:
    def numJewelsInStones(self, J: str, S: str) -> int:
        '''
        Returns the amount of Jewels in Stones

        Parameters:
            J : case sensative string of Jewels which are unique
            S : stones which could be jewels

        Return :
            the number of jewels in the stones string
        '''
        count = 0
        for stones in S:
            for jewels in J:
                if stones == jewels:
                    count += 1
        return count


solution = Solution()

print(solution.numJewelsInStones('aA', 'aAAZZBBB'))
