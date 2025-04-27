import React from "react";

export default function Banners(): React.JSX.Element {
  return (
    <section className="Banners p-5 md:mt-8 flex justify-center gap-y-8 md:gap-x-15 md:flex-row flex-col">
      <div className="h-[350px] md:w-[800px] md:h-[700px] bg-[url(/images/card-image1.jpg)] bg-cover bg-no-repeat flex justify-center items-end rounded-3xl">
        <div className="text-center pb-4 text-white font-bold">
          <h1 className="text-3xl md:text-7xl">Stylish Women Shoe</h1>
          <a className="banner-link" href="#">
            Shop Now
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-y-8">
        <div className="h-[350px] md:w-[600px] md:h-[333px] bg-[url(/images/card-item3.jpg)] bg-cover bg-no-repeat bg-center flex justify-center items-end rounded-3xl">
          <div className="text-center pb-4 text-white font-bold">
            <h1 className="text-3xl md:text-7xl">Sports Wear</h1>
            <a className="banner-link" href="#">
              Shop Now
            </a>
          </div>
        </div>
        <div className="h-[350px] md:w-[600px] md:h-[333px] bg-[url(/images/card-item5.jpg)] bg-cover bg-no-repeat bg-center flex justify-center items-end rounded-3xl">
          <div className="text-center pb-4 text-white font-bold">
            <h1 className="text-3xl md:text-7xl">Fashion Shoes</h1>
            <a className="banner-link" href="#">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
