import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { Leaf1, Leaf2 } from "../assets";
import { db } from "../config/firebase.config";
import { Alert } from "./";

const Contact = () => {
  const [data, setData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [alert, setAlert] = React.useState({
    isAlert: false,
    message: "",
    status: null,
  });

  const handleTextChange = (ev) => {
    const { name, value } = ev.target;
    // update the state
    setData((preData) => ({ ...preData, [name]: value }));
  };

  const sendMessage = async () => {
    if (data.email === "" || data.email === null) {
      // throw allert
      setAlert({
        isAlert: true,
        message: "Required fields connot be empty",
        status: "warning",
      });

      setTimeout(() => {
        setAlert({
          isAlert: false,
          message: "",
          status: null,
        });
      }, 4000);
    } else {
      await addDoc(collection(db, "messages"), { ...data })
        .then(() => {
          // throw the aalert
          setData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
          setAlert({
            isAlert: true,
            message: "Thanks fro contacting me!",
            status: "success",
          });

          setTimeout(() => {
            setAlert({
              isAlert: false,
              message: "",
              status: null,
            });
          }, 4000);
        })
        .catch((er) => {
          // throw error
          setAlert({
            isAlert: true,
            message: er.message,
            status: "danger",
          });

          setTimeout(() => {
            setAlert({
              isAlert: false,
              message: "",
              status: null,
            });
          }, 4000);
        });
    }
  };

  return (
    <section
      id="contact"
      className="flex items-center justify-center flex-col gap-12 my-12"
    >
      {/* alert toast */}
      <AnimatePresence>
        {alert.isAlert && (
          <Alert status={alert.status} message={alert.message} />
        )}
      </AnimatePresence>

      {/* title */}
      <div className="w-full flex items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="w-52 flex justify-center items-center"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-2xl text-texlight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize font-sans tracking-wider">
            Contact
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/* main content */}
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <div className="w-full lg:w-[600px] p-2 flex flex-col items-center justify-start gap-4">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={data?.firstName}
              onChange={handleTextChange}
              placeholder="First Name"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-[rgba(255,255,255,.3)] outline-none focus:border-primary text-white"
            />

            <input
              type="text"
              name="lastName"
              value={data?.lastName}
              onChange={handleTextChange}
              placeholder="Last Name"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-[rgba(255,255,255,.3)] outline-none focus:border-primary text-white"
            />
          </div>

          {/* email */}
          <input
            type="email"
            name="email"
            value={data?.email}
            onChange={handleTextChange}
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md bg-transparent border border-[rgba(255,255,255,.3)] outline-none focus:border-primary text-white"
          />
          <textarea
            name="message"
            id=""
            cols="0"
            rows="10"
            value={data?.message}
            onChange={handleTextChange}
            placeholder="Message here..."
            className="w-full px-4 py-3 rounded-md bg-transparent border border-[rgba(255,255,255,.3)] outline-none focus:border-primary text-white resize-none"
          ></textarea>

          <div className="w-full fllex items-center justify-center lg:justify-end">
            <button
              className="px-12 py-3 bg-gradient-to-br from-primary to-secondary rounded-md w-full lg:w-auto hover:bg-gradient-to-br hover:from-black hover:to-black hover:border border border-transparent hover:border-primary hover:text-primary"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
