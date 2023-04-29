import copy
import sys
input = sys.stdin.readline

n, m = map(int, input().split())
room = [list(map(int, input().split())) for _ in range(n)]
dx, dy = [-1, 0, 1, 0], [0, 1, 0, -1]
cctv_d = {
    1: [[0], [1], [2], [3]],
    2: [[0, 2], [1, 3]],
    3: [[0, 1], [1, 2], [2, 3], [3, 0]],
    4: [[0, 1, 2], [1, 2, 3], [2, 3, 0], [3, 0, 1]],
    5: [[0, 1, 2, 3]]
}
answer = 999999999
cctv = []
for i in range(n):
    for j in range(m):
        if 0 < room[i][j] < 6:
            cctv.append([i, j, room[i][j]])


def watch(x, y, direction, room_copy):
    for d in direction:
        nx, ny = x, y
        while True:
            nx += dx[d]
            ny += dy[d]
            if nx < 0 or ny < 0 or nx >= n or ny >= m or room_copy[nx][ny] == 6:
                break
            elif room_copy[nx][ny] == 0:
                room_copy[nx][ny] = '#'


def dfs(depth, room):
    global answer
    room_copy = copy.deepcopy(room)
    if depth == len(cctv):
        cnt = 0
        for r in room_copy:
            cnt += r.count(0)
        answer = min(answer, cnt)
        return
    x, y, d = cctv[depth]
    for c in cctv_d[d]:
        watch(x, y, c, room_copy)
        dfs(depth+1, room_copy)
        room_copy = copy.deepcopy(room)


dfs(0, room)
print(answer)
