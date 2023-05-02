const isPrime = (num) => {
    if (num < 2) return false;
    for (let i=2; i<=parseInt(num**0.5); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(numbers) {
    let answer = 0;
    const set = new Set();
    const visited = Array(numbers.length).fill(0);
    const makeNumbers = (depth, str) => {
        if (depth === numbers.length) return;
        for (let i=0; i<numbers.length; i++) {
            if (!visited[i]) {
                visited[i] = 1;
                set.add(parseInt(str+numbers[i]));
                makeNumbers(depth+1, str+numbers[i]);
                visited[i] = 0;
            }
        }
    }
    makeNumbers(0, "");
    set.forEach(v => {
        if (isPrime(v)) {
            answer++;
        }
    });
    
    return answer;
}
