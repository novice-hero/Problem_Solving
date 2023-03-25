function solution(n) {
    if(n<10)
        return n;
    else
        return n.toString().split('').reduce((acc,cur)=>parseInt(acc)+parseInt(cur));
}