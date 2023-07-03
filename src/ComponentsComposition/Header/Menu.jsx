import React from "react";
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="menuBlock basis-4/5 relative">
      <ul className="absolute right=[2%] flex list-none left-2/4 ml-[12%] mt-[-1%] ">
        <li className="px-4">
          <a className="inline-block  pb-2.5 font-bold mt-[-20px]">Blog</a>
        </li>
        <li className="px-4 font-bold">
          <a className="inline-block  pb-2.5 no-underline">
            <u>Register As A Professional</u>
          </a>
        </li>
        <li className="px-4 font-bold">
          <Link to="/form" className="inline-block cursor-pointer pb-2.5 no-underline">Login/</Link>
          <a className="inline-block pb-2.5 no-underline">Sign Up</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
