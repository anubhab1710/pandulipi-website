import React, { useState } from "react";
import Card from "./Card";
import Kushal_Ghosh from "../../assets/team/coreteam/Kushal_Ghosh.jpeg";
import Arka_Biswas from "../../assets/team/coreteam/Arka Biswas.jpeg";
import Bisal_Kumar from "../../assets/team/coreteam/Bisal Kumar.jpeg";
import Nisha from "../../assets/team/coreteam/Nisha.jpeg";
import Protiti_Saha from "../../assets/team/coreteam/Protiti Saha.jpeg";
import Saikat_Parker from "../../assets/team/coreteam/Saikat Parker.jpeg";
import Saikat_Sarkar from "../../assets/team/coreteam/Saikat Sarkar.jpeg";
import Sastipada from "../../assets/team/coreteam/Sastipada.jpeg";
import Shourjendra from "../../assets/team/coreteam/Shourjendra.jpeg";
import Soham_Sen from "../../assets/team/coreteam/Soham Sen.jpeg";
import Soumya_Samanta from "../../assets/team/coreteam/Soumya Samanta.jpeg";
import Sourav_Ghosh from "../../assets/team/coreteam/Sourav Ghosh.jpeg";
import Souvik_Biswas from "../../assets/team/coreteam/Souvik Biswas.jpeg";
import Sushant_Kumar from "../../assets/team/coreteam/Sushant Kumar.jpeg";
import Tunnisha from "../../assets/team/coreteam/Tunnisha.jpeg";
import Uttaran from "../../assets/team/coreteam/Uttaran.jpeg";
import V_Nikita from "../../assets/team/coreteam/V Nikhita.jpeg";
import Wasim_reja from "../../assets/team/coreteam/Wasim Reja.jpeg";

const CoreTeam = () => {
  const [show, setShow] = useState(false);
  const [currentInd, setCurrentInd] = useState(null);
  const coreTeamDetails = [
    {
      name: "Uttaran Nath Sarkar",
      designation: "Secretary & Bengali Editor",
      department: "Electrical Engineering",
      linkedin: "https://www.linkedin.com/in/uttaran-nath-sarkar-148498203",
      imgLink: Uttaran,
      github: "",
    },
    {
      name: "Sastipada Dan",
      designation: "Cashier & Bengali Editor",
      department: "Electrical Engineering",
      linkedin: "https://www.linkedin.com/in/sastipada-dan-266019203",
      imgLink: Sastipada,
      github: "",
    },
    {
      name: "V. Nikhita",
      designation: "Cashier & English Editor",
      department: "Computer Science & Engineering",
      linkedin: "https://www.linkedin.com/in/nikhita28",
      imgLink: V_Nikita,
      github: "",
    },
    {
      name: "Wasim Reja",
      designation: "Media, Web & Technical Head",
      department: "Information Technology",
      linkedin: "https://www.linkedin.com/in/wasimreja/",
      imgLink: Wasim_reja,
      github: "",
    },
    {
      name: "Bisal Kumar",
      designation: "Strategist & Hindi Editor",
      department: "Information Technology",
      linkedin: "https://www.linkedin.com/in/bisal-kumar-97459122a",
      imgLink: Bisal_Kumar,
      github: "",
    },
    {
      name: "Protiti Saha",
      designation: "Strategist & Event Head",
      department: "Electrical Engineering",
      linkedin: "https://www.linkedin.com/in/protiti-saha-b91028203/",
      imgLink: Protiti_Saha,
      github: "",
    },
    {
      name: "Nisha Yadav",
      designation: "Strategist & Hindi Editor",
      department: "Computer Science & Engineering",
      linkedin: "https://www.linkedin.com/in/nisha-yadav-2950351ab/",
      imgLink: Nisha,
      github: "",
    },
    {
      name: "Soham Sen",
      designation: "English Editor",
      department: "Electrical Engineering",
      linkedin: "https://www.linkedin.com/in/nuclearcactus/",
      imgLink: Soham_Sen,
      github: "",
    },
    {
      name: "Tunnisha Dasgupta",
      designation: "English Editor",
      department: "Civil Engineering",
      linkedin: "https://www.linkedin.com/in/tunnisha-das-gupta-a43231204/",
      imgLink: Tunnisha,
      github: "",
    },
    {
      name: "Sourav Ghosh",
      designation: "Bengali Editor",
      department: "Electrical Engineering",
      linkedin: "https://www.linkedin.com/in/sourav-ghosh-02b3ba213",
      imgLink: Sourav_Ghosh,
      github: "",
    },
    {
      name: "Sushant Kumar Gupta",
      designation: "Hindi Editor",
      department: "Information Technology",
      linkedin: "https://www.linkedin.com/in/sushantkumargupta2001",
      imgLink: Sushant_Kumar,
      github: "",
    },
    {
      name: "Saikat Paikar",
      designation: "Design Head",
      department: "Civil Engineering Department",
      linkedin: "https://www.linkedin.com/in/saikat-paikar-905a70207",
      imgLink: Saikat_Parker,
      github: "",
    },
    {
      name: "Arka Biswas",
      designation: "Design Head",
      department: "Electrical Engineering",
      linkedin: "https://www.linkedin.com/in/arka-biswas-859428203/",
      imgLink: Arka_Biswas,
      github: "",
    },
    {
      name: "Soumya Samanta",
      designation: "Artwork Head",
      department: "Civil Engineering Department",
      linkedin: "https://www.linkedin.com/in/soumya-samanta-b55426203",
      imgLink: Soumya_Samanta,
      github: "",
    },
    {
      name: "Souvik Biswas",
      designation: "Photography Head",
      department: "Electronics & Communication Engineering",
      linkedin: "https://www.linkedin.com/in/souvik-biswas-84b766246/",
      imgLink: Souvik_Biswas,
      github: "",
    },
    {
      name: "Kushal Ghosh",
      designation: "Photography Head",
      department: "Information Technology",
      linkedin: "https://www.linkedin.com/in/kushaljgec2025/",
      imgLink: Kushal_Ghosh,
      github: "",
    },
    {
      name: "Shourjendra Banerjee",
      designation: "Social Media Head & Event Head",
      department: "Information Technology",
      linkedin: "https://www.linkedin.com/in/shourjendra-banerjee-82589422a/",
      imgLink: Shourjendra,
      github: "",
    },
    {
      name: "Saikat Sarkar",
      designation: "Social Media Head",
      department: "Mechanical Engineering",
      linkedin: "https://www.linkedin.com/in/saikat-sarkar-259021203",
      imgLink: Saikat_Sarkar,
      github: "",
    },
  ];

  return (
    <div className="bg-[#252b42]">
      <h1 className="text-center text-5xl p-10 text-[#fff]">
        Meet the Web Team
      </h1>
      <div>
        <div className="flex justify-center items-center flex-wrap gap-x-32 gap-y-8 px-10 pb-10 mt-4">
          {coreTeamDetails.map((details, ind) => (
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
        details={coreTeamDetails[currentInd]}
      />
    </div>
  );
};

export default CoreTeam;
