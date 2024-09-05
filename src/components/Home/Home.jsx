import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import image from "../../assets/Rectangle 39335.png";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useState } from "react";
import "./Gallery.css";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages([...images, { original: imageUrl, thumbnail: imageUrl }]);
    }
  };

  const imagesPerPage = 3;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentImages = images.slice(
    currentPage * imagesPerPage,
    currentPage * imagesPerPage + imagesPerPage
  );

  return (
    <div>
      <div className="flex">
        <div className="w-1/2"></div>
        <div className="bg-[#363C43] text-[#969696] rounded-3xl relative w-[720px] h-[316px]">
          <div className="flex flex-col gap-4 justify-between absolute top-5 mx-2 h-1/2 ">
            <FaRegQuestionCircle size={25} />
            <HiMiniSquares2X2 size={25} />
          </div>
          <div className="absolute right-3 top-20">
            <img src={image} alt="" />
          </div>
          <Tabs variant="unstyled" className="px-8 py-4 mx-4">
            <TabList className="font-poppins font-semibold text-[#FFFFFF] rounded-2xl bg-[#171717] p-2">
              <Tab _selected={{ bg: "black", borderRadius: 15 }}>About Me</Tab>
              <Tab _selected={{ bg: "black", borderRadius: 15 }}>
                Experiences
              </Tab>
              <Tab _selected={{ bg: "black", borderRadius: 15 }}>
                Recommended
              </Tab>
            </TabList>
            <TabPanels className="font-jakarta-sans">
              <TabPanel>
                <p>
                  Hello! I’m Dave, your sales rep here from Salesforce. I’ve
                  been working at this awesome company for 3 years now. I was
                  born and raised in Albany, NY& have been living in Santa Carla
                  for the past 10 years my wife Tiffany and my 4 year old twin
                  daughters- Emma and Ella. Both of them are just starting
                  school, so my calender is usually blocked between 9-10 AM.
                  This is a...
                </p>
              </TabPanel>
              <TabPanel>
                <p>
                  Hello! dI’m Dave, your sales rep here from Salesforce. I’ve
                  been working at this awesome company for 3 years now. I was
                  born and raised in Albany, NY& have been living in Santa Carla
                  for the past 10 years my wife Tiffany and my 4 year old twin
                  daughters- Emma and Ella. Both of them are just starting
                  school, so my calender is usually blocked between 9-10 AM.
                  This is a...
                </p>
              </TabPanel>
              <TabPanel>
                <p>
                  Hello! I’m Dave, your sales rep here from Salesforce. I’ve
                  been working at this awesome company for 3 years now. I was
                  born and raised in Albany, NY& have been living in Santa Carla
                  for the past 10 years my wife Tiffany and my 4 year old twin
                  daughters- Emma and Ella. Both of them are just starting
                  school, so my calender is usually blocked between 9-10 AM.
                  This is a...
                </p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
      <div className="flex my-8">
        <div className="w-1/2"></div>
        <div className="bg-[#363C43] text-[#969696] rounded-3xl relative w-[720px] h-[316px]">
          <div className="flex flex-col gap-4 justify-between absolute top-5 mx-2 h-1/2 ">
            <FaRegQuestionCircle size={25} />
            <HiMiniSquares2X2 size={25} />
          </div>

          <div className="flex justify-around items-center px-8 py-4">
            <button className="font-poppins text-white bg-[#171717] px-6 py-3 rounded-2xl">Gallery</button>
            <label htmlFor="fileInput" className="add-image-button bg-gradient-to-r shadow-[#6F787C] bg-opacity-20 font-bold from-[#303439] to-[#161718] rounded-3xl shadow-2xl ">
              + ADD IMAGE
            </label>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleAddImage}
              style={{ display: "none" }}
            />
            <div className="flex gap-4">
              <button className="custom-left-nav border bg-gradient-to-tr from-[#303439] to-[#161718] rounded-full p-2 text-[#6F787C]" onClick={prevPage} disabled={currentPage === 0}>
              <FaArrowLeft size={20} />
              </button>
              <button className="custom-right-nav border bg-gradient-to-tr from-[#303439] to-[#161718] rounded-full p-2 text-[#6F787C]" onClick={nextPage} disabled={currentPage >= totalPages - 1}>
              <FaArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="gallery-container">
            {currentImages.map((img, index) => (
              <img
                key={index}
                src={img.original}
                alt={`Gallery image ${index}`}
                className="gallery-image"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
