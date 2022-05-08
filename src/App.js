import React from 'react';
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Section from "./Components/Section";

function App() {
  let menuList = [
    { Name: "Sign Up", Link: "#!" },
    { Name: "Log In", Link: "#!" },
    { Name: "Contact Us", Link: "#!" }
  ];

  let websiteName = "Start Bootstrap React";

  let sectionList = [
    {
      title: "For those about to rock...",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.",
      image: "assets/img/01.jpg",
      rtl: true
    },
    {
      title: "We salute you!",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.",
      image: "assets/img/02.jpg",
      rtl: false
    },
    {
      title: "Let there be rock!",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.",
      image: "assets/img/03.jpg",
      rtl: true
    }
  ];

  return <>
    <Navbar
      brand={websiteName}
      menu={menuList}
    />
    <Header
      heading="One Page Wonder"
      subheading="Will Rock Your Socks Off"
      button={{ Name: "Learn More", Link: "#scroll" }}
    />

    {
      sectionList.map((section) => {
        return (
          <Section
            title={section.title}
            description={section.description}
            image={section.image}
            rtl={section.rtl}
          />
        )
      })
    }

    <Footer websiteName={websiteName} />
  </>;
}

export default App;