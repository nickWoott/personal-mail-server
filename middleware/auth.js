export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(401).send("no authorisation token provided");
  }

  if (token !== "test-token") {
    return res.status(403).send("invalid authorisation token");
  }

  next();
};
