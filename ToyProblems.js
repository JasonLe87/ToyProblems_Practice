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

//Non-decreasing Array

//[4, 1, 2, 3]       [1, 4, 2, 3]  [3, 4, 2, 5]
var checkPossibility = function(nums) {
  let skip = 0
  for (var i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
          skip++
          if (skip > 1) {
              return false
          }
          if (i === 1) {
              continue
          } else {
              if (nums[i] >= nums[i - 2]) {
                  nums[i-1] = nums[i]
              } else {
                  nums[i] = nums[i-1]
              }
          }
      }
  }
  return true
};

//Integer into Roman Numberal

var intToRoman = function(num) {
  let res = ''
  while (num > 0) {
      if (1000 <= num && num <= 3999 ) {
          num = num - 1000
          res = res + 'M'
      }
      if (900 <= num && num <= 999) {
          num = num - 900
          res = res + 'CM'
      }
      if (500 <= num && num <= 899) {
          num = num - 500
          res = res + 'D'
      }
      if (400 <= num && num <= 499) {
          num = num - 400
          res = res + 'CD'
      }
      if (100 <= num && num <= 399) {
          num = num - 100
          res = res + 'C'
      }
      if (90 <= num && num <= 99) {
          num = num - 90
          res = res + 'XC'
      }
      if (50 <= num && num <= 89) {
          num = num - 50
          res = res + 'L'
      }
      if (40 <= num && num <= 49) {
          num = num - 40
          res = res + 'XL'
      }
      if (10 <= num && num <= 39) {
          num = num - 10
          res = res + 'X'
      }
      if (num === 9) {
          num = num - 9
          res = res + 'IX'
      }
      if (5 <= num && num <= 8) {
          num = num - 5
          res = res + 'V'
      }
      if (num === 4) {
          num = num - 4
          res = res + 'IV'
      }
      if (0 < num && num <= 3) {
          num = num - 1
          res = res + 'I'
      }
  }
  return res
};

//Convert Sorted Array to Binary Search Tree

var sortedArrayToBST = function(nums) {
  if (nums.length === 1) {
      return new TreeNode(nums[0])
  } else if (nums.length === 2) {
      return new TreeNode(nums[1], new TreeNode(nums[0]))
  }
  const midpoint = Math.floor(nums.length / 2)
  const left = sortedArrayToBST(nums.slice(0, midpoint))
  const right = sortedArrayToBST(nums.slice(midpoint + 1, nums.length))
  return new TreeNode(nums[midpoint], left, right)
};

//Valid Anagram

//sort and compare two strings
var isAnagram = function(s, t) {
    const a = s.split('').sort().join('')
    const b = t.split('').sort().join('')
    if (a === b) {
        return true
    }
    return false
};

//Contains Duplicate

var containsDuplicate = function(nums) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        if (!result[nums[i]]) {
            result[nums[i]] = 1
        } else {
            return true
        }
    }
    return false
};

//Coin Change

//dynamic programming; find the best path from 0 -> amount, iteratively add only the most optimal/least amount of coins.
var coinChange = function(coins, amount) {
    let dp = new Array(amount+1);
    dp[0] = 0;
    for (let i=1; i<=amount; i++) {
        dp[i] = Number.MAX_SAFE_INTEGER;
        coins.forEach(coin => {if (i-coin >= 0) dp[i] = Math.min(dp[i], dp[i-coin]+1)});
    }
    return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
};

//Max SubArray

//compare cumulative vs current, and then compare again for max
var maxSubArray = function(nums) {
    let current = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        current = current + nums[i];
        current = Math.max(current, nums[i]);
        max = Math.max(max, current);
    }
    return max;
};

//Palindrome linked list

//push to array, compare forward with backwards after slicing
var isPalindrome = function(head) {
    let array = []
    while(head) {
        array.push(head.val)
        head = head.next
    }
    let backwards = array.slice()
    let forwards = array.join('')
    backwards = backwards.reverse().join('')
    return forwards === backwards
};

//Valid Parenthesis
//keep track of current open brackets and compare if a new close bracket appears
var isValid = function(s) {
    let max = s.length
    let counter = 0
    let box = []
    while (counter < max) {
        if (s[counter] === "{" || s[counter] === "[" ||  s[counter] === "(") {
            box.unshift(s[counter])
        } else {
            if (box.length > 0) {
                if (s[counter] === ")") {
                    if (box[0] !== "(") return false
                } else if (s[counter] === "]") {
                    if (box[0] !== "[") return false
                } else if (s[counter] === "}") {
                    if (box[0] !== "{") return false
                }
                box.shift()
            } else return false
        }
        counter++
    }
    if (box.length > 0) return false
    else return true
};

//Partition Labels
//make character index of where letters last appear
//make index of max partition where you update max as you move pointer forward, stopping and pushing result when you're good
var partitionLabels = function(S) {
    const charIndex = {};
    for (let i = 0; i < S.length; i++) {
        charIndex[S[i]] = i;
    }
    let index = 0;
    let index2 = -1;
    let current = 0;
    let result = [];
    while (index < S.length) {
        if (current < charIndex[S[index]]) {
            current = charIndex[S[index]];
        }
        if (current === index) {
            result.push(index - index2);
            index2 = index;
        }
        index++;
    }
    return result;
};


//Intersection of Two Linked List
//double while loop instead of double for loop
//brute force method going through one linked list, before moving pointer forward on second linked list repeating process
var getIntersectionNode = function(headA, headB) {
    while (headA) {
        let pointer = headB
        while(pointer) {
            if (headA !== pointer) {
                pointer = pointer.next
            } else {
                return headA
            }
        }
        headA = headA.next
    }
    return null
};

//Subsets
//Distributive Property of sorts, only moving forward[1, 2, 3, 4]
// []
// [1] [2] [3] [4]
// [1, 2] [1, 3] [1, 4], [2, 3] [2, 4], [3, 4]
// [1, 2, 3] [1, 2, 4] , [1, 3, 4] , [2, 3, 4]
// [1, 2, 3, 4]
var subsets = function(nums) {
    let result = []
    var backtracking = function(current, index) {
        result.push(current)
        for (let i = index; i < nums.length; i++){
            backtracking(current.concat(nums[i]), i+1)
        }
    }

    backtracking([], 0)
    return result
};


//Pascal's Trianle
// copy prev row, adding current index to the one in front of it
//while referencing prev row
var generate = function(numRows) {
    let counter = 1
    let result = [[1]]
    while (counter < numRows) {
        let copy = result[counter - 1].slice()
        if (counter > 1) {
            for (let i = 0; i < copy.length - 1; i++){
                copy[i+1] += result[counter - 1][i]
            }
        }
        copy.push(1)
        result.push(copy)
        counter++
    }
    return result
};