# B. CargoCraft Fleet

## Problem Description

In the futuristic world of Aerion, the CargoCraft company operates a fleet of transport vehicles. There are two types of crafts:

- **Type A crafts**: 4 propulsion units each
- **Type B crafts**: 6 propulsion units each

Given a total number of propulsion units `n`, determine the minimum and maximum possible number of crafts in the fleet. If it's impossible to form `n` using only Type A and Type B crafts, output `-1`.

## Solution Approach

### Key Insight

Since both 4 and 6 are even numbers, we can only form **even numbers**. All **odd numbers** are impossible.

### Algorithm

**Impossible cases:**

- All odd numbers (cannot be formed from even numbers)
- n < 4 (too small, minimum is 4 = 1 Type A)

**Minimum crafts** (use as many Type B as possible):

- Divide n by 6 and check remainder:
  - Remainder 0: Use all Type B → `n // 6` crafts
  - Remainder 2: Need to fill 2 units with Type A (4 each)
    - Use `n // 6` Type B crafts + 2 Type A crafts = total `n // 6 + 1` crafts
    - Example: n=8 → 0×6 + 2×4 = 2 crafts
  - Remainder 4: Need to fill 4 units with Type A (4 each)
    - Use `n // 6` Type B crafts + 1 Type A craft = total `n // 6 + 1` crafts
    - Example: n=10 → 1×6 + 1×4 = 2 crafts

**Maximum crafts** (use as many Type A as possible):

- Divide n by 4 and check remainder:
  - Remainder 0: Use all Type A → `n // 4` crafts
  - Remainder 2: Reserve 1 Type B (6 units), fill rest with Type A → `(n - 6) // 4 + 1` crafts

### Time Complexity

O(1) - Direct mathematical calculation using modulo and division operations.

## Requirements

- Python 3.10+ (required for `match-case` syntax)
- No external dependencies required

## How to Run

### Option 1: Interactive Input

```bash
python solution.py
```

Then enter the input:

```
4
4
7
24
998244353998244352
```

### Option 2: Using Input File

```bash
python solution.py < input.txt
```
