"use client";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ReactStars from "react-stars";
import React, { useState } from "react";

export default function Home() {
  const [thumbsUpClicked, setThumbsUpClicked] = useState(false);
  const [thumbsDownClicked, setThumbsDownClicked] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [safetyRating, setSafetyRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const data = [
    { index: 0, title: "Adventurous" },
    { index: 1, title: "Good Listener" },
    { index: 2, title: "Caring" },
    { index: 3, title: "Helpful" },
  ];
  const handleButtonClick = (index) => {
    setSelectedButton(index === selectedButton ? null : index);
  };
  const handleThumbsUpClick = () => {
    setThumbsUpClicked(true);
    setThumbsDownClicked(false);
  };

  const handleThumbsDownClick = () => {
    setThumbsDownClicked(true);
    setThumbsUpClicked(false);
  };

  return (
    <div className="m-2 p-4 flex flex-col sm:items-center sm:justify-center  ">
      <div className="flex flex-col gap-4 mt-6">
        <header className="text-3xl font-extrabold 2xl:text-5xl">Leave a Review</header>
        <div>
          <h2 className="mt-2 font-semibold 2xl:text-3xl 2xl:mt-5">Safety</h2>
          <h7 className="text-slate-400 text-[10px] 2xl:text-[15px] ">
            How safe did you feel with Trausti?
          </h7>
          <ReactStars count={5} size={40} color2={"#ffd700"} onChange={setSafetyRating} value={safetyRating} />
        </div>

        <div>
          <h2 className="mt-2 font-semibold 2xl:text-3xl">Communication</h2>
          <h7 className="text-slate-400 text-[10px] leading-[0.5] 2xl:text-[15px] ">
            Lorem ipsum, dolor sit amet consectetur ?
          </h7>
          <ReactStars count={5} size={40} color2={"#ffd700"} onChange={setCommunicationRating} value={communicationRating} />
        </div>
        <div>
          <h2 className="font-semibold normal-case 2xl:text-3xl">
            Would you recommend Trausti?
          </h2>
          <Button onClick={handleThumbsDownClick} disabled={thumbsDownClicked}>
            <ThumbDownIcon color={thumbsDownClicked ? "success" : "disabled"} />
            <span className="normal-case ml-2">No</span>
          </Button>
          <Button onClick={handleThumbsUpClick} disabled={thumbsUpClicked}>
            <ThumbUpIcon color={thumbsUpClicked ? "success" : "disabled"} />
            <span className="normal-case ml-2">Yes</span>
          </Button>
        </div>
        <div>
          <h2 className="font-semibold 2xl:text-3xl">Praise</h2>
          <h7 className="text-slate-400 text-[10px] leading-[0.5] 2xl:text-[15px]">
            Lorem ipsum, dolor sit amet consectetur ?
          </h7>
          <div className="flex flex-wrap gap-3 mt-4">
            {data?.map((val) => {
              return (
                <Button
                  key={val.index}
                  className={`border-1 rounded-full text-black ${
                    selectedButton === val.index
                      ? "bg-green-500"
                      : "bg-gray-200"
                  }`}
                  onClick={() => handleButtonClick(val.index)}
                >
                  <span className="text-[10px] normal-case">{val.title}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
