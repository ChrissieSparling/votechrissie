import React, { useState } from "react"
// import { Heading } from "../common/Heading"
import { portfolio } from "../data/dummydata"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import { Link } from 'react-router-dom';

export const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))]
export const Portfolio = () => {
  const [list, setLists] = useState(portfolio)
  const [category, setCategory] = useState(allCategory)
  console.log(setCategory)

  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category)
    setLists(newItems)
    if (category === "all") {
      setLists(portfolio)
      return
    }
  }

  return (
    <>
      <article className="portfolio">
        <div className='container'>
          <header id= "title" >Portfolio</header>
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
                  <img src={item.cover} alt='' />
                </div>
                <div className='folio'>
                  <h3>{item.title}</h3>
                  <span>{item.name}</span>
                  <VisibilityOutlinedIcon />
                  <Link href="#" onClick = {() => openInNewTab(item.url)}>
                  <button className='primaryBtn' onClick={() => filterItems(item.url)} >
                Check me out
              </button>
                  </Link>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  )
}


