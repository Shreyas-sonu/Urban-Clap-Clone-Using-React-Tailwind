import React from 'react'

const FooterEnd = () => {
  return (
    <div
      id="fend"
      className="h-[15vh] border-t-[1px] border-t-slate-200 flex  align-middle justify-between"
    >
      <section className="flogo">
        <img
          src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"
          alt="Urban Company logo"
          height="50px"
          className=" p-4 text-center h-[5rem] w-[22rem] "
        />
      </section>
      <section className="fdec">
        <span className="text-sm pt-5 inline-block pl-10">
          © 2014-22 UrbanClap Technologies India Pvt. Ltd.
        </span>
      </section>
      <section className="fsoc basis-1/5">
        <ul className="flex list-none justify-between align-middle">
          <li className="text-lg pr-[20px]">
            <a className="text-slate-300 ">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li className="text-lg pr-[20px]">
            <a className="text-slate-300 ">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li className="text-lg pr-[20px]">
            <a className="text-slate-300 ">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className="text-lg pr-[20px]">
            <a className="text-slate-300 ">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </li>
          <li className="text-lg pr-[20px]">
            <a className="text-slate-300 ">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li className="text-lg pr-[20px]">
            <a className="text-slate-300 ">
              <i class="fa-brands fa-pinterest-p"></i>
            </a>
          </li>
        </ul>
      </section>
      <section className="fgp">
        <img
          src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f907eb0.png"
          alt="Play Store"
          height="50px"
          className=" p-3 pl-20 text-center h-[5rem] w-[22rem] "
        />
      </section>
      <section className="fip">
        <img
          src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f741d10.png"
          alt="App Store"
          height="50px"
          className=" p-3 pl-20 text-center h-[5rem] w-[22rem] "
        />
      </section>
    </div>
  );
}

export default FooterEnd