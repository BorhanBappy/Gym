import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineMail} from "react-icons/ai"
function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4  items-start p-12 bg-slate-500 text-black ">
      <div className=" text-4xl font-bold text-gray-900">Borhan&rsquo;s GYM</div>
      <div className="">
        <h1 className="text-3xl mb-2 font-bold text-gray-900">Main</h1>

        <Link to="/contract">Contract</Link>
        <br />
        <Link to="/gallery">Gallery</Link>
        <br />
        <Link to="/plans">Plans</Link>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Resources</h1>
        <Link to="/">FAQ & Help</Link>
        <br />
        <Link to="/">Policy</Link>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-gray-900"> SOCIAL MEDIA</h1>
        <Link >  {<AiOutlineMail/>}</Link>
     
      </div>
    </div>
  );
}

export default Footer;
