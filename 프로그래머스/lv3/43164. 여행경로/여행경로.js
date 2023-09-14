const solution = (tickets) => {
    const answer = [];
    const visited = Array(tickets.length).fill(0);
    const finished = tickets.length;
    
    const dfs = (depth, routes) => {
        if (depth === finished) {
            answer.push(routes);
            return;
        }
        tickets.forEach((ticket, idx) => {
            const [start, end] = ticket;
            if (routes[routes.length - 1] === start && !visited[idx]) {
                visited[idx] = 1;
                dfs(depth+1, [...routes, end]);
                visited[idx] = 0;
            } 
        });
    }
    
    dfs(0, ["ICN"]);
    
    return answer.sort()[0];
};
