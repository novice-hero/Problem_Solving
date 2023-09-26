function solution(n, costs) {
    let answer = 0;
    const sort_costs = costs.sort((a, b) => a[2] - b[2]);
    const set = new Set();
    set.add(sort_costs[0][0]);
    
    while (set.size < n) {
        for (const [start, end, cost] of sort_costs) {
            if (set.has(start) && set.has(end)) continue;
            if (set.has(start) || set.has(end)) {
                set.add(start);
                set.add(end);
                answer += cost;
                break;
            }
        }
    }
    
    return answer;
}