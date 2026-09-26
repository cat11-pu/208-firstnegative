// app.js：渲染结果
import { accumulate } from "./accumulate.js";
import { findNegatives } from "./negatives.js";

export function render(spec) {
  const values = spec.values || [];
  const view = findNegatives(values);
  const cumulative = view.cumulative || [];
  return { cumulative: cumulative, negatives: view.negatives || [],
           first_negative: view.first_negative, final: view.final || 0,
           count: cumulative.length, value_count: values.length,
           checked: cumulative.length === values.length };
}
