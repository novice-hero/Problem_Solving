function solution(answers) {
    const counts = [];
    const result = [];
    const supozas = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    
    for (const supoza of supozas) {
        let cnt = 0;
        for (let i=0; i<answers.length; i++) {
            if (answers[i] === supoza[i%supoza.length]) cnt++;
        }
        counts.push(cnt);
    }
    
    const maxValue = Math.max(...counts);
    counts.forEach((v, i) => {
        if (v === maxValue) result.push(i+1);
    });
    
    return result;
}