def dfs(length, idx):
  if length == L:
    c_cnt, v_cnt = 0, 0
    for r in result:
      if r in 'aeiou': v_cnt += 1
      else: c_cnt += 1

    if v_cnt >= 1 and c_cnt >= 2:
      print(''.join(result))

    return
  
  for i in range(idx, C):
    if not visited[i]:
      visited[i] = 1
      result.append(alphabet[i])
      dfs(length+1, i+1)
      visited[i] = 0
      result.pop()

L, C = map(int, input().split())
alphabet = input().split()
alphabet.sort()
visited = [0]*C
result = []

dfs(0, 0)