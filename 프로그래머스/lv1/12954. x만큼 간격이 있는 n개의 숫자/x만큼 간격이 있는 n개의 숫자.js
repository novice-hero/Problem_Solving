function solution(x, n) {
    return Array(n).fill(0).map((v, i)=>v+(i+1)*x);
}