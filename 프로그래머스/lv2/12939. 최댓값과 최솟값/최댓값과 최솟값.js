function solution(s) {
    var answer = [];
    s = s.split(' ');
    answer.push(s.reduce((acc,cur)=>Math.min(acc,cur)));
    answer.push(s.reduce((acc,cur)=>Math.max(acc,cur)));
    return answer.join(' ');
}