//Removing Palindrome Subsequences

//there are 3 situations: 0, 1, 2
//0: there is no string
//1: it is a palindrome, so removing takes 1 step
//2: it takes 2 steps, removing all a, then all b
var removePalindromeSub = function(s) {
  if (s.length === 0) {
      return 0
  } else {
      if (s === s.split("").reverse().join("")) {
          return 1
      } else {
          return 2
      }
  }
};

//Merge 2 Sorted Linked List

//create an empty starting point to point to either l1 || l2
//compare, point, next, repeat til one of them empties
//then point to the excess
var mergeTwoLists = function(l1, l2) {
  let result = new ListNode()
  let head = result

    while (l1 && l2) {
        if (l1.val < l2.val) {
            result.next = l1
            l1 = l1.next
        } else {
            result.next = l2
            l2 = l2.next
        }
        result = result.next
    }
    result.next = l1 || l2
    return head.next
};

//Find All Numbers Disappeared in an Array

//loop through from array.length and check from index of 1 to n
//if it doesnt exist, add to array
var findDisappearedNumbers = function(nums) {
  let result = []
  for (let i = 0; i < nums.length; i++) {
      if (nums.indexOf(i + 1) < 0) {
          result.push(i + 1)
      }
  }
  return result
};

//Best Time to Buy and Sell Stock

//brute force method
var maxProfit = function(prices) {
  let maximum = 0
  for (let i = 0; i < prices.length; i++) {
      for (let j = i + 1; j < prices.length; j++) {
          let difference = prices[j] - prices[i]
          if (difference >= maximum) {
              maximum = difference
          }
      }
  }
  return maximum
};

//single loop method
var maxProfit = function(prices) {
  let min = prices[0]
  let profit = 0
  for (let i = 1; i < prices.length; i++) {
      min = Math.min(prices[i], min)
      profit = Math.max(profit, prices[i] - min)
  }
  return profit
};