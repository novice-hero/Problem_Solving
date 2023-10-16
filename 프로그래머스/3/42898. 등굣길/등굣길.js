function solution(m, n, puddles) {
    const dp = Array.from(Array(n+1), ()=>Array(m+1).fill(1));
    
    for (let i=1; i<n+1; i++) {
        dp[i][0] = 0;
    }
    for (let i=1; i<m+1; i++) {
        dp[0][i] = 0;
    }
    for (const puddle of puddles) {
        dp[puddle[1]][puddle[0]] = 0;
    }
    for (let i=1; i<n+1; i++) {
        for (let j=1; j<m+1; j++) {
            if (i===1 && j===1) continue;
            if (dp[i][j] === 0) continue;
            dp[i][j] = (dp[i-1][j] + dp[i][j-1]) % 1000000007;
        }
    }
    
    return dp[n][m];
}