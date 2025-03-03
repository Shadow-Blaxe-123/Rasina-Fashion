import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import Image from "next/image";

export default function CategoryPage({ imagePaths, slug }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-4 my-40 md:m-32">
      <div>
        <section>
          <h2 className="text-4xl font-extrabold font-sans text-green-500 bg-white border-b-4 p-2 flex justify-center align-middle">
            {`${slug} FOR LIFE !`.toUpperCase()}
          </h2>
          <div className="container px-5 mx-auto">
            <div className="flex flex-wrap mx-4 justify-center">
              {imagePaths.length > 0 ? (
                imagePaths.map((imagePath, index) => (
                  <div
                    className="lg:w-1/4 md:w-1/2 p-3 w-full shadow-lg m-8"
                    key={index}
                  >
                    <div className="block relative rounded overflow-hidden">
                      <Image
                        width={400}
                        height={300}
                        layout="intrinsic"
                        alt="Product"
                        className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block"
                        src={imagePath}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center">
                  No images available.
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// ✅ **Fetch images dynamically when the user visits the page**
export async function getServerSideProps({ params }) {
  const { slug } = params;
  const folderPath = path.join(process.cwd(), `public/Images/${slug}`);
  let imagePaths = [];

  try {
    if (fs.existsSync(folderPath)) {
      imagePaths = fs
        .readdirSync(folderPath)
        .filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file)) // Only image files
        .map((file) => `/Images/${slug}/${file}`); // Convert to public URLs
    }
  } catch (error) {
    console.error(`Error reading images from ${slug}:`, error);
  }

  return {
    props: { imagePaths, slug },
  };
}
