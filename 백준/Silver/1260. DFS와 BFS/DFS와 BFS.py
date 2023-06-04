from collections import deque

n,m,start = map(int, input().split())
visited = [False]*(n+1)
graph = [[] for _ in range(n+1)]
for _ in range(m):
  a, b = map(int, input().split())
  graph[a].append(b)
  graph[b].append(a)
for i in range(len(graph)):
  graph[i].sort()

def dfs(s):
  print(s, end=' ')
  visited[s] = True
  for i in graph[s]:
    if not visited[i]:
      dfs(i)
      visited[i] = True

def bfs(s):
  q = deque([s])
  visited[s] = True
  while q:
    cur = q.popleft()
    print(cur, end=' ')
    for i in graph[cur]:
      if not visited[i]:
        q.append(i)
        visited[i] = True

dfs(start)
print()
visited = [False]*(n+1)
bfs(start)