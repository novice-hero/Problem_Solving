function solution(people, limit) {
    let answer = 0;
    const sortPeople = people.sort((a,b)=>a-b);
    let left = 0, right = people.length-1;
    while (left <= right) {
        if (sortPeople[left] + sortPeople[right] <= limit) {
            left++;
            right--;
        } else {
            right--;
        }
        answer++;
    }
    return answer;
    // let answer = 0;
    // const sortPeople = people.sort((a,b)=>a-b);
    // while (sortPeople.length) {
    //     if (sortPeople.length > 1) {
    //         if (sortPeople.at(0) + sortPeople.at(-1) <= limit) {
    //             sortPeople.shift();
    //             sortPeople.pop();
    //             answer++;
    //         } else {
    //             sortPeople.pop();
    //             answer++;
    //         }
    //     } else {
    //         sortPeople.pop();
    //         answer++;
    //     }
    // }
    // return answer;
}