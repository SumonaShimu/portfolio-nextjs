"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { BsArrowUpRight } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import Heading from "./Heading";
import ButtonLink from "./ButtonLink";
import { MdOutgoingMail } from "react-icons/md";


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

      <div className="mt-20 grid justify-center items-center gap-20">

      <form
          ref={form}
          onSubmit={handleSubmit}
          className="right flex flex-col gap-10 text-xl md:text-2xl w-full border bg-accent/50 p-10 rounded-xl"
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

          <div className="lg:text-xl flex flex-wrap lg:flex-nowrap justify-center relative overflow-hidden duration-500 group">
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
              className="flex w-full justify-center hover:bg-accent hover:text-error duration-200 rounded-full py-3"
            >
              Send{"  "}
              <span className="group-hover:-rotate-12 duration-500">
                <MdOutgoingMail className="ms-2 text-3xl" />
              </span>
            </motion.button>
          </div>
        </form>

        <div className="left flex flex-col gap-10">
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
            </motion.div>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 md-5 lg:gap-10 text-lg lg:text-2xl">
            <div>
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
                  className="text-light/50 text-4xl"
                >
                  Email 
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1.5, delay: 0.4 }}
                className="mt-2"
              >
                <ButtonLink
                  href="mailto:sumona59shimu@gmail.com"
                  placeholder="sumona59shimu@gmail.com"
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
                  Address
                </motion.p>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1.5, delay: 0.4 }}
                className="mt-2"
              >
                Chittagong, Bangladesh
              </motion.p>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Contact;
