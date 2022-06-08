import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

//import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './About.scss';
//import { urlFor, client } from '../../client';

const abouts = [
  { title: "Web Developer", description: "I'm a web developer with a passion for building beautiful, responsive websites and applications..", imgUrl: images.about01 },
  { title: "Web Developer", description: " I'm currently working as a Front-End Developer at a small startup in Japan. I'm also a Data Analyst at a large company in Japan. I'm a self-taught developer and I'm always looking to learn new things.", imgUrl: images.about02 },
  { title: "Web animation", description: "I'm a web developer with a passion for building beautiful, responsive websites and applications. I'm currently working as a Front-End Developer at a small startup in Japan. I'm also a Data Analyst at a large company in Japan. I'm a self-taught developer and I'm always looking to learn new things.", imgUrl: images.about03 },
  { title: "UI/UX", description: "I'm a web developer with a passion for building beautiful, responsive websites and applications. I'm currently working as a Front-End Developer at a small startup in Japan. I'm also a Data Analyst at a large company in Japan. I'm a self-taught developer and I'm always looking to learn new things.", imgUrl: images.about04 },
]

const About = () => {
  //const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then((data) => {
  //     setAbouts(data);
  //   });
  // }, []);

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            // opacity: 不透明性
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            {/* <img src={urlFor(about.imgUrl)} alt={about.title} /> */}
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;