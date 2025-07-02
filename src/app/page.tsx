export default function Home() {
  return (
    <div className="py-6 px-5 font-[family-name:var(--font-fjalla-one)] bg-white text-black h-full flex flex-col justify-between">
      <main className="">
        <div className="flex flex-col items-center">
          <div className="size-10 bg-black rounded-xl"></div>
          <h1 className="text-lg font-bold">{`Mide's Hair`}</h1>
          <span className="text-gray-600 text-sm">
            Unveil Your Radiance with a Heavenly Touch.
          </span>
        </div>
      </main>
      <div className="p-4 shadow-2xl fixed bottom-0 w-full left-0 pb-6 flex justify-center border-t border-gray-300">
        <button className="uppercase font-bold flex gap-3 items-center text-lg">
          <span className="size-10 bg-black rounded-xl"></span>
          <span className="h-10 bg-black text-white p-4 py-2">Book us</span>
          <span className="size-10 bg-black rounded-xl"></span>
        </button>
      </div>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
