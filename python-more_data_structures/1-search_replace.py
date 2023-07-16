#!/usr/bin/python3

def search_replace(my_list, search, replace):
    new_list = [replace if item == search else item for item in my_list]
    return new_list

# Test the function
test_cases = [
    ([1, 2, 3], 1, 0),
    ([1, 2, 3], 2, 0),
    ([1, 2, 3], 3, 0),
    ([1, 2, 3], 4, 0),
    ([1, 2, 3, 1, 1, 3, 6], 1, 0),
    ([], 2, 0)
]

for my_list, search, replace in test_cases:
    new_list = search_replace(my_list, search, replace)
    print(f"Input: {my_list}, Search: {search}, Replace: {replace}")
    print(f"Output: {new_list}")
    print("-----")
