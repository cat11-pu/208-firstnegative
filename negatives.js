// negatives.js：找累计为负的位置（从零数、升序）
import { accumulate } from "./accumulate.js";

export function findNegatives(values) {
  if (!values || values.length === 0) {
    const error = new Error("values must not be empty");
    error.code = "E_EMPTY_VALUES";
    throw error;
  }
  const cumulative = accumulate(values);
  const negatives = [];
  for (let i = 0; i < cumulative.length; i += 1) {
    if (cumulative[i] < 0) negatives.push(i);
  }
  const first_negative = negatives.length > 0 ? negatives[0] : -1;
  const final = cumulative[cumulative.length - 1];
  return { cumulative, negatives, first_negative, final };
}
