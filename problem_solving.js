const maxLen = 1e4 + 10;

function calculateMinMoves(n, q) {
  let ans = new Array();
  let mem = new Array(maxLen).fill(-1);

  function getMoves(num) {
    if (num == 0) return 0;
    if (mem[num] != -1) return mem[num];

    let cur = getMoves(num - 1) + 1;
    for (let i = 2; i * i <= num; i++) {
      if (num % i == 0)
        cur = Math.min(cur, getMoves(num - i) + 1, getMoves(num - num / i) + 1);
    }

    mem[num] = cur;
    return mem[num];
  }

  for (let i = 0; i < n; i++) {
    ans.push(getMoves(q[i]));
  }

  return ans;
}
