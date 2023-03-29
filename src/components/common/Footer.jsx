import React from "react"
import { social } from "../data/dummydata"

const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item) => (
          <>
            <i data-aos='zoom-in'>{item.icon}</i>
          </>
        ))}
        <p>CopyRight 2023.   *  Chrissie Sparling--MONOHAN/DAVIS *   All Right Reserved</p>
      </footer>
    </>
  )
}

export default Footer


