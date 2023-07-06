import { useEffect, useState } from "react";
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
import { Splide, SplideSlide, Options } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
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
  const [slidesPerView, setSlidesPerView] = useState<number>(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setSlidesPerView(3);
        console.log("hhhh");
      } else if (window.innerWidth > 850) {
        setSlidesPerView(2.7);
      } else if (window.innerWidth > 670) {
        setSlidesPerView(2.1);
      } else if (window.innerWidth > 500) {
        setSlidesPerView(1.5);
      } else setSlidesPerView(1);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const sliderOptions: Options = {
    type: "loop",
    autoplay: true,
    interval: 3000,
    pauseOnHover: !true,
    arrows: false,
    pagination: false,
    drag: "free",
    focus: "center",
    perPage: slidesPerView,
    gap: 20,
  };
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

      <Splide options={sliderOptions} aria-label="My Favorite Images">
        {arr.map((a, i) => (
          <SplideSlide key={i}>
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
          </SplideSlide>
        ))}
      </Splide>
    </Container>
  );
};

export default HomeClubs;
