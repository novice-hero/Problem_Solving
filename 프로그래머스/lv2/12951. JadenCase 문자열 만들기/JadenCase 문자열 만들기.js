function solution(s) {
    const answer = s.toLowerCase().split(' ').map(v=>{
        let temp = v.split('');
        if (temp[0] != null) temp[0] = temp[0].toUpperCase();
        return temp.join('');
    });
    
    return answer.join(' ');
}