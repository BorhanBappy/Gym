import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineMail} from "react-icons/ai"
function Footer() {
  return (
    <div className="  flex justify-between bg-slate-500 p-8 text-black text-xl">
      <div className=" text-4xl justify-center mt-6">Borhan&rsquo;s GYM</div>
      <div className="">
        <h1 className="text-3xl mb-2">Main</h1>

        <Link to="/contract">Contract</Link>
        <br />
        <Link to="/gallery">Gallery</Link>
        <br />
        <Link to="/plans">Plans</Link>
      </div>
      <div>
        <h1 className="text-3xl">Resources</h1>
        <Link to="/">FAQ & Help</Link>
        <br />
        <Link to="/">Policy</Link>
      </div>
      <div>
        <h1 className="text-3xl"> SOCIAL MEDIA</h1>
        <Link >  {<AiOutlineMail/>}</Link>
     
      </div>
    </div>
  );
}

export default Footer;
