import { testDelay } from "../utils";
import { describe, expect, it } from "vitest";

describe("four", () => {
  it("works", async () => {
    await new Promise((resolve) => setTimeout(resolve, testDelay));
    expect(4).toBe(4);
  });
});
