function solution(maps) {
    
    const [dx, dy] = [[1,-1,0,0],[0,0,1,-1]];
    const [row, col] = [maps.length, maps[0].length]
    let start = [];
    let lever = [];
    
    for (let i=0; i<row; i++) {
        for (let j=0; j<col; j++) {
            if (maps[i][j] === 'S') {
                start = [i, j];
            }
            else if (maps[i][j] === 'L') {
                lever = [i ,j];
            }
        }
    }
    const bfs = (start, arrive) => {
        let count = 0;
        
        const q = [[...start, 0]];
        const visited = Array.from({length: row}, () => {
            return Array.from({length: col}, () => 0);
        });
        visited[start[0]][start[1]] = 1;
        
        while (q.length) {
            const [r, c, cur] = q.shift();
            if (maps[r][c] === arrive) return cur;
            
            for (let i=0; i<4; i++) {
                const [nr, nc] = [r+dx[i], c+dy[i]];
                if (nr<0 || nc<0 || nr>=row || nc>=col) continue;
                if (maps[nr][nc] === 'X' || visited[nr][nc]) continue;
                q.push([nr, nc, cur+1]);
                visited[nr][nc] = 1;
            }
        }
    }
    
    const startToLever = bfs(start, "L");
    const leverToEnd = bfs(lever, "E");

    return startToLever && leverToEnd ? startToLever + leverToEnd : -1;
}