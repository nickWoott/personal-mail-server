export const authenticateToken = (req, res, next) => {
  const { API_KEY } = process.env;
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res
      .status(401)
      .json({ status: 401, message: "no authorisation token provided" });
  }

  if (token !== API_KEY) {
    return res
      .status(403)
      .json({ status: 403, message: "invalid authorisation token" });
  }

  next();
};
