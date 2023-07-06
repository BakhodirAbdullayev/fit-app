import { Splide, SplideSlide, Options } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Container } from "./Intro.styles";

const IntroSection = ({ images }: { images: string[] }) => {
  const sliderOptions: Options = {
    type: "loop",
    // target: "center",
    autoplay: true,
    interval: 2500,
    pauseOnHover: !true,
    arrows: false,
    pagination: false,
  };
  return (
    <Container>
      <Splide options={sliderOptions} aria-label="My Favorite Images">
        {images.map((image, i) => (
          <SplideSlide key={i} className="imgWrapper">
            <img src={image} alt="mm" />
          </SplideSlide>
        ))}
      </Splide>
    </Container>
  );
};

export default IntroSection;
