function solution(dartResult) {
    const answer = [];
    let temp = 0;
    
    for (let i=0; i<dartResult.length; i++) {
        if (parseInt(dartResult[i]) >= 0 && parseInt(dartResult[i]) <= 9) {
            if (parseInt(dartResult[i])===1 && parseInt(dartResult[i+1])===0) {
                temp = 10;
                i++;
            } else {
                temp = dartResult[i];
            }
        }
        else if (dartResult[i] === 'S') answer.push(temp**1);
        else if (dartResult[i] === 'D') answer.push(temp**2);
        else if (dartResult[i] === 'T') answer.push(temp**3);
        else if (dartResult[i] === '*') {
            answer[answer.length-2] *= 2;
            answer[answer.length-1] *= 2;
        }
        else if (dartResult[i] === '#') answer[answer.length-1]*=-1;
    }
    
    return answer.reduce((acc,cur)=>acc+cur, 0);
}