N, M = map(int, input().split(" "))
graph = [[] for _ in range(N)]
visited = [0 for _ in range(N)]
check = False
for i in range(M):
  a, b = map(int, input().split(" "))
  graph[a].append(b)
  graph[b].append(a)

def dfs(depth, idx):
  global check
  if depth == 5:
    check = True
    return

  for cur in graph[idx]:
    if not visited[cur]:
      visited[cur] = 1
      dfs(depth+1, cur)
      visited[cur] = 0

for i in range(N):
  dfs(0, i)
  visited[i] = 0

  if check:
    break

if check:
  print(1)
else:
  print(0)