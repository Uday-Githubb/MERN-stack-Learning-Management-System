import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const sign = (payload) => jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "15m" });
const signRefresh = (payload) => jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" });

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });
    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ message: "Invalid credentials" });
    const token = sign({ sub: user.id, role: user.role });
    const refresh = signRefresh({ sub: user.id });
    user.refreshToken = refresh;
    await user.save();
    res.json({ token, refresh, user: { id: user.id, email: user.email, role: user.role } });
  } catch (e) { next(e); }
};

export const refresh = async (req, res, next) => {
  try {
    const { refresh } = req.body;
    const decoded = jwt.verify(refresh, process.env.JWT_REFRESH_SECRET);
    const user = await User.findById(decoded.sub);
    if (!user || user.refreshToken !== refresh) return res.status(401).json({ message: "Invalid refresh" });
    const token = sign({ sub: user.id, role: user.role });
    res.json({ token });
  } catch (e) { next(e); }
};

export const register = async (req, res, next) => {
  try {
    const { email, password, role } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, passwordHash: hash, role });
    res.status(201).json({ id: user.id, email: user.email, role: user.role });
  } catch (e) { next(e); }
};
