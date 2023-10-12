from collections import deque

n = int(input())
area = []
maxNum = 0
for i in range(n):
  area.append(list(map(int, input().split())))
  for j in range(n):
    if area[i][j] > maxNum:
      maxNum = area[i][j]
dx,dy = [1,-1,0,0],[0,0,-1,1]

def bfs(a,b,maxNum,visited):
  q = deque()
  q.append([a,b])
  visited[a][b] = True

  while q:
    x,y = q.popleft()
    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]
      if 0<=nx<n and 0<=ny<n and not visited[nx][ny] and area[nx][ny] > maxNum:
        visited[nx][ny] = True
        q.append([nx,ny])

answer = 0
for safe in range(maxNum):
  visited = [[False]*n for _ in range(n)]
  temp_max = 0
  for i in range(n):
    for j in range(n):
      if area[i][j] > safe and not visited[i][j]:
        bfs(i,j,safe,visited)
        temp_max+=1
  answer = max(answer, temp_max)

print(answer)