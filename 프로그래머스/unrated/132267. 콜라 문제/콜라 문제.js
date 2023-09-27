function solution(a, b, n) {
    let receive = 0;
    while (n >= a) {
        const change = Math.floor(n/a);
        n -= change*a;
        receive += change*b;
        n += change*b;
    }
    return receive;
}