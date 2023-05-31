C, N = map(int, input().split())
arr = []
for _ in range(N):
    a, b = map(int, input().split())
    arr.append([a, b])

dp = [1e7 for _ in range(C + 100)]
dp[0] = 0

for cost, customer in arr:
    for i in range(customer, C + 100):
        dp[i] = min(dp[i], dp[i - customer] + cost)

print(min(dp[C:]))
