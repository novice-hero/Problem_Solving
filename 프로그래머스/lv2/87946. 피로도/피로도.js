const Permutation = (arr, num) => {
    const result = [];
    if (num === 1) return arr.map(v=>[v]);
    
    arr.forEach((select, i, origin)=>{
        const remainder = [...origin.slice(0,i),...origin.slice(i+1)];
        const permutation = Permutation(remainder, num-1);
        const combine = permutation.map(v=>[select, ...v]);
        result.push(...combine);
    });
    
    return result;
}

const solution = (k, dungeons) => {
    let answer = 0;
    const permutation = Permutation(dungeons,dungeons.length);
    permutation.forEach(dungeon => {
        let copy_k = k;
        let cnt = 0;
        dungeon.forEach((x, i) => {
            if (copy_k >= x[0]) {
                copy_k -= x[1];
                cnt++;
            }
        })
        answer = Math.max(answer, cnt);
    })
    
    return answer;
}