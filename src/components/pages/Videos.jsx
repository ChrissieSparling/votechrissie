import React, { useState } from "react"
import { videos } from "../data/dummydata"
import { Link } from 'react-router-dom';


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
          <header id= "title" >Videos</header>
          <div className='catButton'>
            {category.map((category) => (
              <button className='primaryBtn' onClick={() => filterItems(category)} data-aos='zoom-out-down'>
                {category}
              </button>
            ))}
          </div>
          <div className='contentGrid4'>
            {list.map((item) => (
              <div className='box' data-aos='fade-up'>
                <div className='img'>
                  <img src={item.img} alt='' />
                </div>
               <icon>{item.icon}</icon>
                <div className='vid2'>
                  <h3>{item.date}</h3>
                  <h2>{item.name}</h2>
                  <br />
                  <span>{item.desc}</span>
                  <br />
                  <Link href="#" onClick = {() => openInNewTab(item.url)}>
                  <button className='primaryBtn' onClick={() => filterItems(item.url)} >
                Crafting with Chrissie
              </button>
                  </Link>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
