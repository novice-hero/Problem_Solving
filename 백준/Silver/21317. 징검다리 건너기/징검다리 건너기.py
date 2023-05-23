n = int(input())
small = []
big = []
for _ in range(n - 1):
    s, b = list(map(int, input().split()))
    small.append(s)
    big.append(b)
k = int(input())

if n == 1:
    print(0)
    exit()
if n == 2:
    print(small[0])
    exit()

dp = [[0, 0] for _ in range(n)]
dp[1][0], dp[1][1] = small[0], small[0]
dp[2][0], dp[2][1] = min(dp[1][0] + small[1], dp[0][0] + big[0]), min(
    dp[1][0] + small[1], dp[0][0] + big[0]
)

for i in range(3, n):
    dp[i][0] = min(dp[i - 1][0] + small[i - 1], dp[i - 2][0] + big[i - 2])
    dp[i][1] = min(
        min(dp[i - 1][1] + small[i - 1], dp[i - 2][1] + big[i - 2]), dp[i - 3][0] + k
    )

print(min(dp[-1][0], dp[-1][1]))
