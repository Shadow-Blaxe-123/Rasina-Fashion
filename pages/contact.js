import React from "react";

export default function contact() {
  return (
    <div className="md:px-24 md:mx-20 m-4 pt-24 min-h-screen">
      <section className="text-gray-600 body-font relative ">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            // className="grayscale contrast-125 opacity-50"
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.45412247263033!2d90.49235762018785!3d23.63064455708706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b148a328b927%3A0x6b015722d282061a!2sRasina%20Fashion!5e0!3m2!1sen!2sbd!4v1702902511948!5m2!1sen!2sbd"
            // style={"filter: grayscale(1) contrast(1.2) opacity(0.4);"}
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-black text-3xl font-bold mb-1 title-font">
              Office & Factory Address
            </h2>
            <p className="leading-relaxed text-xl font-bold text-gray-500">
              Rasina Fashion
            </p>
            <p className="leading-relaxed text-lg mb-5 text-gray-500">
              Misir Ali House, Isdair Bazar, Fatullah, Narayanganj-1400,
              Bangladesh.
            </p>
            <p className="text-base text-gray-500 ">Phone: +8801911361057</p>
            <p className="text-base text-gray-500 ">WhatsApp: +8801911361057</p>
            <p className="text-base text-gray-500 ">
              Email: russel@rasinafashion.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
