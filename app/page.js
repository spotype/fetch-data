import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex flex-col w-3/4 mx-auto items-center justify-center h-screen">
        <div className="flex flex-col gap-5 items-center">
          <div className=" font-bold">
            <span className="p-2 text-green-400 border-2 border-green-400 rounded-full">
              Spotype V1.0 is running
            </span>
          </div>

          <div className="font-bold flex flex-col items-center gap-2">
            <span className="text-5xl">The Intuitive</span>
            <span className="text-[#00dc82] text-7xl">Vue Framework</span>
          </div>
        </div>

        <div className="mt-5 bg-[#2b2b2b] p-5 rounded-lg">
          <code class="">
            <div>
              <span class="">fetch</span>(
              <span class="">'https://dummyjson.com/products/1'</span>)
            </div>
            <span class="">.then</span>(
            <span class="">
              <span class="">res</span> =&gt;
            </span>{" "}
            res.<span class="">json</span>())
            <div>
              <span class="">.then</span>(
              <span class="">
                <span class="">json</span> =&gt;
              </span>{" "}
              <span class="">console</span>.<span class="">log</span>(json))
            </div>
          </code>
        </div>
      </div>
    </main>
  );
}
