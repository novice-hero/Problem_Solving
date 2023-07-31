function solution(plans) {
    const answer = [];
    const stack = [];
    const sortPlans = plans.map(plan => {
        const temp = plan[1].split(":");
        const time = temp[0]*60 + Number(temp[1]);
        const playtime = Number(plan[2]);
        return [plan[0], time, playtime];
    }).sort((a,b) => a[1] - b[1]);
    
    for (let i=0; i<sortPlans.length-1; i++) {
        const [name, time, playtime] = sortPlans[i];
        const next = sortPlans[i+1];
        if (time+playtime > next[1]) stack.push([name, time+playtime - next[1]]);
        else {
            answer.push(name);
            let nextTime = next[1]-time-playtime;
            
            while (stack.length) {
                const [stackName, stackTime] = stack.pop();
                if (stackTime > nextTime) {
                    stack.push([stackName, stackTime - nextTime]);
                    break;
                } else {
                    nextTime -= stackTime;
                    answer.push(stackName);
                }
            }
        }
    }
    answer.push(sortPlans.at(-1)[0]);
    
    while (stack.length) {
        answer.push(stack.pop()[0]);
    }
    
    return answer;
}