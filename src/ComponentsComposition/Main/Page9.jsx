import React from "react";

const Page9 = () => {
  return (
    <div className="text-[#111] h-[70vh] w-[100%] p-[30px]">
      <h1 className="text-center m-[5px 0px 0px] pb-[5px]">Home Repair</h1>
      <ul className="pl-[25px] m-auto h-[50vh] w-[95%] flex m-[5px auto 0px] text-center justify-between items-center">
        <li className="basis-[25%] pr-[25px]">
          <figure className="fig1 w-[100%] h-[25vh] pb-[30px] bg-[url(https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg)] bg-cover bg-center ease-in-out duration-[0.6s] hover:scale-110"></figure>
          <p className="text-sm mt-[12px] mb-[-5px]">
            Furniture Making, Upholstery & Polish
          </p>
        </li>
        <li className="basis-[25%] pr-[25px]">
          <figure className="fig1 w-[100%] h-[25vh] pb-[30px] bg-[url(https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/carpenter.jpg)] bg-cover bg-center ease-in-out duration-[0.6s] hover:scale-110"></figure>
          <p className="text-sm mt-[12px] mb-[-5px]">Carpenters</p>
        </li>
        <li className="basis-[25%] pr-[25px]">
          <figure className="fig1 w-[100%] h-[25vh] pb-[30px] bg-[url(https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_a91b73d0.jpeg)] bg-cover bg-center ease-in-out duration-[0.6s] hover:scale-110"></figure>
          <p className="text-sm mt-[12px] mb-[-5px]">Electricians</p>
        </li>
        <li className="basis-[25%] pr-[25px]">
          <figure className="fig1 w-[100%] h-[25vh] pb-[30px] bg-[url(https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/plumber.jpg)] bg-cover bg-center ease-in-out duration-[0.6s] hover:scale-110"></figure>
          <p className="text-sm mt-[12px] mb-[-5px]">Plumbers</p>
        </li>
      </ul>
    </div>
  );
};
export default Page9;
