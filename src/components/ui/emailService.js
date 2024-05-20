import emailjs from "@emailjs/browser";

const emailService = async ({ message, toName, toEmail }) => {
  const serviceId = "service_om433u9";
  const templateId = "template_zzith2l";
  const publicKey = "9BN6G8lDUWm0rzkqZ";

  const templateParams = {
    to_name: toName,
    from_name: "ClinicKhojo",
    reset_url: message,
    to_email: toEmail,
  };

  try {
    const eres = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );
    console.log("email sent");
    return true;
  } catch (e) {
    console.log("error sending email", e);
    return false;
  }
};

export default emailService;
