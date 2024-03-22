import React from "react";
import Iframe from 'react-iframe'

const Form = () => {
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-12 py-6 mx-auto flex sm:flex-nowrap flex-wrap w-4/5">
          <div className="lg:w-3/5 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 px-16 py-6 flex items-end justify-start relative">
          
          <Iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14413.185476410414!2d81.7666696338466!3d25.42835340079981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398533530cce2e67%3A0xbf1514c2084929b7!2sIndian%20Institute%20of%20Information%20Technology%2C%20Jhalwa%2C%20Prayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1711102804968!5m2!1sen!2sin" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></Iframe>


            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Indian Institute of Information Technology, Allahabad, Uttar Pradesh
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">iit2023248@iiita.ac.in</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">7707990624</p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/5 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-borderColor text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-textColor">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-textColor">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-primary rounded border border-gray-300 focus:border-borderColor focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-textColor">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-primary rounded border border-gray-300 focus:border-borderColor focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-textColor">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-primary rounded border border-gray-300 focus:border-borderColor focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-primary bg-borderColor border-0 py-2 px-6 focus:outline-none rounded text-lg">
              Button
            </button>
            <p className="text-xs text-gray-500 mt-3">
              You Agree all the Terms and Conditions
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
