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