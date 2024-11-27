import { testDelay } from "../utils";
import { describe, expect, it } from "vitest";

describe("one", () => {
  it("works", async () => {
    await new Promise((resolve) => setTimeout(resolve, testDelay));
    expect(1).toBe(1);
  });
});
