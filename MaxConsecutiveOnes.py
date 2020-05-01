class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        count_total = 0
        count_current = 0
        for num in nums:
            if num == 1:
                count_current += 1
            else:
                if count_current > count_total:
                    count_total = count_current
                count_current = 0
        return max(count_total, count_current)
