import React from "react";
import { CiShare2 } from "react-icons/ci";
import { FaMailBulk } from "react-icons/fa";
import {
  FaCamera,
  FaEarthAsia,
  FaLocationArrow,
  FaPhone,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <nav>
          <aside>
            <h1 className="text-cyan-700 text-xl">StudyNook</h1>
            <p className="text-lg">
              © 2026 StudyNook. Focused flow <br/> for modern learners.
            </p>
            <div className="flex items-center gap-2 text-xl mt-3">
              <CiShare2 />
              <FaEarthAsia />
              <FaCamera />
            </div>
            
          </aside>
        </nav>
        <nav>
          <h6 className="footer-title text-cyan-700">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Help Center</a>
        </nav>
        <nav>
          <h6 className="footer-title text-cyan-700">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy policy</a>
        </nav>
        <form>
          <h6 className="footer-title text-cyan-700">Newsletter</h6>
          <fieldset className="w-80">
            <label>Get study tips and room updates.</label>
            <div className="join flex flex-col gap-2">
              <input
                type="text"
                placeholder="username@gmail.com"
                className="input input-bordered join-item"
              />
              <button className="btn bg-cyan-700 join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
