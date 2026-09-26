import assert from "node:assert";
import { accumulate } from "../accumulate.js";
import { findNegatives } from "../negatives.js";
import { render } from "../app.js";

let failed = 0;
function check(name, fn) {
  try { fn(); console.log("ok " + name); } catch (e) { failed += 1; console.log("FAIL " + name + " :: " + e.message); }
}

check("accumulate returns a list", () => {
  assert.ok(Array.isArray(accumulate([1, 2])));
});

check("findNegatives returns cumulative", () => {
  assert.ok(Array.isArray(findNegatives([1, 2]).cumulative));
});

check("findNegatives returns negatives", () => {
  assert.ok(Array.isArray(findNegatives([1, 2]).negatives));
});

check("render counts values", () => {
  assert.strictEqual(typeof render({ values: [1] }).count, "number");
});

check("render exposes first negative", () => {
  assert.strictEqual(typeof render({ values: [1] }).first_negative, "number");
});

console.log("5 cases, " + failed + " failed");
process.exit(failed === 0 ? 0 : 1);
