function solution(n) {
    var answer = 0;
    for (let i=2;i<=n;i++) {
        if (isPrime(i)) answer++;
    }
    
    return answer;
}

function isPrime(n) {
    for(let i=2;i<=Math.sqrt(n);i++) {
        if (n%i===0) return false;
    }
    return true;
}