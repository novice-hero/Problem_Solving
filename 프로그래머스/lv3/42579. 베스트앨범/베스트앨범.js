function solution(genres, plays) {
    const answer = [];
    const genreMap = new Map();
    const countMap = new Map();
    
    genres.forEach((genre, idx) => {
        const cnt = genreMap.get(genre);
        genreMap.has(genre) 
            ? genreMap.set(genre, cnt+plays[idx]) 
            : genreMap.set(genre, plays[idx]);
    });
    genres.forEach((genre, idx) => {
        if (countMap.has(genre)) {
            const arr = countMap.get(genre);
            arr.push([idx, plays[idx]]);
            countMap.set(genre, arr);
        } else {
            countMap.set(genre, [[idx, plays[idx]]]);
        }
    });
    
    const genreMapToArr = [...genreMap].sort((a,b) => b[1]-a[1]);
    const sortGenreMap = new Map(genreMapToArr);
    
    for (const [key, val] of sortGenreMap) {
        const countArr = countMap.get(key).sort((a,b) => b[1]-a[1]);
        const sliceArr = countArr.slice(0, 2);
        sliceArr.forEach(val => answer.push(val[0]));
    }
    
    return answer;
}
