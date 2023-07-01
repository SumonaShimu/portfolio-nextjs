"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { BsArrowUpRight } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import Heading from "./Heading";
import ButtonLink from "./ButtonLink";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    /* EMAIL JS */
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        form.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_PUBLIC_ID as string
      )
      .then(
        () => {
          toast.success("Message sent!");
        },
        () => {
          toast.error("Message not sent!");
        }
      );

    /* RESET FORM FIELDS */
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="wrapper section-padding">
      <Heading title="Contact Me" />

      <div className="mt-20 grid grid-cols-2 gap-20">
        <div className="left flex flex-col gap-10">
          <div className="overflow-hidden">
            <motion.h4
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              className="text-5xl"
            >{`Let's unlock together the next level of possibilities! Reach out.`}</motion.h4>
          </div>
          <div className="text-2xl">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
                className="text-light/50 text-4xl"
              >
                Social Media
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1.5, delay: 0.3 }}
              className="flex gap-5 mt-2 flex-wrap"
            >
              <ButtonLink href="#" placeholder="Facebook" target="_blank" />
              <ButtonLink href="#" placeholder="Twitter" target="_blank" />
              <ButtonLink href="#" placeholder="Instagram" target="_blank" />
              <ButtonLink href="#" placeholder="LinkedIn" target="_blank" />
              <ButtonLink href="#" placeholder="GitHub" target="_blank" />
            </motion.div>
          </div>
          <div className="flex gap-10 text-2xl">
            <div>
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
                  className="text-light/50 text-4xl"
                >
                  Get in touch
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1.5, delay: 0.4 }}
                className="mt-2"
              >
                <ButtonLink
                  href="mailto:shohan.sub.56@gmail.com"
                  placeholder="shohan.sub.56@gmail.com"
                  target="_blank"
                />
              </motion.div>
            </div>
            <div>
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ ease: "easeInOut", duration: 1, delay: 0.6 }}
                  className="text-light/50 text-4xl"
                >
                  Location
                </motion.p>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1.5, delay: 0.4 }}
                className="mt-2"
              >
                Sirajganj, Bangladesh
              </motion.p>
            </div>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="right flex flex-col gap-10 text-2xl w-full"
        >
          <div className="flex gap-10 w-full">
            <div className="overflow-hidden w-full">
              <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: 0 }}
                transition={{ ease: "easeInOut", duration: 1 }}
                className="form-control w-full"
              >
                <input
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  type="text"
                  name="fullname"
                  placeholder="Name"
                  className="w-full outline-none bg-transparent border-b border-light/50 pb-2 focus:border-accent duration-500"
                />
              </motion.div>
            </div>
            <div className="overflow-hidden w-full">
              <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: 0 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
                className="form-control w-full"
              >
                <input
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full outline-none bg-transparent border-b border-light/50 pb-2 focus:border-accent duration-500"
                />
              </motion.div>
            </div>
          </div>
          <div className="overflow-hidden w-full">
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
              className="form-control w-full"
            >
              <textarea
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={8}
                name="message"
                placeholder="Message"
                className="w-full outline-none bg-transparent border-b border-light/50 pb-2 focus:border-accent duration-500 resize-none"
              />
            </motion.div>
          </div>
          <div className="text-5xl flex justify-center relative overflow-hidden duration-500 group">
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              transition={{ ease: "easeInOut", duration: 1.1, delay: 1 }}
              className="shutter absolute z-[1] top-0 left-0 right-0 bottom-0 w-full h-full bg-dark"
            ></motion.div>
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              transition={{ ease: "easeInOut", duration: 1.1, delay: 0.8 }}
              className="shutter absolute z-[2] top-0 left-0 right-0 bottom-0 w-full h-full bg-accent"
            ></motion.div>
            <motion.button
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
              type="submit"
              className="uppercase flex w-full gap-3 justify-center"
            >
              Submit{" "}
              <span className="group-hover:rotate-90 duration-500">
                <BsArrowUpRight />
              </span>
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
