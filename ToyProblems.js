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


//Climbing Stairs

// 0, 1, 2, 3, 5, 8 , etc...... solution[i] = sum of previous two
var climbStairs = function(n) {
  var solutions = [0, 1, 2]
  for (i = 3; i <= n; i++) {
      solutions[i] = solutions[i - 1] + solutions[i - 2]
  }
  return solutions[n]
};

//Diameter of Binary Tree


//Use Math.max to constantly update update max values for left and right, to compare and update max diameter
var diameterOfBinaryTree = function(root) {
  let diameter = 0
  const depthFirstSearch = (node) => {
      if (!node) {
          return 0
      }
      const left = depthFirstSearch(node.left)
      const right = depthFirstSearch(node.right)
      diameter = Math.max(diameter, left + right)
      return 1 + Math.max(left, right)
  }
  depthFirstSearch(root)
  return diameter
};

//Reverse String

//Use placeholder to swap the front and back of string, progressing til you get to the center
var reverseString = function(s) {
  let front = 0
  let back = s.length - 1
  while (back > front) {
      let placeholder = s[front]
      s[front] = s[back]
      s[back] = placeholder
      front++
      back--
  }
  return s
};

//Delete Node in a Linked List

//If it's 1 from tail, take the tail value, and delete the next node
//Any other situation, you take the next value, and you point to two ahead, instead of 1 ahead, replacing the one ahead
var deleteNode = function(node) {
  if (!node.next.next) {
      node.val = node.next.val
      node.next = null
  } else {
      node.val = node.next.val
      node.next = node.next.next
  }
};

//Fizz Buzz

var fizzBuzz = function(n) {
  let result = []
  for (let i = 1; i <= n; i++) {
      if ( i % 3 === 0 && i % 5 !== 0) {
          result.push('Fizz')
      } else if (i % 3 !== 0 && i % 5 === 0) {
          result.push('Buzz')
      } else if (i % 3 === 0 && i % 5 === 0) {
          result.push('FizzBuzz')
      } else if (i % 3 !== 0 && i % 5 !== 0) {
          result.push(i.toString())
      }
  }
  return result
};
