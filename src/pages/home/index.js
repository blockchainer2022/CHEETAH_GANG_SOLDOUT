// import { useState } from "react";
import "./style.css";
import { Layout } from "../../components";
import moment from "moment";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  MintSection,
  StorySection,
  SliderSection,
  RaritySection,
  Milestone,
  FeatureSection,
  TeamSection,
  FaqSection,
} from "../../sections";
toast.configure();
const Index = ({
  account,
  mint,
  totalSupply,
  displayPrice,
  loadWeb3,
  maxSupply,
  chainId,
}) => {
  const difference = +new moment("2021-9-17 00:00:00").utc() - +new Date();

  // const [days, setDays] = useState(0);
  // const [hours, setHours] = useState(0);
  // const [minutes, setMinutes] = useState(0);
  // const [seconds, setSeconds] = useState(0);
  return (
    <div>
      <Layout
        account={account}
        loadWeb3={loadWeb3}
        maxSupply={maxSupply}
        totalSupply={totalSupply}
      >
        <MintSection
          difference={difference}
          account={account}
          mint={mint}
          totalSupply={totalSupply}
          displayPrice={displayPrice}
          maxSupply={maxSupply}
          chainId={chainId}
        />
        <StorySection />
        <SliderSection />
        <RaritySection />
        <Milestone />
        <FeatureSection />
        <TeamSection />
        <FaqSection />
      </Layout>
    </div>
  );
};

export default Index;
