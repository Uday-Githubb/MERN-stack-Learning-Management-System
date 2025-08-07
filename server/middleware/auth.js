import jwt from "jsonwebtoken";

export const authGuard = (req, res, next) => {
  const auth = req.headers.authorization || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export const roleGuard = (roles = []) => (req, res, next) => {
  const role = req.user?.role;
  if (!role || !roles.includes(role)) return res.status(403).json({ message: "Forbidden" });
  next();
};
