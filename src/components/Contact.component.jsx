import Input from "../sub-components/Input.sub-component";

const Contact = () => {
  return (
    <>
      <Input
        id="contact-name"
        type="text"
        placeholder="NAME"
        label="Your Name"
        svg="person"
      />
      <Input
        id="contact-email"
        type="text"
        placeholder="EMAIL"
        label="Your Email"
        svg="email"
      />
      <Input
        id="contact-message"
        type="text"
        placeholder="MESSAGE"
        label="Send Message"
        svg="message"
      />
    </>
  );
};

export default Contact;
