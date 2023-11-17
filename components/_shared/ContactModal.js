import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import ContactForm from "../form/ContactForm";

export default function ContactModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        onClick={openModal}
        className="font-medium whitespace-nowrap transition-all duration-300 ease-in text-slate-600 hover:text-sky-600 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.6}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        {/* onClose={closeModal} to allow close on esc and click outside */}
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-500"
                // enterFrom="opacity-0 scale-95"
                enterFrom="opacity-0 transform -translate-y-full"
                enterTo="opacity-100"
                leave="ease-in duration-300"
                // leaveFrom="opacity-100 scale-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0 transform -translate-y-full"
              >
                <Dialog.Panel className="w-full max-w-md transform rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                  <ContactForm />

                  <button
                    onClick={closeModal}
                    className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 rounded-full shadow hover:scale-[1.05] hover:bg-sky-100 transition bg-white h-8 w-8 text-sm"
                  >
                    X
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
