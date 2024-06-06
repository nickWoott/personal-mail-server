import nodemailer from "nodemailer";

export const sendMail = async (req, res) => {
  let transport = nodemailer.createTransport({
    service: "icloud",
    auth: { user: "nicholaswootton@icloud.com", pass: "xuju-wbkg-fffv-pzeu" },
  });

  const { name, message, email } = req.body;

  let mailOptions = {
    from: "nicholaswootton@icloud.com",
    to: "nicholaswootton@icloud.com",
    subject: "personal website query",
    text: `Name: ${name}\n Email: ${email}\n Message: ${message}`,
    html: `<p>Name: ${name}</p> <p>Email: ${email}</p> <p>${message}</p>`,
  };
  //deconstruct these things that are coming from the req.body

  try {
    await transport.sendMail(mailOptions);
    res.status(200).send("Email sent succesfully");
  } catch (err) {
    console.error(err, "error sending email");
    res.status(500).send("error sending email");
  }
};
