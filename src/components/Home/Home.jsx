import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
const Home = () => {
  return (
   <div className="flex">
    <div className="w-1/2">

    </div>
     <div className="w-1/2 bg-[#363C43] text-[#969696]  ">
      <Tabs variant="unstyled">
        <TabList className="font-poppins">
          <Tab _selected={{ color: "white", bg: "blue.500" }}>About Me</Tab>
          <Tab _selected={{ color: "white", bg: "green.400" }}>Experiences</Tab>
          <Tab _selected={{ color: "white", bg: "yellow.400" }}>
            Recommended
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
              working at this awesome company for 3 years now. I was born and
              raised in Albany, NY& have been living in Santa Carla for the past
              10 years my wife Tiffany and my 4 year old twin daughters- Emma
              and Ella. Both of them are just starting school, so my calender is
              usually blocked between 9-10 AM. This is a...
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
              working at this awesome company for 3 years now. I was born and
              raised in Albany, NY& have been living in Santa Carla for the past
              10 years my wife Tiffany and my 4 year old twin daughters- Emma
              and Ella. Both of them are just starting school, so my calender is
              usually blocked between 9-10 AM. This is a...
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
              working at this awesome company for 3 years now. I was born and
              raised in Albany, NY& have been living in Santa Carla for the past
              10 years my wife Tiffany and my 4 year old twin daughters- Emma
              and Ella. Both of them are just starting school, so my calender is
              usually blocked between 9-10 AM. This is a...
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
   </div>
  );
};

export default Home;
