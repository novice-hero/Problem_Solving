def exceptWu(x, y, cnt, value):
  global answer

  if cnt == 4:
    answer = max(answer, value)
    return
  
  for dx, dy in move:
    nx = x + dx
    ny = y + dy
    if 0<=nx<N and 0<=ny<M and not visited[nx][ny]:
      visited[nx][ny] = True
      exceptWu(nx, ny, cnt+1, value+paper[nx][ny])
      visited[nx][ny] = False

def checkWu(x, y):
  global answer
  for i in range(4):
    temp = paper[x][y]
    for j in range(3):
      k = (i+j) % 4
      nx = x + move[k][0]
      ny = y + move[k][1]
      if not (0<=nx<N and 0<=ny<M):
        temp = 0
        break
      temp += paper[nx][ny]
    answer = max(answer, temp)

N, M = map(int, input().split())
paper = [list(map(int, input().split())) for _ in range(N)]
visited = [[False]*M for _ in range(N)]
move = [[0,1], [0,-1], [1,0], [-1,0]]
answer = 0

for i in range(N):
  for j in range(M):
    visited[i][j] = True
    exceptWu(i, j, 1, paper[i][j])
    visited[i][j] = False
    checkWu(i, j)

print(answer)