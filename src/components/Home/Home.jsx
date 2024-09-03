import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { HiMiniSquares2X2 } from "react-icons/hi2";
const Home = () => {
  return (
    <div className="flex">
      <div className="w-1/2"></div>
      <div className="w-1/2 bg-[#363C43] text-[#969696] rounded-3xl relative ">
        <div className="flex flex-col gap-4 justify-between absolute top-5 mx-2 h-1/2 ">
          <FaRegQuestionCircle size={25} />
          <HiMiniSquares2X2 size={25} />
        </div>

        <Tabs variant="unstyled" className="px-8 py-4 mx-4">
          <TabList className="font-poppins font-semibold text-[#FFFFFF] rounded-2xl bg-[#171717] p-2">
            <Tab _selected={{ bg: "black", borderRadius: 15 }}>About Me</Tab>
            <Tab _selected={{ bg: "black", borderRadius: 15 }}>Experiences</Tab>
            <Tab _selected={{ bg: "black", borderRadius: 15 }}>Recommended</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>
                Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
                working at this awesome company for 3 years now. I was born and
                raised in Albany, NY& have been living in Santa Carla for the
                past 10 years my wife Tiffany and my 4 year old twin daughters-
                Emma and Ella. Both of them are just starting school, so my
                calender is usually blocked between 9-10 AM. This is a...
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                Hello! dI’m Dave, your sales rep here from Salesforce. I’ve been
                working at this awesome company for 3 years now. I was born and
                raised in Albany, NY& have been living in Santa Carla for the
                past 10 years my wife Tiffany and my 4 year old twin daughters-
                Emma and Ella. Both of them are just starting school, so my
                calender is usually blocked between 9-10 AM. This is a...
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
                working at this awesome company for 3 years now. I was born and
                raised in Albany, NY& have been living in Santa Carla for the
                past 10 years my wife Tiffany and my 4 year old twin daughters-
                Emma and Ella. Both of them are just starting school, so my
                calender is usually blocked between 9-10 AM. This is a...
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
