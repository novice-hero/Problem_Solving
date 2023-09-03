from collections import deque

def calculateDistance(spot1, spot2):
    x = abs(spot1[0] - spot2[0])
    y = abs(spot1[1] - spot2[1])
    if (x + y) <= 1000:
      return True
    else:
      return False

def bfs():
  q = deque()
  q.append(start)

  while q:
    cur_node = q.popleft()
    if calculateDistance(cur_node, arrive):
      print('happy')
      return
    for i in range(n):
      if not visited[i]:
        next_node = stores[i]
        if calculateDistance(next_node, cur_node):
          visited[i] = 1
          q.append(stores[i])
  
  print('sad')
  return

t = int(input())
for _ in range(t):
  n = int(input())
  start = list(map(int, input().split(" ")))
  stores = [list(map(int, input().split(" "))) for _ in range(n)]
  arrive = list(map(int, input().split(" ")))
  visited = [0 for _ in range(n+1)]
  bfs()