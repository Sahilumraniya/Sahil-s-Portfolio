import { useRef, useState } from "react";
import { user, email, telephone, github } from "../assets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../HOC";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

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
    // emailjs.sendForm('service_xzrj11k', 'template_7z0owbh', form.current, 'rr1WIJ3tFiunLA5g-')
    //   .then((result) => {
    //     <ToastContainer
    //       position="top-center"
    //       autoClose={5000}
    //       hideProgressBar={false}
    //       newestOnTop={false}
    //       closeOnClick
    //       rtl={false}
    //       pauseOnFocusLoss
    //       draggable
    //       pauseOnHover
    //       theme="dark"
    //     />
    //   }, (error) => {
    //     // show the user an error
    //   });
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
      <motion.div variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <div
          id="contact"
          className="bg-tertiary w-full h-[545px] md:mx-14 md:mt-10 rounded-md p-10 sm:flex sm:flex-row hidden content-between gap-x-2"
        >
          <div className="left w-1/2 text-3xl overflow-hidden">
            <div>Contect US</div>
            <div className="flex-col w-[100%] h-full items-center justify-center">
              <div className="self-center">
                <a href="tel:+919327201427">
                  <div className="flex mt-5 items-center w-[85%] p-5 rounded-[20px] sheadow-card">
                    <img
                      src={`${telephone}`}
                      alt="phone"
                      srcSet=""
                      className="w-[50px] h-[50px]"
                    />
                    <div className="ml-5 hover:border-b-2 hover:border-purple-600 rounded-sm ">
                      +91 9327201427
                    </div>
                  </div>
                </a>
                <a href="mailto:sahilumraniya9512@gmail.com">
                  <div className="flex mt-5 items-center w-[85%] p-5 rounded-[20px] sheadow-card">
                    <img
                      src={`${email}`}
                      alt="phone"
                      srcSet=""
                      className="w-[50px] h-[50px]"
                    />
                    <div className="ml-5 hover:border-b-2 hover:border-purple-600 rounded-sm text-xl ">
                      sahilumraniya9512@gmail.com
                    </div>
                  </div>
                </a>
                <a href="https://github.com/Sahilumraniya" target="_bank">
                  <div className="flex mt-5 items-center w-[85%] p-5 rounded-[20px] sheadow-card">
                    <img
                      src={`${github}`}
                      alt="phone"
                      srcSet=""
                      className="w-[50px] h-[50px]"
                    />
                    <div className="ml-5 hover:border-b-2 hover:border-purple-600 rounded-sm text-xl ">
                      Vist my github profile to see more project
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="right relative w-1/2 h-full rounded-md text-black">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mt-10 ml-10">
                <label htmlFor="name" className="text-white">
                  Your Name
                </label>
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
                    className="bg-white mt-1 w-[85%] border-solid border-[2px] border-gray-500 text-lg py-1 pl-8 rounded-md px-2 focus:border-y-black-100 outline-none"
                    type="text"
                  ></input>
                </div>
              </div>
              <div className="mt-3 ml-10">
                <label htmlFor="email" className="text-white">
                  Email
                </label>
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
                    className="bg-white mt-1 w-[85%] border-solid border-[2px] border-gray-500 text-lg pl-8 py-1 rounded-md px-2 focus:border-y-black-100 outline-none"
                    type="email"
                  ></input>
                </div>
              </div>
              <div className="mt-3 ml-10">
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
                  className="bg-white mt-1 w-[85%] border-solid border-[2px] border-gray-500 text-lg p-2 rounded-md px-2 focus:border-y-black-100 outline-none"
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <input
                type="submit"
                className="bg-violet-800 hover-bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 my-2 cursor-pointer float-right mr-16"
                value="Send message"
              />
              {/* <button onClick={sendEmail}  >Send message</button> */}
            </form>
          </div>
        </div>
      </motion.div>
      {/* Phone */}
      <motion.div variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <div className="sm:hidden bg-tertiary mx-5 rounded-lg overflow-hidden">
          <div className="up h-[30%] w-full text-3xl p-4">
            <div className="text-center">Contect US</div>
            <div className="flex-col w-[100%] h-full items-center justify-center mt-4">
              <div className="self-center">
                <a href="tel:+919327201427">
                  <div className="flex mt-1 items-center w-[100%] p-1 rounded-[20px] sheadow-card">
                    <img
                      src={`${telephone}`}
                      alt="phone"
                      srcSet=""
                      className="w-[25px] h-[25px]"
                    />
                    <div className="ml-5 max-w-fit hover:border-b-2 hover:border-purple-600 rounded-sm text-sm">
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
                      className="w-[25px] h-[25px]"
                    />
                    <div className="ml-5 hover:border-b-2 hover:border-purple-600 rounded-sm text-sm">
                      sahilumraniya9512@gmail.com
                    </div>
                  </div>
                </a>
                <a href="https://github.com/Sahilumraniya" target="_bank">
                  <div className="flex mt-1 items-center w-[100%] p-1 rounded-[20px] sheadow-card">
                    <img
                      src={`${github}`}
                      alt="phone"
                      srcSet=""
                      className="w-[25px] h-[25px]"
                    />
                    <div className="ml-5 hover:border-b-2 hover:border-purple-600 rounded-sm text-sm">
                      Vist my github profile to see more project
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="down w-full h-full my-2">
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
                      className="bg-white mt-1 w-[100%] border-solid border-[2px] border-gray-500 text-xl pl-8 rounded-md px-2 focus:border-y-black-100 outline-none"
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
                      className="bg-white mt-1 w-[100%] border-solid border-[2px] border-gray-500 text-xl pl-8 py-1 rounded-md px-2 focus:border-y-black-100 outline-none"
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
                  className="bg-violet-800 hover-bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 my-2 mx-2"
                  value="Send message"
                />
                {/* <button onClick={sendEmail}  >Send message</button> */}
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
