function solution(want, number, discount) {
  let answer = 0;
  let want_dic = {};
  for (let i = 0; i < want.length; i++) {
    want_dic[want[i]] = number[i];
  }

  let i = 0;
  while (i <= discount.length - 10) {
    const temp_dic = { ...want_dic };
    let dis = discount.slice(i, i + 10);

    for (let j = 0; j < dis.length; j++) {
      if (temp_dic[dis[j]]) {
        temp_dic[dis[j]]--;
      }
    }
    i++;

    if (Object.values(temp_dic).reduce((a, c) => a + c) === 0) answer++;
  }

  return answer;
}
