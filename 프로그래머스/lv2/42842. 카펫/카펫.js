function solution(brown, yellow) {
    let height = 3;
    const sum = brown  + yellow;
    
    while (true) {
        const width = sum/height;
        if ((width-2)*(height-2)===yellow) {
            return [width, height];
        }
        height++;
    }
}