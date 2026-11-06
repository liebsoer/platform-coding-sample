import test from "node:test";
import assert from "node:assert/strict";
import { hello } from "../src/hello.js";

test("hello returns sample greeting", () => {
  assert.equal(hello(), "hello from platform-coding-sample");
});
