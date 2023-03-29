import React from "react"
import { Diversity3, VolunteerActivism, Handshake, School, Folder, TransferWithinAStation, Instagram, CameraAlt, Facebook, YouTube } from "@mui/icons-material"


export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/skills",
    text: "Skills",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    url: "/testimonials",
    text: "Testimonials",
  },
  {
    url: "/videos",
    text: "videos",
  },
  // {
  //   url: "/art",
  //   text: "Art",
  // },
]
export const home = [
  {
    heroTitle: "  Welcome Moon People  ",
    get heading() {
      return this.heroTitle
    },
    set heading(value) {
      this.heroTitle = value
    },
    name: "On May 13, 2023",
    post: "Vote Chrissie ",
    design: "Monohan/Davis",
    desc: " If elected, I will represent our tribe to the best of my ability. I will present the tribe with options for more revenue to support our growing and emergent needs. I will work to get our Cannibis store up and running QUICKLY. Make no mistake, a Vote for ME, is a Vote for YOU!",
  },
]
export const about = [
  {
    desc: "I am the Great-Great-Great Granddaughter to Betsy and George Davis. The Great-Great-Granddaughter to Mabel and Charles Monohan. The Great Granddaughter to Juanita Carpenter and Alexander Williams. The Granddaughter to Doris Willoughby. The daughter of Sharon Frelinger. The Mother of Glaysia and Aurrick Sparling.",
    desc1: "Why am I running?",
    desc2: "I have skills that will benefit our tribe and our people. Ideas that will bring us together and benefit our future. When I'm in office, YOU COME FIRST!",
    cover:"./images/megfalls.jpg",
  }
]
export const skills = [
  {
    id: 1,
    icon: <TransferWithinAStation />,
    title: "Communication",
    desc: " As your representative on Tribal Council, I will keep you informed of jobs I am working on so you can be an effective manager. I will actively listen. Ask questions when needed. Get clarity and summarize so we are all on the same page.",
  },
  {
    id: 2,
    icon: <Diversity3 />,
    title: "Public speaking",
    desc: "I am a champion speaker having won many awards for public speaking. I have 35 years of public performance experience. Presenting information that is engaging and easy to follow is just one of my strong suits.",
  },
  {
    id: 3,
    icon: <School />,
    title: "Critical Thinker",
    desc: "I am able to assess complicated issues from multiple perspectives and make evidence based judgment calls. This will be imperitive to my role on council.",
  },
  {
    id: 4,
    icon: <Handshake />,
    title: "Team player",
    desc: "Growing up in a multigenerational home provided me a rich understanding of how essential every person is. In work and life,we all have a role to play and it is my belief all roles have equal value.",
  },
  {
    id: 5,
    icon: <Folder />,
    title: "Data Analytics	",
    desc: "I have a keen eye for detail. Pattern Recognition. Gathering pertinent information. Summarizing that information and presenting it back to you in a way that is clearly understood.",
  },

  {
    id: 6,
    icon: <VolunteerActivism />,
    title: "Honesty",
    desc: "I will always tell you the truth as I understand it. I have no fear of looking both annoyingly right and horribly wrong. And pointing out both - It is the way we grow and learn to trust one another. ",
  },
]

export const portfolio = [
  {
    id: 1,
    cover: "../images/port/workout.jpg",
    name: "Workout Planner I helped develop",
    category: "Web Development",
    title: "Work out App",
    url: "https://mark-lohsemiranda.github.io/ExerciseIsFun/",
  },
  {
    id: 2,
    cover: "../images/port/day.png",
    name: "A website to check the weather",
    category: "Web Development",
    title: "Weather App",
    url: "https://chrissiesparling.github.io/cold-outside/",
  },

  {
    id: 3,
    cover: "../images/port/food.jpg",
    name: "A recipe app I helped develop",
    category: "Web Development",
    title: "Thirsty Thursdays",
    url: "https://cdvchek.github.io/thirsty-thursdays/",
  },

  {
    id: 4,
    cover: "../images/port/twosisters.jpeg",
    name: "DreamCatcher I made for my daughter ",
    category: "Native Art",
    title: "Two Sisters Dreaming",
    url: "https://www.powwows.com/what-is-a-dream-catcher/",
  },
  {
    id: 5,
    cover: "../images/port/babymoc.jpeg",
    name: "Baby Moccasins I made for my nephew",
    category: "Native Art",
    title: "Little Feet",
    url:"https://www.heddels.com/2018/02/the-history-of-the-moccasin-2/",
  },
  {
    id: 6,
    cover: "../images/port/cradleboard.jpg",
    name: "Cradle board I helped with our Nana for my niece and nephew",
    category: "Native Art",
    title: "Native Baby Board",
    url: "http://www.native-languages.org/cradleboard.htm",
  },
]
export const testimonials = [
  {
    id: 1,
    text: "There is not one thing this girl can't do! She is amazing. Everyone who meets her is better off for it. She is one of my Favorite people to work with and an excellent person to work for. A boss who truly listened and helped when needed. Rare traits in supervisors these days. ",
    image: "./images/testimonials/dawn.jpg",
    name: "Dawn Dyer",
    post: "Aerospace employee",
  },
  {
    id: 2,
    text: "If there is only one person you can hire. Chrissie Sparling is your lady. She is top notch. Does the work of five people easily and will still make time for friends and family. ",
    image: "./images/testimonials/kimmy.jpg",
    name: "Kim Sargent",
    post: "Starbucks Brewer",
  },
  {
    id: 3,
    text: "Chrissie is an incredible creative force. She brings new perspective, positivity, and flare as she investigates ways to add value to all her projects. Should SHE choose to work with you, you would be LUCKY TO HAVE HER!",
    image: "./images/testimonials/nile.jpg",
    name: "Nile Clark",
    post: "Full stack web developer",
  },
]
export const videos = [
  {
    id: 1,
    category: "Moccasins",
    date: "Feb. 17, 2023",
    name: "Soft Leather Moccasins",
    desc: "Let's make some moccasins. You can get a kit from amazon, hobby lobby or if you have a sheet of leather I will show you how to make from that.",
    cover: "./images/videos/moccasins.jpeg",
    icon: <YouTube />,
    url: "https://www.youtube.com/channel/UCgVUHs3Lh3UzHnnwdZbI1jA",
  },
  {
    id: 2,
    category: "Small and Large Drums",
    date: "March 12, 2023",
    name: "Deer skin drum",
    desc: "Make a drum with me. You can get a kit from the tribe I believe or order them online from amazon. Then follow along.",
    cover: "./images/videos/drums.jpeg",
    icon: <YouTube />,
    url: "https://www.youtube.com/channel/UCgVUHs3Lh3UzHnnwdZbI1jA",
    url1: "https://youtu.be/kQjdOIzUI1Y",
    url2: "https://youtu.be/u5VyeIByYBg",
    url3: "https://www.youtube.com/watch?v=apGtP5yfLdA",
  },
  {
    id: 3,
    category: "Medicine Bags",
    date: "Jan 31, 2023",
    name: "Native American Medicine Bag",
    desc: "Let's make a medicine bag. You can get a kit from hobby lobby, Joanne's, Micheals, or you might be able to contact the tribe to get em'. Then come back and make one with me.",
    cover: "./images/videos/medicineBag.jpg",
    icon: <YouTube />,
    url: "https://www.youtube.com/channel/UCgVUHs3Lh3UzHnnwdZbI1jA",
  },
]

export const social = [
  {
    icon: <Facebook />,
    url: "https://www.facebook.com/chrissie.sparling",
  },
  {
    icon: <CameraAlt />,
    url: "https://www.snapchat.com/chrissiesparling",
  },
  {
    icon: <Instagram />,
    url: "https://www.instagram.com/chrissiesparling",
  },
  {
    icon: <YouTube />,
    url: "https://www.youtube.com/channel/UCgVUHs3Lh3UzHnnwdZbI1jA",
    url1: "https://youtu.be/kQjdOIzUI1Y",
    url2: "https://youtu.be/u5VyeIByYBg",
    url3: "https://www.youtube.com/watch?v=apGtP5yfLdA",
  },
]
