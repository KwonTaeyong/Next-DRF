"use client"

import React, { useState } from "react";
import Popup from "./Popup";

export default function Banner() {
  const PopupList = [
    {
      imageUrl:
        "https://www.sbiz.or.kr/sup/download/popup/1706173536413.png",
      id: 1,
    },
    {
      imageUrl:
        "https://www.sbiz.or.kr/sup/download/popup/1707988555289.png",
      id: 2,
    },
  ];

  const [showPopupList, setShowPopupList] = useState(
    Array(PopupList.length).fill(true)
  );

  const handleClosePopup = (index) => {
    setShowPopupList((prevState) =>
      prevState.map((showPopup, idx) => (idx === index ? false : showPopup))
    );
  };

  return (
    <>
      {PopupList.map((popupData, index) => (
        <Popup
          key={popupData.id}
          imageUrl={popupData.imageUrl}
          onClose={() => handleClosePopup(index)}
          isVisible={showPopupList[index]}
          id={popupData.id}
        />
      ))}
    </>
  );
}