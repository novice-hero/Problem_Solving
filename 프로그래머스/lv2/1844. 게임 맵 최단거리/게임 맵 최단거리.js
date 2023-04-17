function solution(maps) {
    const moves = [[0,1],[0,-1],[1,0],[-1,0]];
    const WIDTH = maps[0].length;
    const HEIGHT = maps.length;
    const visited = Array.from({length: HEIGHT}, ()=>Array(WIDTH).fill(0))
    
    const BFS = (a, b) => {
        const q = [];
        q.push([a, b]);
        visited[a][b] = 1;
        while (q.length) {
            const [r, c] = q.shift();
            for (const move of moves) {
                const nr = r + move[0];
                const nc = c + move[1];
                if (nr < 0 || nr >= HEIGHT || nc < 0 || nc >= WIDTH || maps[nr][nc] === 0 || 
                    visited[nr][nc] !== 0) continue;
                visited[nr][nc] = visited[r][c] + 1;
                q.push([nr,nc]);
            }
        }
    }
    BFS(0,0);
    const answer = visited[HEIGHT-1][WIDTH-1];
    return answer === 0 ? -1 : answer;
}