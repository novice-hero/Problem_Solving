N, K = map(int, input().split())
temperature = list(map(int, input().split()))
answer = [sum(temperature[:K])]
for i in range(N-K):
    answer.append(answer[i]-temperature[i]+temperature[K+i])
print(max(answer))
