import React from "react";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <section class="text-textColor body-font ">
        <div class="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center w-3/4">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-borderColor">
              Before We get Working
              <br class="hidden lg:inline-block" />
              Welcome Home
            </h1>
            <p class="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-primary bg-borderColor border-0 py-2 px-6 focus:outline-none rounded text-lg">
                Button
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
      <section class="text-textColor body-font">
        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-wrap -m-4">
            <Card heading="Pratham Jain" view="1.5k" />
            <Card heading="Vardaan Pahwa" view="4.9k" />
            <Card heading="Hare Krishna" view="8.8k" />
            <Card heading="Random Name" view="2.4k" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
