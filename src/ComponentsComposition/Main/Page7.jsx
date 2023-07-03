import React from "react";

const Page7 = () => {
  return (
    <div id="page7" className="text-black h-[70vh] w-[100%] p-[30px]">
      <h1 className="text-center m-[5px_0px_0px] pb-[5px] text-black">
        Cleaning & Pest Control
      </h1>
      <ul className="text-black  h-[50vh] box-content w-[95%] flex m-[5px_auto_0px] list-none text-center justify-between items-center">
        <li className="cat1 basis-[25%] box-content pr-[25px]">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg"
            alt="Image"
            width="100%"
            className="ease-in-out rounded-[5px]"
          />
          <p className="text-[11px] mt-[12px] mb-[-5px]">
            Bathroom and Kitchen Cleaning
          </p>
        </li>
        <li className="cat2 basis-[25%] box-content pr-[25px]">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632396793425-1a5418.jpeg"
            alt="Image"
            width="100%"
            className="ease-in-out rounded-[5px]"
          />
          <p className="text-[11px] mt-[12px] mb-[-5px]">Full Home Cleaning</p>
        </li>
        <li className="cat3 basis-[25%] box-content pr-[25px]">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1630420912606-2fffa6.jpeg"
            alt="Image"
            width="100%"
            className="ease-in-out rounded-[5px]"
          />
          <p className="text-[11px] mt-[12px] mb-[-5px]">
            Sofa & Carpet Cleaning
          </p>
        </li>
        <li className="cat4 basis-[25%] box-content pr-[25px]">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1631159612066-53b210.jpeg"
            alt="Image"
            width="100%"
            className="ease-in-out rounded-[5px]"
          />
          <p className="text-[11px] mt-[12px] mb-[-5px]">
            Cockroach, Ant & General Pest Control
          </p>
        </li>
      </ul>
    </div>
  );
};
export default Page7;
