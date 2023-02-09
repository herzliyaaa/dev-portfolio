import Input from "../sub-components/Input.sub-component";
import catInBalloon from "../images/icons/cat.gif";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    //<div className="flex min-h-screen">
    <div className="row">
      <div className="flex column items-start justify-center">
        <img src={catInBalloon} alt="cat-qt" width={280} height={280} />
      </div>
      <div className="column w-[1000px] ">
        <motion.h1
          transition={{
            type: "tween",
            duration: 1,
            delay: 1,
            repeatType: "reverse",
            repeat: Infinity,
          }}
          className="stroke-text text-3xl justify-center items-center flex"
        >
          Connect with me.
        </motion.h1>
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
          multiLine="Yes"
          // className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="contact-message"
          type="text"
          placeholder="MESSAGE"
          label="Send Message"
          svg="message"
        />
      </div>
    </div>
    // </div>
  );
};

export default Contact;
