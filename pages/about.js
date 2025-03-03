import React from "react";

function about() {
  return (
    <div className="mx-4 my-40 md:m-32">
      <h2 className="text-4xl font-extrabold font-sans bg-white border-b-4 p-2 flex justify-center align-middle">
        About Rasina Fashion
      </h2>
      <div>
        <p className="p-5 text-2xl">
          Rasina Fashion is a manufacturer and exporter of all kind’s of knitted
          garments. It’s established at one of the prime industrial zones in old
          city of Narayanganj. 120 minutes drive from Dhaka International
          Airport. It is a established from 2020. This company have professional
          experiences and qualified management take care of the order which
          buyer provide us with trust. The factory is specializes producing
          Ladies and Men’s Kid’s, Child. Baby t-shirt, Polo shirt, fleece
          jacket’s, shorts, Trouser and all kinds of all knit items. The factory
          is also specialized working with local fabrics and trims having
          sourcing office in Bangladesh to source as per buyer’s requirement.
        </p>

        <p className="p-5 text-2xl">
          OUR GARMENTS QUALITY STRICTLY CONTROLED BY OUR EXPERIENCED QUALITY
          CONTROLLER.
        </p>
      </div>
      <div className="mt-8">
        <h3 className="text-3xl font-bold">Company at a glance:</h3>
        <p className="p-5 text-2xl">
          <b> Company Name:</b> Rasina Fashion
          <br />
          <b>Type of Business: </b>Manufacturer and Exporter
          <br />
          <b>Year of Establishment: </b>2020
        </p>
      </div>
      <div className="mt-8">
        <h3 className="text-3xl font-bold">Fabrics which we use:</h3>
        <p className="p-5 text-2xl">
          100% Cotton Single Jersey, 1x1 Rib, Pique, Lacoste, Lycra single
          Jersey, Lycra Lacoste etc.
          <br />
          60% cotton / 40% Polyester single jersey, 1x1 Rib, Pique, Lacoste,
          Lycra single jersey etc.
          <br />
          65% cotton / 35% Polyester single jersey, 1x1 Rib, Pique, Lacoste,
          Lycra single jersey etc. <br />
          65% polyester / 35% cotton single jersey, 1x1 Rib, Pique, Lacoste,
          Lycra single jersey etc.
          <br />
          85% cotton / 15% viscose single jersey, 1x1 Rib, Pique, Lacoste, Lycra
          single jersey etc.
          <br />
          90% cotton / 10% viscose single jersey, 1x1 Rib, Pique, Lacoste, Lycra
          single jersey etc.
          <br />
        </p>
      </div>
      {/* TODO: ADD more info from the word document */}
      <div className="mt-8">
        <h3 className="text-3xl font-bold">Knitting Machine Information</h3>
        <div className="p-2 text-2xl">
          <table className="w-full mt-5 border-collapse">
            <thead className="text-left ">
              <tr>
                <th className="border border-solid border-black">NO.</th>
                <th className="border border-solid border-black">DIA</th>
                <th className="border border-solid border-black">G.G</th>
                <th className="border border-solid border-black">M/C TYPE</th>
                <th className="border border-solid border-black">BRAND</th>
                <th className="border border-solid border-black">ORIGIN</th>
                <th className="border border-solid border-black">QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>20’’</td>
                <td>24</td>
                <td>S/J</td>
                <td>FUKUHAMA</td>
                <td>TAIWAN</td>
                <td>2 SET</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>21’’</td>
                <td>24</td>
                <td>S/J</td>
                <td>FUKUHAMA</td>
                <td>TAIWAN</td>
                <td>2 SET</td>
              </tr>
              <tr>
                <td>3.</td>
                <td>22’’</td>
                <td>24</td>
                <td>S/J</td>
                <td>DAE YANG</td>
                <td>KOREA</td>
                <td>2 SET</td>
              </tr>
              <tr>
                <td>4.</td>
                <td>23’’</td>
                <td>24</td>
                <td>S/J</td>
                <td>DAE YANG</td>
                <td>KOREA</td>
                <td>2 SET</td>
              </tr>
              <tr>
                <td>5.</td>
                <td>24’’</td>
                <td>24</td>
                <td>S/J</td>
                <td>DAE YANG</td>
                <td>KOREA</td>
                <td>2 SET</td>
              </tr>
              <tr>
                <td>6.</td>
                <td>36’’</td>
                <td>16</td>
                <td>RIB LYCRA ATTACH</td>
                <td>FUKUHAMA</td>
                <td>TAIWAN</td>
                <td>1 SET</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-3xl font-bold">Commitment to Sustainability </h3>
        <p className="p-5 text-2xl">
          Rasina Fashion is committed to sustainability. We believe in
          responsible manufacturing practices, emphasizing eco-friendly
          materials and ethical production processes. Our commitment extends to
          minimizing our environmental footprint, ensuring a harmonious
          coexistence with nature.
        </p>
      </div>
      <div className="mt-8">
        <h3 className="text-3xl font-bold">Customer-Centric Philosophy</h3>
        <p className="p-5 text-2xl">
          At the heart of our ethos lies a profound dedication to our customers.
          We prioritize their satisfaction and seek to establish enduring
          relationships built on trust, reliability, and exceptional service.
        </p>
      </div>
      <div className="mt-8">
        <h3 className="text-3xl font-bold">A Vision for the Future</h3>
        <p className="p-5 text-2xl">
          As we continue our journey, Rasina Fashion remains unwavering in its
          pursuit of excellence. With an eye on the future, we envision scaling
          new heights, setting benchmarks, and leaving an indelible mark in the
          world of fashion.
        </p>
      </div>
      <div className="mt-8">
        <h3 className="text-3xl font-bold">Join Our Journey</h3>
        <p className="p-5 text-2xl">
          We invite you to explore our exquisite collections and join us on our
          journey of creativity, innovation, and style. Experience the essence
          of Rasina Fashion and embrace garments that reflect sophistication and
          grace.
        </p>
      </div>
    </div>
  );
}

export default about;
