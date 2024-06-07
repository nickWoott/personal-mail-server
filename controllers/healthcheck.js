// what are you going to return here

export const healthcheck = async (req, res) => {
  return res
    .status(200)
    .json({ status: 200, message: "api is up and runnning" });
};
