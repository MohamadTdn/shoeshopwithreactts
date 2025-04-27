import React from "react";

export default function Comercials(): React.JSX.Element {
  return (
    <section className="mt-16 md:mt-28 flex flex-col md:flex-row justify-center gap-y-9 md:gap-x-9 px-8 md:px-0">
      <div className="bg-[url(/images/collection-item1.jpg)] h-[210px] md:w-[700px] md:h-[300px] bg-cover bg-center bg-no-repeat flex justify-center items-center rounded-3xl p-4">
        <div>
          <h1 className="text-4xl md:text-7xl font-bold">Minimal Collections</h1>
          <a href="#" className="banner-link">Shop Now</a>
        </div>
      </div>
      <div className="bg-[url(/images/collection-item2.jpg)] md:w-[700px] h-[210px] md:h-[300px] bg-cover bg-center bg-no-repeat flex justify-center items-center rounded-3xl p-4">
        <div>
          <h1 className="text-4xl md:text-7xl font-bold">Minimal Collections</h1>
          <a href="#" className="banner-link">Shop Now</a>
        </div>
      </div>
    </section>
  );
}
