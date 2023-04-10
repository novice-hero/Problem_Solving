function solution(numbers) {
    const number = new Set([0,1,2,3,4,5,6,7,8,9]);
    numbers = new Set(numbers);
    const answer = new Set([...number].filter(v => !numbers.has(v)));
    
    
    return [...answer].reduce((acc,cur)=>acc+cur);
}