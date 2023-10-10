def calculate(a, b):
  if a == 1:
    return b
  elif a == 2:
    return W+H+(W-b)
  elif a == 3:
    return 2*W + H + (H-b)
  else:
    return W + b

W, H = map(int, input().split())
store = int(input())
distanceArr = []
answer = 0
for _ in range(store + 1):
  direction, distance = map(int, input().split())
  distanceArr.append(calculate(direction, distance))
startDis = distanceArr.pop()

for d in distanceArr:
  temp1 = abs(startDis-d)
  temp2 = 2*W + 2*H - temp1
  answer += min(temp1, temp2)

print(answer)