// accumulate.js：逐项累计，返回每项之后的累计值
export function accumulate(values) {
  const cumulative = new Array(values.length);
  let running = 0;
  for (let i = 0; i < values.length; i += 1) {
    running += values[i];
    cumulative[i] = running;
  }
  return cumulative;
}
