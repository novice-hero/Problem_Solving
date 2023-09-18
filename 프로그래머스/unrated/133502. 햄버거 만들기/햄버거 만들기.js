const check = (arr) => {
    return arr.at(-4)===1 && arr.at(-3)===2 && arr.at(-2)===3 && arr.at(-1)===1;
}

function solution(ingredient) {
    let answer = 0;
    let stack = [];
    
    for (let i=0; i<ingredient.length; i++) {
        stack.push(ingredient[i]);
        if (stack.length >= 4) {
            if (check(stack)) {
                answer++;
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
            }
        }
    } 
    return answer;
}