// accumulate.js：逐项累计，返回每项之后的累计值
export function accumulate(values) {
  if (!values || values.length === 0) {
    const error = new Error("values must not be empty");
    error.code = "E_EMPTY_VALUES";
    throw error;
  }
  const cumulative = new Array(values.length);
  let sum = 0;
  for (let i = 0; i < values.length; i += 1) {
    sum += values[i];
    cumulative[i] = sum;
  }
  return cumulative;
}
