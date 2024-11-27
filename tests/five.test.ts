import { testDelay } from "../utils";
import { describe, expect, it } from "vitest";

describe("five", () => {
  it("works", async () => {
    await new Promise((resolve) => setTimeout(resolve, testDelay));
    expect(5).toBe(5);
  });
});
