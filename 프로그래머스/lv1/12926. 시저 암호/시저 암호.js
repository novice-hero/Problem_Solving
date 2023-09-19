function solution(s, n) {
    return s.split('').map(v=>{
        if (v===' ') return v;
        return v.toUpperCase().charCodeAt()+n > 90
        ? String.fromCharCode(v.charCodeAt()+n-26)
        : String.fromCharCode(v.charCodeAt()+n);
    }).join('');
}