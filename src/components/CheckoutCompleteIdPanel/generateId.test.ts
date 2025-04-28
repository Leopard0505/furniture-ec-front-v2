import { generateId } from "./generateId";

describe("generateId", () => {
  it("generates a valid ID in the format XXX-XXX-XXX", () => {
    const id = generateId();
    expect(id).toMatch(/^\d{3}-\d{3}-\d{3}$/);
  });

  it("generates IDs within the expected range", () => {
    for (let i = 0; i < 100; i++) {
      const id = generateId();
      const numericId = parseInt(id.replace(/-/g, ""), 10);
      expect(numericId).toBeGreaterThanOrEqual(100000000);
      expect(numericId).toBeLessThanOrEqual(999999999);
    }
  });
});
