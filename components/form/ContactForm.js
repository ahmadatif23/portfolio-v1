import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm(props) {
  const contactForm = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cannotSubmit, setCannotSubmit] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && phone) {
      emailjs
        .sendForm(
          "service_edwauwu",
          "template_i5hs4go",
          contactForm.current,
          "Il5utdz2v3novGZ_j"
        )
        .then(
          (result) => {
            props.onHandleCloseForm && props.onHandleCloseForm();
            e.target.reset();
          },
          (error) => {
            // console.log(error.text)
          }
        );
    }
  };

  useEffect(() => {
    setCannotSubmit(!(name && email && phone));
  }, [name, email, phone]);

  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="w-full">
          <p className="sm:text-2xl text-xl text-start font-medium mb-1">Let's get in touch</p>
          <p className="sm:text-base text-sm text-start font-normal mb-6">I am super excited to hear from you!</p>
        </div>

        <form
          ref={contactForm}
          onSubmit={handleSubmit}
          className="flex flex-col w-full gap-4"
        >
          <div className="relative flex-1">
            <input
              value={name}
              onInput={(e) => setName(e.target.value)}
              type="text"
              name="user_name"
              id="user_name"
              required
              className="relative z-10 bg-transparent focus-within:bg-white peer w-full text-sm border rounded-xl px-3 py-2 focus-within:outline-none focus-within:border-sky-600 appearance-none"
            />
            <label
              htmlFor="user_name"
              className="absolute top-0 transform transition-all duration-200 peer-valid:hidden text-slate-400 peer-focus-within:z-20 peer-focus-within:-translate-y-1/2 peer-focus-within:text-xs peer-focus-within:bg-white peer-focus-within:px-1 peer-focus-within:py-0 peer-focus-within:left-2 peer-focus-within:text-sky-600 left-3 py-2 text-sm"
            >
              Name
            </label>
          </div>

          <div className="relative flex-1">
            <input
              value={email}
              onInput={(e) => setEmail(e.target.value)}
              type="email"
              name="user_email"
              id="user_email"
              required
              className="relative z-10 bg-transparent focus-within:bg-white peer w-full text-sm border rounded-xl px-3 py-2 focus-within:outline-none focus-within:border-sky-600 appearance-none"
            />
            <label
              htmlFor="user_email"
              className="absolute top-0 transform transition-all duration-200 peer-valid:hidden text-slate-400 peer-focus-within:z-20 peer-focus-within:-translate-y-1/2 peer-focus-within:text-xs peer-focus-within:bg-white peer-focus-within:px-1 peer-focus-within:py-0 peer-focus-within:left-2 peer-focus-within:text-sky-600 left-3 py-2 text-sm"
            >
              Email Address
            </label>
          </div>

          <div className="relative flex-1">
            <input
              value={phone}
              onInput={(e) => setPhone(e.target.value)}
              type="number"
              name="user_phone"
              id="user_phone"
              required
              className="relative z-10 bg-transparent focus-within:bg-white peer w-full text-sm border rounded-xl px-3 py-2 focus-within:outline-none focus-within:border-sky-600 appearance-none"
            />
            <label
              htmlFor="user_phone"
              className="absolute top-0 transform transition-all duration-200 peer-valid:hidden text-slate-400 peer-focus-within:z-20 peer-focus-within:-translate-y-1/2 peer-focus-within:text-xs peer-focus-within:bg-white peer-focus-within:px-1 peer-focus-within:py-0 peer-focus-within:left-2 peer-focus-within:text-sky-600 left-3 py-2 text-sm"
            >
              Phone Number
            </label>
          </div>

          <button
            disabled={cannotSubmit}
            className="w-full mt-2 py-3 text-sm border rounded-xl transition text-slate-500 hover:bg-sky-600 hover:text-white hover:border-sky-600 disabled:bg-slate-100 disabled:hover:text-slate-500 disabled:border-0"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
