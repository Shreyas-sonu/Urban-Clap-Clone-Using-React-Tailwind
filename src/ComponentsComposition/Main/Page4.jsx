import React from "react";

const Page4 = () => {
  return (
    <div id="page4" className="text-black h-[60vh] w-[100%] p-7">
      <h1 className="text-center m-[10px_0px_30px] pb-5">
        New Category Launches
      </h1>
      <ul className="h-[50vh] box-content w-[95%] flex mt-3 mx-auto mb-0 list-none text-center justify-between align-middle">
        <li className="cat1 basis-[25%] h-[50vh] box-content pr-6">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1646140576865-02aba1.jpeg"
            alt="Image"
            width="100%"
            className="rounded-md ease-in-out"
          />
          <p className="text-sm mb-[-5px]">Expert Counselling</p>
          <small className="text-xs text-slate-600 font-medium">
            Advanced Skin Treatments
          </small>
        </li>
        <li className="cat2 basis-[25%] h-[50vh] box-content pr-6">
          <figure className="w-[100%] h-[25vh] pb-7 bg-[url(https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg)] bg-cover bg-center ease-in-out mb-1 rounded-md">
            {/* <img
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg" alt="Image" width="95%"/> */}
          </figure>
          <p className="text-sm mb-[-5px]">
            Furniture Making, Upholstery &amp; Polish
          </p>
        </li>
        <li className="cat3 basis-[25%] h-[50vh] box-content pr-6">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg"
            alt="Image"
            width="100%"
            className="rounded-md ease-in-out"
          />
          <p className="text-sm mb-[-5px]">Air Purifier</p>
          <small className="text-xs text-slate-600 font-medium">
            Flat ₹100 off
          </small>
        </li>
        <li className="cat4 basis-[25%] h-[50vh] box-content pr-6">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1643120136395-80523e.jpeg"
            alt="Image"
            width="100%"
            className="rounded-md ease-in-out"
          />
          <p className="text-sm mb-[-5px]">Buy RO Water Purifier</p>
        </li>
      </ul>
    </div>
  );
};
export default Page4;
