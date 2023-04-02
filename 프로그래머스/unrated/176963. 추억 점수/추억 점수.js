function solution(names, yearning, photos) {
    const answer = [];
    const scoreBoard = {};
    names.forEach((name, idx) => {
        if (idx >= yearning.length) scoreBoard[name] = 0;
        else if (!scoreBoard[name]) scoreBoard[name] = yearning[idx];
    });
    for (const photo of photos) {
        let cnt = 0;
        for (const name of photo) {
            if (scoreBoard[name])
                cnt += scoreBoard[name];
        }
        answer.push(cnt);
    }
    
    return answer;
}