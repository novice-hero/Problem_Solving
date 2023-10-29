n = int(input())
dices = [list(map(int, input().split())) for _ in range(n)]

def findMax(dice, num):
  for idx in range(6):
    if dice[idx] == num:
      break
  if idx == 0:
    return [dice[5], max(dice[1], dice[2], dice[3],dice[4])]
  elif idx == 1:
    return [dice[3], max(dice[0], dice[2], dice[4],dice[5])]
  elif idx == 2:
    return [dice[4], max(dice[0], dice[1], dice[3],dice[5])]
  elif idx == 3:
    return [dice[1], max(dice[0], dice[2], dice[4],dice[5])]
  elif idx == 4:
    return [dice[2], max(dice[0], dice[1], dice[3],dice[5])]
  elif idx == 5:
    return [dice[0], max(dice[1], dice[2], dice[3],dice[4])]

answer = 0
for i in range(6):
  next_val, total = findMax(dices[0], dices[0][i])
  for j in range(1, n):
    temp1, temp2 = findMax(dices[j], next_val)
    next_val = temp1
    total += temp2
  answer = max(answer, total)

print(answer)