import Input from "../sub-components/Input.sub-component";

const Contact = () => {
  return (
    <>
      <div className="flex flex-row justify-center w-full h-full">
        <div className="flex flex-col justify-center w-1/2">
          <h1 className="text-white">dasdadad</h1>
        </div>
        <div className="flex flex-col justify-center w-1/2">
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
        </div>
      </div>
    </>
  );
};

export default Contact;
