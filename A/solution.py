"""
A. Mystic Waves

Problem:
Given a magical energy value x and number of waves n,
calculate the total energy after n alternating waves: x, -x, x, -x, x, ...

Solution Logic:
- If n is even: x + (-x) + x + (-x) + ... = 0
- If n is odd: x + (-x) + x + (-x) + ... + x = x
"""

def calculate_total_energy(x, n):
    """
    Calculate total magical energy after n waves.

    Args:
        x: The magical energy value
        n: Number of waves

    Returns:
        Total energy after all n waves
    """
    if n % 2 == 0:
        return 0
    else:
        return x


def main():
    # Read number of test cases
    t = int(input())

    # Process each test case
    for _ in range(t):
        x, n = map(int, input().split())
        result = calculate_total_energy(x, n)
        print(result)


if __name__ == "__main__":
    main()
