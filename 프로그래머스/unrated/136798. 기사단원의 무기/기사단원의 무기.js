const divisorCounter = (num) => {
    let cnt = 0;
    for (let i=1; i<=Math.sqrt(num); i++) {
        if (num % i === 0) {
            cnt++;
            if (num / i !== i) cnt++;
        }
    }
    return cnt;
}

function solution(number, limit, power) {
    var answer = 0;
    for (let i=1; i<=number; i++) {
        const cnt = divisorCounter(i);
        if (cnt > limit) answer += power;
        else answer += cnt;
    }
    return answer;
}