const nodemailer = require("nodemailer");

exports.sendMailforVerification = async (name, email, id, teacher, student) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SENDER_MAIL,
        pass: process.env.SENDER_PASSWORD,
      },
    });
    await transporter.sendMail({
      from: process.env.SENDER_MAIL,
      to: email,
      subject: "Email for verification",
      html: `<p>${name} Click here to <a href="${
        process.env.BASE_FRONTEND_URL
      }/verify/${id}?role=${teacher ? "teacher" : "student"}">Verify</a></p>`,
    });
  } catch (error) {
    console.log(error);
  }
};
