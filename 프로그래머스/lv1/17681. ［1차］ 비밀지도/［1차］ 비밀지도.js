function solution(n, arr1, arr2) {
    const answer = [];
    arr1 = toBin(n, arr1);
    arr2 = toBin(n, arr2);
    
    for (let i=0;i<arr1.length;i++) {
        let temp = '';
        for (let j=0;j<arr1.length;j++) {
            if (arr1[i][j] === '0' && arr2[i][j] === '0') {
                temp+=' ';
            } else {
                temp+='#';
            }
        }
        answer.push(temp);
    }
    
    return answer;
}

function toBin(n, arr) {
    arr = arr.map(v=>{
        v = v.toString(2);
        v = Array.from(v);
        while (true) {
            if (v.length === n) {
                v = v.join('');              
                break;
            }
            v.unshift('0');
        }
        return v;
    });
    return arr;
}