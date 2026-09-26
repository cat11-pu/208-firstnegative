// negatives.js：找负值（基线：一律给负一）
import { accumulate } from "./accumulate.js";

export function findNegatives(values) {
  return { cumulative: [], negatives: [], first_negative: -1, final: 0 };
}
