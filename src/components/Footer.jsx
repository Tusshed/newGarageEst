import React from "react";
import { footerListItems } from "../constant/data";

const Footer = () => {
  return (
    <footer className="bg-black pt-6 pb-4 text-neutral-100 text-sm" id="contact">
      <div className="container">
        {/* Footer content: Quick Links + Contact Info side by side */}
        <div className="flex flex-col gap-6 xs:flex-row xs:justify-between flex-wrap">
          {/* Footer description (optional — can be hidden on mobile to save space) */}
          {/* <div className="sm:max-w-[300px]">
            <p className="text-neutral-50/60">
              Helping you find the perfect home with expert guidance and a
              seamless experience.
            </p>
          </div> */}

          {footerListItems.map((item) => (
            <div key={item.id} className="min-w-[140px]">
              <p className="text-base font-semibold text-white mb-2">
                {item.title}
              </p>
              <ul className="flex flex-row flex-wrap gap-3">
                {item.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href ? link.href : "#"}
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

        {/* Footer bottom */}
        <div className="mt-6 border-t border-gray-500 pt-4 text-white/80 text-xs text-center">
          &copy; {new Date().getFullYear()} copyright Tussh.
          All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
