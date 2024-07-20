import math

def is_prime(n):
    """This function check if a number is prime or not"""
    if n < 2:
        return False
    for i in range(2, math.sqrt(n)):
        if n % i == 0:
            return False
    return True