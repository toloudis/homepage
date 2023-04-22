import SectionContainer from "../../containers/SectionContainer";
import Tabs from "../../components/Tabs/Tabs";

const Experience: React.FC = () => {
  return (
    <SectionContainer
      id="experience"
      title="Experience"
      maxWidth="sm"
      padding="120"
      reverse
    >
      <Tabs />
    </SectionContainer>
  );
};

export default Experience;
