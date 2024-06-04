/* eslint-disable react-refresh/only-export-components */
import { useRef, useState } from "react";
import { user, email, telephone, github, linkedln } from "../assets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../HOC";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Meteors } from "./UI/meteors";
import { Input } from "./UI/input";
import "animate.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    if (name === "" || email === "" || message === "") {
      toast.error("Not any filed are empty!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    // console.log(name,mail,message)
    await toast.promise(
      emailjs
        .sendForm(
          "service_xzrj11k",
          "template_xwkn71u",
          form.current,
          "rr1WIJ3tFiunLA5g-"
        )
        .then((result) => {
          console.log(result);
          setMessage("");
          setName("");
          setmail("");
        }),
      {
        pending: `Email is sending, Please Waiting`,
        success: "Thank you for contect me,I will contect you very soon",
        error: "OOP!, Something went worng,try again",
      }
    );
  };

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* Desktop */}
      <motion.div variants={fadeIn("left", "spring", 0.2, 0.42)}>
        <div
          id="contact"
          className="bg-tertiary w-full h-[545px] md:mx-14 md:mt-10 rounded-md p-10 sm:flex sm:flex-row hidden content-between gap-x-2"
        >
          <div className="left w-1/2 text-3xl overflow-hidden">
            <div>
              Contact US
              <Meteors number={10} />
            </div>
            <div className="flex-col w-[100%] h-full items-center justify-center">
              <div className="self-center">
                <div className="flex mt-5 items-center p-5 rounded-[20px] sheadow-card">
                  <img
                    src={`${telephone}`}
                    alt="phone"
                    srcSet=""
                    className="w-[50px] h-[50px]"
                  />
                  <div className="ml-5 hover:border-b-2 hover:border-purple-600 rounded-sm ">
                    <a href="tel:+919327201427"> +91 9327201427 </a>
                  </div>
                </div>

                <div className="flex mt-5 items-center w-[85%] p-5 rounded-[20px] sheadow-card">
                  <img
                    src={`${email}`}
                    alt="phone"
                    srcSet=""
                    className="w-[50px] h-[50px]"
                  />
                  <div className="ml-5 hover:border-b-2 hover:border-purple-600 rounded-sm text-xl ">
                    <a href="mailto:sahilumraniya9512@gmail.com">
                      sahilumraniya9512@gmail.com
                    </a>
                  </div>
                </div>
                <div className="relative mt-10 flex">
                  <div className="p-5 rounded-[20px] sheadow-card">
                    <a href="https://github.com/Sahilumraniya" target="_bank">
                      <img
                        src={`${github}`}
                        alt="phone"
                        srcSet=""
                        className="w-[50px] h-[50px] "
                      />
                    </a>
                  </div>
                  <div className="p-5 rounded-[20px] sheadow-card">
                    <a
                      href="https://www.linkedin.com/in/sahil-umraniya-9b2728297/"
                      target="_bank"
                    >
                      <img
                        src={`${linkedln}`}
                        alt="phone"
                        srcSet=""
                        className="w-[50px] h-[50px]"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="dark right relative w-1/2 h-full rounded-md text-black">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mt-10 ml-10">
                <label htmlFor="name" className="text-white">
                  Your Name
                </label>
                <br />
                <div className="dark w-[85%] relative">
                  <img
                    src={`${user}`}
                    alt="user"
                    srcSet=""
                    className="absolute left-2 top-[30%] w-5 h-5"
                  />
                  <Input
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    name="name"
                    id="name"
                    type="text"
                  ></Input>
                </div>
              </div>
              <div className="mt-3 ml-10">
                <label htmlFor="email" className="text-white">
                  Email
                </label>
                <br />
                <div className="relative dark w-[85%]">
                  <img
                    src={`${email}`}
                    alt="user"
                    srcSet=""
                    className="absolute left-2 top-[30%] w-5 h-5"
                  />
                  <Input
                    value={mail}
                    onChange={(e) => {
                      setmail(e.target.value);
                    }}
                    name="email"
                    id="email"
                  ></Input>
                </div>
              </div>
              <div className="dark mt-3 ml-10">
                <label className="text-white" htmlFor="message">
                  Message
                </label>
                <br />
                {/* <input className='bg-white mt-1 w-[85%] border-solid border-[2px] border-gray-900 text-lg pl-8 rounded-md px-2 focus:border-y-black-100 outline-none'  type='email' id='email'></input> */}
                <textarea
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  name="message"
                  id="message"
                  className="bg-zinc-800 mt-1 w-[85%] border-solid border-[2px] border-gray-500 text-lg p-2 rounded-md px-2 text-white outline-none"
                  cols="30"
                  rows="5"
                ></textarea>
              </div>

              <input
                type="submit"
                className="animate-shimmer items-center justify-center rounded-md border border-violet-800 bg-[linear-gradient(110deg,#2d1340,45%,#79467e,55%,#2d1340)] bg-[length:200%_100%] font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-violet-50 float-right hover:cursor-pointer mt-3 mx-16 py-2 px-5"
                value="Send message"
              ></input>
            </form>
          </div>
        </div>
      </motion.div>
      {/* Phone */}
      <motion.div variants={fadeIn("left", "spring", 0.2, 0.4)}>
        <div className="sm:hidden bg-tertiary rounded-lg overflow-hidden">
          <div className="up h-[50%] w-full text-3xl p-4">
            <div className="text-center bg">
              Contact US
              <Meteors number={10} />
            </div>
            <hr className="mt-5" />
            <div className="flex-col w-[100%] h-full items-center justify-center mt-4">
              <div className="self-center">
                <a href="tel:+919327201427">
                  <div className="flex mt-1 items-center w-[100%] p-1 rounded-[20px] sheadow-card">
                    <img
                      src={`${telephone}`}
                      alt="phone"
                      srcSet=""
                      className="w-[50px] h-[50px]"
                    />
                    <div className="ml-5 max-w-fit hover:border-b-2 hover:border-purple-600 rounded-sm text-[20px]">
                      +91 9327201427
                    </div>
                  </div>
                </a>
                <a href="mailto:sahilumraniya9512@gmail.com">
                  <div className="flex mt-1 items-center w-[100%] p-1 rounded-[20px] sheadow-card">
                    <img
                      src={`${email}`}
                      alt="phone"
                      srcSet=""
                      className="w-[50px] h-[50px]"
                    />
                    <div className="ml-5 hover:border-b-2 hover:border-purple-600 rounded-sm text-sm">
                      sahilumraniya9512@gmail.com
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="down w-full h-[50%] mt-2">
            <div className=" bg-slate-50 rounded-md text-black overflow-hidden">
              <form ref={form} onSubmit={sendEmail}>
                <div className="mt-2 mx-2">
                  <label htmlFor="name">Your Name</label>
                  <br />
                  <div className="relative">
                    <img
                      src={`${user}`}
                      alt="user"
                      srcSet=""
                      className="absolute left-2 top-[30%] w-5 h-5"
                    />
                    <input
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      name="name"
                      id="name"
                      className="bg-white mt-1 w-[100%] border-solid border-[2px] border-gray-500 text-xl pl-9 py-1 rounded-md px-2 focus:border-y-black-100 outline-none"
                      type="text"
                    ></input>
                  </div>
                </div>
                <div className="mt-2 mx-2">
                  <label htmlFor="email">Email</label>
                  <br />
                  <div className="relative w-full">
                    <img
                      src={`${email}`}
                      alt="user"
                      srcSet=""
                      className="absolute left-2 top-[30%] w-5 h-5"
                    />
                    <input
                      value={mail}
                      onChange={(e) => {
                        setmail(e.target.value);
                      }}
                      name="email"
                      id="email"
                      className="bg-white mt-1 w-[100%] border-solid border-[2px] border-gray-500 text-xl pl-9 py-1 rounded-md px-2 focus:border-y-black-100 outline-none"
                      type="email"
                    ></input>
                  </div>
                </div>
                <div className="mt-2 mx-2">
                  <label htmlFor="message">Message</label>
                  <br />
                  {/* <input className='bg-white mt-1 w-[85%] border-solid border-[2px] border-gray-900 text-lg pl-8 rounded-md px-2 focus:border-y-black-100 outline-none'  type='email' id='email'></input> */}
                  <textarea
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    name="message"
                    id="message"
                    className="bg-white mt-1 w-[100%] border-solid border-[2px] border-gray-500 text-lg p-2 rounded-md px-2 focus:border-y-black-100 outline-none"
                    cols="30"
                    rows="5"
                  ></textarea>
                </div>
                <input
                  type="submit"
                  className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-violet-800 bg-[linear-gradient(110deg,#2d1340,45%,#79467e,55%,#2d1340)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-violet-50 my-2 mx-2"
                  value="Send message"
                />
              </form>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="p-5 rounded-[20px] sheadow-card">
                <a href="https://github.com/Sahilumraniya" target="_bank">
                  <img
                    src={`${github}`}
                    alt="phone"
                    srcSet=""
                    className="w-[50px] h-[50px] "
                  />
                </a>
              </div>
              <div className="p-5 rounded-[20px] sheadow-card">
                <a
                  href="https://www.linkedin.com/in/sahil-umraniya-9b2728297/"
                  target="_bank"
                >
                  <img
                    src={`${linkedln}`}
                    alt="phone"
                    srcSet=""
                    className="w-[50px] h-[50px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
