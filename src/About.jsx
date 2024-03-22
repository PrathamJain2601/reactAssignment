import React from 'react';
import Navbar from './components/navbar/Navbar'
import Card from './components/card/Card'
import Footer from "./components/footer/Footer";

const Contact = () => {
    return (
        <>
            <Navbar />
            <section className="text-textColor body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Card heading="Pratham Jain" view="1.5k" />
            <Card heading="Hare Krishna" view="8.8k" />
            <Card heading="Vardaan Pahwa" view="4.9k" />
            <Card heading="Hare Krishna" view="8.8k" />
            <Card heading="Random Name" view="2.4k" />
            <Card heading="Pratham Jain" view="1.5k" />
            <Card heading="Pratham Jain" view="1.5k" />
            <Card heading="Vardaan Pahwa" view="4.9k" />
            <Card heading="Random Name" view="2.4k" />
            <Card heading="Vardaan Pahwa" view="4.9k" />
            <Card heading="Hare Krishna" view="8.8k" />
            <Card heading="Random Name" view="2.4k" />
          </div>
        </div>
      </section>
      <Footer />
        </>
    );
}

export default Contact;
