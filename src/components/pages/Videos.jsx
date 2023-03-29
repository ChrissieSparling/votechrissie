import React, { useState } from "react"
import { Heading } from "../common/Heading"
import { videos } from "../data/dummydata"
import { Link } from 'react-router-dom';
import { YouTube } from "@mui/icons-material";

export const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};

const allCategory = ["all", ...new Set(videos.map((item) => item.category))]

export const Videos = () => {
  const [list, setLists] = useState(videos)
  const [category, setCategory] = useState(allCategory)
  console.log(setCategory)

  const filterItems = (category) => {
    const newItems = videos.filter((item) => item.category === category)
    setLists(newItems)
    if (category === "all") {
      setLists(videos)
      return
    }
  }

    return (
    <>
      <section className='videos'>
        <div className='container'>
          <Heading title='Videos' />
          <div className='contentGrid3'>
            {videos.map((item) => (
              <div className='box' data-aos='flip-left'>
                <div className='img' data-aos='fade-up'>
                  <img src={require('../data/images/videos/drums.jpeg')} alt='' data-aos='fade-down' />
                </div>
                <div className='text'>
                  <h3 data-aos='fade-right'>{item.category}</h3>
                  <label data-aos='fade-left'>
                    By {item.author} {item.date}
                  </label>
                  <p data-aos='fade-up-right'>{item.desc}</p>
                </div>
                <YouTube />
                <Link href="#" onClick = {() => openInNewTab(item.url)}>
                  <button className='primaryBtn' onClick={() => filterItems(item.url)} >
                Watch Me
              </button>
                  </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
