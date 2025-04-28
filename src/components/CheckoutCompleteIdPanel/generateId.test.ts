import { generateId } from "./generateId";

describe("generateId", () => {
  it("generates a valid ID in the format XXX-XXX-XXX", () => {
    const id = generateId();
    expect(id).toMatch(/^\d{3}-\d{3}-\d{3}$/);
  });
});
