import React, { useState } from "react";
import Card from "./Card";
import arjun_choudhury_img from "../../assets/team/webteam/Arjun Choudhury.jpg";
import atri_sukul_img from "../../assets/team/webteam/Atri Sukul.jpg";
import sayan_kr_bhowmick_img from "../../assets/team/webteam/Sayan Kumar Bhowmick.jpg";
import wasim_reja_img from "../../assets/team/webteam/Wasim Reja.jpeg";
import samrat_sadhu_img from "../../assets/team/webteam/Samrat Sadhu.jpg";
const webTeamDetails = [
  {
    name: "WASIM REJA",
    designation: "Frontend Lead",
    department: "Information Technology",
    imgLink: wasim_reja_img,
    linkedin: "https://www.linkedin.com/in/wasimreja/",
    github: "https://github.com/wasimreja/",
  },
  {
    name: "SAMRAT SADHU",
    designation: "Backend Lead",
    department: "Electronics & Communication Engineering",
    imgLink: samrat_sadhu_img,
    linkedin: "https://www.linkedin.com/in/samrat-sadhu-744874202",
    github: "https://github.com/Samrat-14",
  },
  {
    name: "ARJUN CHOUDHURY",
    designation: "Frontend Developer",
    department: "Information Technology",
    imgLink: arjun_choudhury_img,
    linkedin: "https://www.linkedin.com/in/arjun-choudhury-469671227/",
    github: "https://github.com/arjunchoudhury07",
  },
  {
    name: "ATRI SUKUL",
    designation: "Backend Developer",
    department: "Computer Science & Engineering",
    imgLink: atri_sukul_img,
    linkedin: "https://www.linkedin.com/in/atri-sukul-35a9b022a/",
    github: "https://github.com/AtriSukul1508",
  },
  {
    name: "SAYAN KUMAR BHOWMICK",
    designation: "Frontend Developer",
    department: "Computer Science & Engineering",
    imgLink: sayan_kr_bhowmick_img,
    linkedin: "https://www.linkedin.com/in/sayankr007",
    github: "https://github.com/Sayankumar007",
  },
];

const WebTeam = () => {
  const [show, setShow] = useState(false);
  const [currentInd, setCurrentInd] = useState(0);

  return (
    <div className="bg-[#252b42]">
      <h1 className="text-center text-5xl p-10 text-[#fff]">
        Meet the Web Team
      </h1>
      <div>
        <div className="flex justify-center items-center flex-wrap gap-x-32 gap-y-8 px-10 pb-10 mt-4">
          {webTeamDetails.map((details, ind) => (
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <img
                  src={details.imgLink}
                  alt={details.name}
                  className="rounded-full mx-auto  w-48 h-48"
                />
                <button
                  onClick={() => {
                    setShow(true);
                    setCurrentInd(ind);
                  }}
                  className="absolute bottom-4 right-[-3px] rounded-full py-[6px] px-[15px] bg-transparent"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="#0f0f0f"
                    viewBox="0 0 20 20"
                    className="white shadow-md rounded-full"
                  >
                    <path d="M10,20A10,10,0,1,0,0,10,10,10,0,0,0,10,20ZM4.049,9h8.559L10.342,6.735l1.414-1.414,4.735,4.733-4.735,4.734-1.414-1.414L12.718,11H4.049Z" />
                  </svg>
                </button>
              </div>
              <div>
                <p className="text-center font-bold text-[#fff]">
                  {details.name}
                </p>
                <p className="text-center text-[#fff]">{details.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Card
        onClose={() => setShow(false)}
        show={show}
        details={webTeamDetails[currentInd]}
      />
    </div>
  );
};

export default WebTeam;
