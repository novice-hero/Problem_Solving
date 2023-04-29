function solution(n, wires) {
    wires = wires.sort();
    let answer = 1e9;
    for (let i=1; i<wires.length; i++) {
        const visited = Array(n+1).fill(0);
        // 배열을 하나씩 삭제해서 wires.length-1만큼 만들기
        const temp = wires.slice(0,i-1).concat(wires.slice(i));
        const towers = Array.from({length: n+1}, ()=>[]);
        for (const [a, b] of temp) {
            towers[a].push(b);
            towers[b].push(a);
        }
        // bfs, 정점의 수 세기 (방문한 정점 체크)
        const bfs = (n) => {
            const q = [n];
            visited[n] = 1;
            let cnt = 1;

            while (q.length) {
                const cur = q.shift();
                for (const next of towers[cur]) {
                    if (!visited[next]) {
                        q.push(next);
                        visited[next] = 1;
                        cnt++;
                    }
                }
            }
            return cnt;
        }
        // 하나를 잘랐기 때문에 정점의 수는 두개가 나옴 -> 두개의 차의 절댓값을 구하기
        const temp2 = [];
        for (let i=1; i<=n; i++) {
            if (!visited[i]) temp2.push(bfs(i));
        }
        // 이 절댓값을 계속 최소비교
        answer = Math.min(answer, Math.abs(temp2[0]-temp2[1]));
    }
    
    return answer;
}