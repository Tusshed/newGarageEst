import React from "react";
import { footerSocialIcons, footerListItems } from "../constant/data";

const Footer = () => {
  return (
    <footer className="bg-black pt-10 md:pt-[60px] pb-5 md:pb-5 text-neutral-100">
      <div className="container">
        {/* footer top */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-[1fr_0.5fr_1fr_1fr]">
          {/* footer brand */}
          <div>
            
            <p className="my-[14px] text-neutral-50/60">
              Helping you find the perfect home with expert guidance and a
              seamless experience.
            </p>

            <div className="flex mt-3 gap-6">
              {footerSocialIcons.map((icon, index) => (
                <a
                  href="#"
                  key={index}
                  className="hover:text-green-500 transition-colors"
                >
                  {icon.icon}
                </a>
              ))}
            </div>
          </div>

          {/* footer list */}
          {footerListItems.map((item) => (
            <div key={item.id}>
              <p className="text-xl font-bold text-white mb-3">{item.title}</p>
              <ul className="grid gap-2">
                {item.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-neutral-50/60 hover:text-neutral-100 transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* footer bottom */}
        <div className="grid gap-3 mt-6 md:mt-20">
          <div className="w-full h-[1px] bg-gray-500 block"></div>
          <p className="text-white/80 text-sm">
            &copy; {new Date().getFullYear()} copyright Tussh.All rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
