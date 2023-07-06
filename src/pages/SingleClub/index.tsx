import {
  IntroSection,
  SingleClubAbout,
} from "../../components/SingleClubComponents";
import { fakeClubData } from "./fakeData";

const SingleClubPage = () => {
  return (
    <>
      <IntroSection images={fakeClubData.imagesFromClub} />
      <SingleClubAbout />
    </>
  );
};

export default SingleClubPage;
