// function solution(triangle) {
//     const N = triangle.length;
    
//     for (let i=N-1; i>=0; i--) {
//         for (let j=0; j<triangle[i].length-1; j++) {
//             const bigger = Math.max(triangle[i][j], triangle[i][j+1]);
//             triangle[i-1][j] += bigger;
//         }
//     }
//     console.log(triangle)
//     return triangle[0][0];
// }

function solution(triangle) {
    for (let i = triangle.length - 1; i >= 0; i--)
        for (let j = 0; j < triangle[i].length - 1; j++) {
            const temp = Math.max(triangle[i][j], triangle[i][j + 1]);
            triangle[i - 1][j]+=temp;
        }
    return triangle[0][0];
}