const solution = (k, dungeons) => {
    let answer = 0;
    let copy_k = k;
    const visited = Array.from({length: dungeons.length}, () => 0);
    
    const dfs = (stamina, count) => {
        for (let i=0; i<dungeons.length; i++) {
            if (!visited[i] && stamina >= dungeons[i][0]) {
                visited[i] = 1;
                dfs(stamina-dungeons[i][1], count+1);
                visited[i] = 0;
            } 
        }
        answer = Math.max(answer, count);
    }
    dfs(copy_k, 0);
    
    return answer;
}