N = int(input())
town = []
mid = 0
for _ in range(N):
  x, a = map(int, input().split())
  town.append((x,a))
  mid += a

town.sort(key=lambda x:x[0])
mid /= 2
total = 0
for idx, cnt in town:
  total += cnt
  if total > mid:
    print(idx)
    break