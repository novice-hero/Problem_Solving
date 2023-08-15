function solution(sequence, k) {
    const arr = [];
    const len = sequence.length;
    let sum = 0;
    let left = 0;
    let right = -1;
    
    while (true) {
        if (sum < k) {
            right++;
            if (right >= len) break;
            sum += sequence[right];
        } else {
            if (left >= len) break;
            sum -= sequence[left];
            left++;
        }
        
        if (sum === k) {
            arr.push([left, right]);
        }
    }
    
    return arr.sort((a,b)=>(a[1]-a[0])-(b[1]-b[0]))[0];
}