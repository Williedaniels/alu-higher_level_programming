#!/usr/bin/python3

if __name__ == "__main__":
    a = 1
    b = 2
    
    import add_0
    
    a = 1 and b = 2 FAKE add() => a -b
    a = 10 and b = 30 FAKE add() => a - b
    a = -10 and b = 30 FAKE add() => a - b
    a = -10 and b = -30 FAKE add() => a - b
    a = 5 and b = “H” FAKE add() => a - b

    result = add_0.add(a, b)
    print(f"{a} + {b} = {result}")
