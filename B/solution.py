"""
B. CargoCraft Fleet

Problem:
Given total propulsion units n, find the minimum and maximum number of crafts
that can make up this total using:
- Type A crafts: 4 propulsion units each
- Type B crafts: 6 propulsion units each

Solution Logic:
- Minimum crafts: Use as many Type B (6 units) as possible
- Maximum crafts: Use as many Type A (4 units) as possible
- If n cannot be formed using 4s and 6s, return -1
"""

def is_possible(n):
    """
    Check if n propulsion units can be formed using Type A (4) and Type B (6).

    Args:
        n: Total propulsion units

    Returns:
        True if possible, False otherwise
    """
    # Key insight: 4 and 6 are both even, so we can only make even numbers!
    if n % 2 == 1:
        return False

    # Numbers less than 4 are impossible (minimum is 4 = 1 Type A)
    if n < 4:
        return False

    return True


def find_min_crafts(n):
    """
    Find minimum number of crafts by using as many Type B (6 units) as possible.

    Args:
        n: Total propulsion units

    Returns:
        Minimum number of crafts

    Note:
        Assumes n is valid (even number >= 4). Only possible remainders are 0, 2, 4.
    """
    remainder = n % 6
    match remainder:
        case 0:
            return n // 6              # All Type B: n = 6k
        case 2:
            return n // 6 + 1          # n = 6k + 2 = 6(k-1) + 8 = 6(k-1) + 2×4
        case 4:
            return n // 6 + 1          # n = 6k + 4 = 6k + 1×4
        case _:
            raise ValueError(f"Invalid remainder {remainder} for n={n}")


def find_max_crafts(n):
    """
    Find maximum number of crafts by using as many Type A (4 units) as possible.

    Args:
        n: Total propulsion units

    Returns:
        Maximum number of crafts

    Note:
        Assumes n is valid (even number >= 4). Only possible remainders are 0, 2.
    """
    remainder = n % 4
    match remainder:
        case 0:
            return n // 4              # All Type A: n = 4k
        case 2:
            return (n - 6) // 4 + 1    # Reserve 1 Type B (6), fill rest with Type A
        case _:
            raise ValueError(f"Invalid remainder {remainder} for n={n}")


def find_min_max_crafts(n):
    """
    Find minimum and maximum number of crafts for n propulsion units.

    Args:
        n: Total propulsion units

    Returns:
        Tuple (min_crafts, max_crafts) or None if impossible
    """
    if not is_possible(n):
        return None

    min_crafts = find_min_crafts(n)
    max_crafts = find_max_crafts(n)

    return (min_crafts, max_crafts)


def main():
    # Read number of test cases
    t = int(input())

    # Process each test case
    for _ in range(t):
        n = int(input())
        result = find_min_max_crafts(n)

        if result is None:
            print(-1)
            continue

        min_crafts, max_crafts = result
        print(min_crafts, max_crafts)


if __name__ == "__main__":
    main()
