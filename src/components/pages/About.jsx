import React from "react"
import { Heading } from "../common/Heading"
import { about } from "../data/dummydata"


export const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};

export const About = () => {
  return (
    <>
      <section className='about'>
        <div className='container flex'>
          {about.map((val) => (
            <>
              <div className='left' data-aos='fade-down-right'>
                <img src={require('../data/images/meGFalls.jpg')} alt='me and g' />
              </div>
              <div className='right' data-aos='fade-down-left'>
                <Heading title='About Me' />
                <p>{val.desc}</p>
                <br></br>
                
                <p>{val.desc1}</p>

                <p>{val.desc2}</p>
                <br></br>

                <a href='https://www.facebook.com/chrissie.sparling'>
                <button>Let's connect</button>
                </a>
                <a href='https://docs.google.com/document/d/1HwDpvBBNMF0qitPyBH019SQgoHNsOFWPw2_M6Mpdnwg/edit'>
                <button>My resume</button>
                </a>
                <a href='https://www.facebook.com/groups/1303351043119058'>
                <button className='primaryBtn'>Join us!</button>
                </a>
                <a href='https://www.instagram.com/chrissiesparling'>
                <button className="backButton">Instagram</button>
                </a>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}
