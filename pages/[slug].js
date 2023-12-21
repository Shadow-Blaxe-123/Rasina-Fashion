import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

function Slug() {
  const router = useRouter();
  const { slug } = router.query;
  // components/ImageGallery.js
  const imageCount = 5; // Update this with the number of images in your folder
  const imagePaths = Array.from(
    { length: imageCount },
    (_, i) => `/Images/${slug}/${slug}-${i + 1}.jpg`
  );

  return (
    <div className="mx-4 my-40 md:m-32">
      <div>
        <section>
          <h2 className="text-4xl font-extrabold font-sans text-green-500 bg-white border-b-4 p-2 flex justify-center align-middle">
            {`${slug} FOR LIFE !`.toUpperCase()}
          </h2>
          <div className="container px-5 mx-auto">
            <div className="flex flex-wrap mx-4 justify-center">
              {imagePaths.map((imagePath, index) => {
                return (
                  <div
                    className="lg:w-1/4 md:w-1/2 p-3 w-full shadow-lg m-8"
                    key={index}
                  >
                    <div className="block relative  rounded overflow-hidden">
                      <Image
                        width={400}
                        height={60}
                        alt="ecommerce"
                        className="m-auto md:mx-0 h-[30vh]  md:h-[36vh] block"
                        src={imagePath}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Slug;
