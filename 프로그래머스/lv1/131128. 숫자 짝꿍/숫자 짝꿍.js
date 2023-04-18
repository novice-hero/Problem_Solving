function solution(X, Y) {
    const answer = [];

    const arrX = Array(10).fill(0);
    const arrY = Array(10).fill(0);

    X.split("").forEach(v=>arrX[v]++);
    Y.split("").forEach(v=>arrY[v]++);
    
    for (let i=0; i<10; i++) {
        const minCommon = Math.min(arrX[i], arrY[i]);
        for (let j=0; j<minCommon; j++) {
            answer.push(i);
        }
    }
    answer.sort((a,b)=>b-a);
    
    let mate = answer.sort((a, b) => b - a);
    if (mate[0] == 0) mate = [0];
    if (mate.length == 0) mate = [-1];
    
    return mate.join("");
}