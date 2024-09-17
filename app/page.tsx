import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  bg-white">
      <div className="z-10 w-full max-w-5xl  font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center  from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-white dark:from-inherit lg:static lg:w-auto  lg:rounded-xl  lg:bg-white lg:p-4 lg:dark:bg-white">
          <Image
            src="/Count logo 1.png"
            alt="Count Logo"
            width={100}
            height={24}
            priority
          />
        </p>
      </div>
      <div
        className="flex"
        style={{
          backgroundImage: "url('/CountBG.png')",
          backgroundSize: "cover",
          flexDirection: "column",
          width: "100%",
          height: 1000,
          borderRadius: 20,
          display: "flex",
        }}
      >
        <div className="flex justify-center">
          <Image
            src="/Group 1261153123.png"
            alt="COUNT Label Logo"
            width={1000}
            height={1000}
            style={{ marginTop: 100 }}
          />
        </div>
        <div className="flex justify-center mt-10">
          <h1
            style={{
              fontSize: 30,
              fontFamily: "inherit",
              fontWeight: 700,
              textAlign: "center",
            }}
            className="text-black"
          >
            Download COUNT Go Mobile App Here.
          </h1>
        </div>
        <div className="flex flex-col items-center mt-10 lg:flex-row lg:justify-center">
          <Link href="/app.apk" className="m-2 lg:m-4">
            <Image
              src="/Google Play Store.jpg"
              alt="Google Play Store"
              width={270}
              height={300}
              className="object-contain"
              priority
            />
          </Link>
          <Link
            href={"https://apps.apple.com/app/count-go/id6642639778"}
            className="m-2 lg:m-4"
          >
            <Image
              src="/Appstore.jpg"
              alt="App Store"
              width={240}
              height={280}
              className="object-contain"
              priority
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
