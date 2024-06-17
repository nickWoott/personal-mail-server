import nodemailer from "nodemailer";

//TODO: remove debugging object

export const sendMail = async (req, res) => {
  const { USER_EMAIL_ADDRESS, USER_EMAIL_PASSWORD } = process.env;

  let transport = nodemailer.createTransport({
    service: "icloud",
    auth: { user: USER_EMAIL_ADDRESS, pass: USER_EMAIL_PASSWORD },
  });

  const { name, message, email } = req.body;

  const debugObject = {
    envVars: { USER_EMAIL_ADDRESS, USER_EMAIL_PASSWORD },
    reqBody: { name, message, email },
  };

  let mailOptions = {
    from: USER_EMAIL_ADDRESS,
    to: USER_EMAIL_ADDRESS,
    subject: "personal website query",
    text: `Name: ${name}\n Email: ${email}\n Message: ${message}`,
    html: `<p>Name: ${name}</p> <p>Email: ${email}</p> <p>${message}</p>`,
  };

  try {
    await transport.sendMail(mailOptions);
    res.status(200).json({ status: 200, messaage: "Email sent succesfully" });
  } catch (err) {
    console.error(err, "error sending email");
    res.status(500).json({
      status: "500",
      message: "error sending email",
      debugObject,
      error: err,
    });
  }
};
