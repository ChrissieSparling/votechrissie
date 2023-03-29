import React, { useEffect } from "react"
import { home } from "../data/dummydata"
import Typewriter from "typewriter-effect"

export const Hero = () => {
  return (
    <>
      <section className='hero'>
        {home.map((val, i) => (
          <div className='heroContent'>
          <h1 classname='heroTitle'>{val.heroTitle}</h1>
            <h3 className='fontSize' data-aos='fade-right'>
              {val.text}
            </h3>
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos='fade-left'>{val.desc}</p>
            <a href='https://www.facebook.com/chrissie.sparling'>
            <button className='primaryBtn' data-aos='fade-up-right'>
              Let's connect
            </button></a>
          </div>
        ))}
      </section>
    </>
  )
}
