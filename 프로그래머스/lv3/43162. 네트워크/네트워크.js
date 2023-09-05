function solution(n, computers) {
    let answer = 0;
    const graph = Array.from({length: n}, () => []);
    const visited = Array(n).fill(0);

    const bfs = (idx) => {
        const q = [idx];
        visited[idx] = 1;
        
        while (q.length) {
            const cur = q.shift();
            computers[cur].forEach((connect, nextIdx) => {
                if (connect && !visited[nextIdx]) {
                    q.push(nextIdx);
                    visited[nextIdx] = 1;
                }
            })
        }
        
        return 1;
    }
    
    for (let i=0; i<n; i++) {
        if (!visited[i]) answer += bfs(i);
    }
    
    return answer;
}