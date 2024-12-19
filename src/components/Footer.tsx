import React from "react";

const  Footer = () => {
    return (
        <div>
<footer className="footer footer-center bg-black text-white p-10">
  <aside>
  <img src="logo-fna-white.png" alt="" width="100"/>
    <p className="font-bold">
      FNA by Effenar
      <br />
      "Where Web Development Meets Creativity!"
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  
</footer>

</div>
    )
}

export default Footer;