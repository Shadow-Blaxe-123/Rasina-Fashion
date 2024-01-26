import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* TODO: Add a clients section that displays images of clients similar to the products page.*/}
      <div
        id="home"
        className="h-screen -z-10 flex align-middle justify-center"
      >
        <div className="text-white  z-10 m-auto ">
          <h2 className="font-black text-6xl border-b-2 border-green-500">
            Welcome to our Website.
          </h2>
          <br />
          <p className="flex align-middle justify-center text-3xl">
            We are knit garments manufacturer & exporter
          </p>
          <br />
          <div className="flex">
            <Link
              href={"/about"}
              className="m-auto text-xl bg-red-500 p-3 rounded-lg border-black border-2"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
