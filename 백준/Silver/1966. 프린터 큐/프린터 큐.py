t = int(input())

for _ in range(t):
    n, m = map(int, input().split())
    nums = list(map(int, input().split()))
    check = [0 for _ in range(n)]
    check[m] = 1

    answer = 0
    while nums:
        if nums[0] == max(nums):
            answer += 1

            if check[0] == 1:
                print(answer)
                break
            else:
                nums.pop(0)
                check.pop(0)
        else:
            nums.append(nums.pop(0))
            check.append(check.pop(0))