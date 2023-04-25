function solution(sizes) {
    let [maxW, maxH] = [0, 0];
    sizes.forEach(([width, height]) => {
        const one = Math.max(width, height);
        const other = Math.min(width, height);
        maxW = Math.max(maxW, one);
        maxH = Math.max(maxH, other);
    });
    return maxW * maxH;
}