function solution(s){
    const answer = [];
    
    for (let i=0;i<s.length;i++) {
        answer.push(s[i]);
        if (answer[answer.length-2] === '(' && answer[answer.length-1] === ')') {
            answer.pop();
            answer.pop();
        }
    }
    
    return answer.length ? false : true;
}