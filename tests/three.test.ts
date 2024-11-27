import { testDelay } from "../utils";
import { describe, expect, it } from "vitest";

describe("three", () => {
  it("works", async () => {
    await new Promise((resolve) => setTimeout(resolve, testDelay));
    expect(3).toBe(3);
  });
});
