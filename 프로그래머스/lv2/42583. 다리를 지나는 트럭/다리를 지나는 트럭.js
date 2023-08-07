function solution(bridge_length, weight, truck) {
    let t = 0
    let bridge = Array.from({length : bridge_length}, ()=>0);
    
    while (bridge.length) {
        bridge.shift();
        t++;
        if (truck.length) {
            let sum = bridge.reduce((res, cur)=>res+cur);
            sum + truck[0] <= weight ? bridge.push(truck.shift()) : bridge.push(0);
        }
    }
    
    return t;
}