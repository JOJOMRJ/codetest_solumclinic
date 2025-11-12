# A. Mystic Waves

## Problem Description

In the land of Elaria, a young mage named Nia experiments with a magical energy value x. She casts a spell that produces a sequence of n waves of energy — alternating between x and −x, starting with x.

For example, if n = 5, the sequence of energies will be: x, −x, x, −x, x

The task is to calculate the total magical energy after all n waves.

## Solution Approach

The solution uses a simple mathematical observation:
- If n is **even**: The waves cancel out completely → Total = 0
- If n is **odd**: One extra positive x remains → Total = x

## Requirements

- Python 3.x (no external dependencies required)

## How to Run

### Option 1: Interactive Input
```bash
python solution.py
```
Then enter the input:
```
4
1 4
2 5
3 6
4 7
```

### Option 2: Using Input File
```bash
python solution.py < input.txt
```

## Example

### Input
```
4
1 4
2 5
3 6
4 7
```

### Output
```
0
2
0
4
```

## Explanation

- Test case 1: x=1, n=4 (even) → 1 + (-1) + 1 + (-1) = 0
- Test case 2: x=2, n=5 (odd) → 2 + (-2) + 2 + (-2) + 2 = 2
- Test case 3: x=3, n=6 (even) → 3 + (-3) + 3 + (-3) + 3 + (-3) = 0
- Test case 4: x=4, n=7 (odd) → 4 + (-4) + 4 + (-4) + 4 + (-4) + 4 = 4
