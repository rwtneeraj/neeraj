# JavaScript Challenges for Critical Thinking

## Challenge 1: Array Mystery

**Description:**
Create a function `mysteryOperation` that takes an array of integers and returns a single integer. The operation performed is a mystery—your goal is to deduce the pattern from examples and implement it.

**Examples:**

- `mysteryOperation([2, 3, 4])` → 6
- `mysteryOperation([1, 5, 7])` → 10
- `mysteryOperation([9, 12, 15])` → 18

**Question:**
What logic will you use to implement this function?
ans : 


---

## Challenge 2: String Pattern Validator

**Description:**
Write a function `validatePattern` that takes a string and returns `true` if it matches the pattern of alternating letters and digits, and `false` otherwise.

**Examples:**

- `validatePattern("a1b2c3")` → `true`
- `validatePattern("abc123")` → `false`
- `validatePattern("1a2b3c")` → `false`

**Question:**
What kind of pattern will you design to achieve this?

---

## Challenge 3: Nested Array Flattening

**Description:**
Write a function `deepFlatten` that takes a deeply nested array and returns a flat array containing all the elements in their original order.

**Examples:**

- `deepFlatten([1, [2, [3, [4]], 5]])` → `[1, 2, 3, 4, 5]`
- `deepFlatten([[[1, 2], 3], 4])` → `[1, 2, 3, 4]`

**Question:**
How will you handle varying levels of nesting?
---

## Challenge 4: Word Frequency Counter

**Description:**
Create a function `wordFrequency` that takes a string and returns an object with words as keys and their frequencies as values.

**Examples:**

- `wordFrequency("hello world hello")` → `{ hello: 2, world: 1 }`
- `wordFrequency("one fish two fish red fish blue fish")` → `{ one: 1, fish: 4, two: 1, red: 1, blue: 1 }`

**Question:**
What approach will you use to split and count the words?

---

## Challenge 5: Array Index Match

**Description:**
Write a function `findMatchingIndex` that takes an array of integers and returns an array of indices where the value at the index matches the index itself.

**Examples:**

- `findMatchingIndex([0, 2, 2, 3])` → `[0, 3]`
- `findMatchingIndex([1, 1, 2, 4])` → `[2]`

**Question:**
How will you check for matching indices?

---

## Challenge 6: Complex Object Sorting

**Description:**
Create a function `sortByNestedProperty` that takes an array of objects and a property path string (e.g., "a.b.c") and returns the array sorted by the specified property.

**Examples:**

```javascript
const data = [
  { a: { b: { c: 3 } } },
  { a: { b: { c: 1 } } },
  { a: { b: { c: 2 } } }
];
sortByNestedProperty(data, "a.b.c");
// Output: [
//   { a: { b: { c: 1 } } },
//   { a: { b: { c: 2 } } },
//   { a: { b: { c: 3 } } }
]
```

**Question:**
How will you dynamically access nested properties and sort the array?