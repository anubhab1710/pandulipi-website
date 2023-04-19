import React, { useState } from "react";
import Card from "./Card";
import anilabha_dutta_img from "../../assets/team/Anilabha Dutta.jpg"
import anirban_debnath_img from "../../assets/team/Anirban Debnath.jpeg"
import anshik_chand_img from "../../assets/team/Anshik Chand.jpg"
import anubhab_sarkar_img from "../../assets/team/Anubhab Sarkar.jpg"
import arnab_pramanik_img from "../../assets/team/Arnab Paramanik.jpg"
import babai_ghosh_img from "../../assets/team/Babai Ghosh.jpg"
import debopriya_das_img from "../../assets/team/Debopriya Das.jpg"
import mainak_maiti_img from "../../assets/team/MAINAK MAITI.jpg"
import prakritish_mukhopadhyay_img from "../../assets/team/PRAKRITISH MUKHOPADHYAY.jpg"
import rajdeep_nath_img from "../../assets/team/Rajdeep Nath.jpg"
import sayangdipta_sen_img from "../../assets/team/Sayangdipta Sen.jpg"
import shankhalika_mallick_img from "../../assets/team/Shankhalika Mallick.jpeg"
import shreyan_ghatak_img from "../../assets/team/Shreyan Ghatak.jpg"

const CoreTeam = () => {
  const [show, setShow] = useState(false);
  const [currentInd,setCurrentInd] = useState(null)
  const coreTeamDetails = [
    {
      name: "SHREYAN GHATAK",
      designation: "Secretary & English Editor",
      department: "Civil Engineering",
      imgLink:
        shreyan_ghatak_img,

      linkedin: "",
      github: "",
    },
    {
      name: "ANSHIK CHAND",
      designation: "Cashier &  Hindi Editor",
      department: "Civil Engineering",
      imgLink:
        anshik_chand_img,

      linkedin: "https://www.linkedin.com/in/anshik-chand-2b32381b4",
      github: "",
    },
    {
      name: "SHANKHALIKA MALLICK",
      designation: "Cashier & English Editor",
      department: "Electronics & Communication Engineering",
      imgLink:
        shankhalika_mallick_img,

      linkedin: "https://in.linkedin.com/in/shankhalika-mallick-248b3819a",
      github: "",
    },
    {
      name: "ANIRBAN DEBNATH",
      designation: "Media & Technical Head",
      department: "Electronics & Communication Engineering",
      imgLink:
        anirban_debnath_img,

      linkedin: "https://www.linkedin.com/in/anirban-debnath-9977011a2",
      github: "",
    },
    {
      name: "ANUBHAV SARKAR",
      designation: "English Editor",
      department: "Electronics & Communication Engineering",
      imgLink:
        anubhab_sarkar_img,

      linkedin: "https://www.linkedin.com/in/anubhabsarkar/",
      github: "",
    },
    {
      name: "PRAKRITISH MUKHOPADHYAY",
      designation: "Bengali Editor",
      department: "Civil Engineering",
      imgLink:
        prakritish_mukhopadhyay_img,

      linkedin: "https://www.linkedin.com/mwlite/in/pmuk",
      github: "",
    },
    {
      name: "RAJDEEP NATH",
      designation: "Bengali Editor",
      department: "Mechanical Engineering",
      imgLink:
       rajdeep_nath_img ,

      linkedin: "https://www.linkedin.com/in/rajdeep-nath-4b0877198/",
      github: "",
    },
    {
      name: "BABAI GHOSH",
      designation: "Bengali Editor",
      department: "Electrical Engineering",
      imgLink:
       babai_ghosh_img ,

      linkedin:
        "https://www.linkedin.com/in/babai-ghosh-9930a1211?trk=contact-info",
      github: "",
    },
    {
      name: "DEBOPRIYA DAS",
      designation: "Artwork Head",
      department: "Civil Engineering",
      imgLink:
        debopriya_das_img,

      linkedin: "https://www.linkedin.com/in/debopriya-das-8502a41b4",
      github: "",
    },
    {
      name: "ANILABHA DATTA",
      designation: "Photography Head",
      department: "Computer Science & Engineering",
      imgLink:
        anilabha_dutta_img,

      linkedin: "https://www.linkedin.com/in/anilabha-datta",
      github: "",
    },
    {
      name: "SAYANGDIPTA SEN",
      designation: "Design Head",
      department: "Civil Engineering",
      imgLink:
       sayangdipta_sen_img ,

      linkedin: "http://www.linkedin.com/in/sayangdiptasen1006",
      github: "",
    },
    {
      name: "ARNAB PARAMANIK",
      designation: "Design Head",
      department: "Mechanical Engineering",
      imgLink:
        arnab_pramanik_img,

      linkedin: "https://www.linkedin.com/in/arnab-paramanik-1b8286174/",
      github: "",
    },
    {
      name: "MAINAK MAITY",
      designation: "Design Head",
      department: "Mechanical Engineering",
      imgLink:
        mainak_maiti_img,

      linkedin: "https://www.linkedin.com/in/mainak-maiti-56657b192",
      github: "",
    },
  ];

  return (
    <div>
      <h1 className="text-center text-5xl p-10 text-[#295C7A]">
        Meet the Core Team
      </h1>
      <div>
        <div className="flex justify-center items-center flex-wrap gap-x-32 gap-y-8 mb-10 px-10">
          {coreTeamDetails.map((details,ind) => (
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <img
                  src={details.imgLink}
                  alt={details.name}
                  className="rounded-full mx-auto  w-44 h-44 "
                />
                <button
                  onClick={() => {
                    setShow(true);
                    setCurrentInd(ind)
                  }}
                  className="absolute bottom-4 right-[-3px] rounded-full py-[6px] px-[15px] bg-transparent "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="#fff"
                    viewBox="0 0 20 20"
                    className="white shadow-md rounded-full"
                  >
                    <path d="M10,20A10,10,0,1,0,0,10,10,10,0,0,0,10,20ZM4.049,9h8.559L10.342,6.735l1.414-1.414,4.735,4.733-4.735,4.734-1.414-1.414L12.718,11H4.049Z" />
                  </svg>
                </button>
              </div>
              <div>
                <p className="text-center font-bold">{details.name}</p>
                <p className="text-center">{details.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Card onClose={() => setShow(false)} show={show} details={coreTeamDetails[currentInd]} />
    </div>
  );
};


export default CoreTeam;
