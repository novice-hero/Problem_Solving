function solution(n) {
    const answer = [];
    for (let i=0;i<=n;i++) {
        if(i===0) answer.push(i);
        if(i===1) answer.push(i);
        else if (i >= 2) {
            let temp = answer[answer.length-1]+answer[answer.length-2];
            answer.push(temp%1234567);
        }
    }
    
    return answer[n];
}