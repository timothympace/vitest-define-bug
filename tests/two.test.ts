import { testDelay } from "../utils";
import { describe, expect, it } from "vitest";

describe("two", () => {
  it("works", async () => {
    await new Promise((resolve) => setTimeout(resolve, testDelay));
    expect(2).toBe(2);
  });
});
