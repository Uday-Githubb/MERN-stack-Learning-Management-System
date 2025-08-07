import mongoose from "mongoose";
import User from "../../server/models/User.js";

describe("User model", () => {
  it("creates a user with required fields", async () => {
    const user = new User({ email: "x@y.com", passwordHash: "hash" });
    expect(user.email).toBe("x@y.com");
    expect(user.role).toBe("Student");
  });
});
