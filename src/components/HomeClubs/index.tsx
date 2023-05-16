import React, { useEffect, useState } from "react";
import HomeSectionTitle from "../HomeSectionTitle";
import { AiFillStar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import {
  Container,
  Card,
  CardBody,
  CardImage,
  Head,
  Locat,
  Name,
  Rating,
} from "./HomeClubs.styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from "swiper";
import "swiper/swiper-bundle.min.css";

const arr = [
  {
    name: "Big Bro Tennis club",
    rating: 4.5,
    location: "Tashkent, Amir Temur st.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQweIezWb1AYHEW1dJ-HTeW7--v6q_-Eok5LA&usqp=CAU",
  },
  {
    name: "Big Bro Tennis club",
    rating: 4.5,
    location: "Tashkent, Amir Temur st.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQweIezWb1AYHEW1dJ-HTeW7--v6q_-Eok5LA&usqp=CAU",
  },
  {
    name: "Big Bro Tennis club",
    rating: 4.5,
    location: "Tashkent, Amir Temur st.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQweIezWb1AYHEW1dJ-HTeW7--v6q_-Eok5LA&usqp=CAU",
  },
  {
    name: "Big Bro Tennis club",
    rating: 4.5,
    location: "Tashkent, Amir Temur st.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQweIezWb1AYHEW1dJ-HTeW7--v6q_-Eok5LA&usqp=CAU",
  },
  {
    name: "Big Bro Tennis club",
    rating: 4.5,
    location: "Tashkent, Amir Temur st.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQweIezWb1AYHEW1dJ-HTeW7--v6q_-Eok5LA&usqp=CAU",
  },
];

const HomeClubs = () => {
  const [slidesPerView, setSlidesPerView] = useState<number>(3.2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setSlidesPerView(3.2);
        console.log("hhhh");
      } else if (window.innerWidth > 850) {
        setSlidesPerView(2.7);
      } else if (window.innerWidth > 600) {
        setSlidesPerView(2.1);
        console.log("jjjj");
      } else setSlidesPerView(1);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Container>
      <HomeSectionTitle
        text={
          <>
            High rating <span>Clubs</span>
          </>
        }
        link={"/club-id"}
      />
      {/* <div style={{ marginBottom: 25 }}></div> */}
      <Swiper
        className="slider"
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
        spaceBetween={30}
        slidesPerView={slidesPerView}
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        style={{
          paddingTop: 20,
        }}
        autoplay={{ delay: 400, disableOnInteraction: false }}
      >
        {arr.map((a, i) => (
          <SwiperSlide>
            <Card>
              <CardImage>
                <img src={a.image} alt={a.name} />
              </CardImage>
              <CardBody>
                <Head>
                  <Name className="name">{a.name}</Name>
                  <Rating>
                    <span>
                      <AiFillStar />
                    </span>
                    {a.rating}
                  </Rating>
                </Head>
                <Locat>
                  <MdLocationOn />
                  {a.location}
                </Locat>
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default HomeClubs;
