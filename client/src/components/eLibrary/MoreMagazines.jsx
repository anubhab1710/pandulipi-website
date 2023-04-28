import React from "react";
import "./library.css";

import cover_2018 from "../../assets/img/2018.png";
import cover_2016 from "../../assets/img/2016.png";
import cover_2014 from "../../assets/img/2014.png";
import cover_1990 from "../../assets/img/1990.png";
import cover_1985 from "../../assets/img/1985.png";
import cover_1982 from "../../assets/img/1982.png";

const MagazineMore = () => {
  const MoreMagazineDetails = [
    {
      name: "Pandulipi",
      year: "2018",
      imgLink: cover_2018,
      downloadLink: "https://drive.google.com/file/d/1VXUfS1A4RPn4Ypzg0k0awX1z-BfZMKNq/view?usp=sharing",
    },
    {
      name: "Pandulipi",
      year: "2016",
      imgLink: cover_2016,
      downloadLink: "https://drive.google.com/file/d/1dHOUV7PRCDicqRDW-zdSsq5fRUYgfS9Z/view?usp=sharing",
    },
    {
      name: "Pandulipi",
      year: "2014",
      imgLink: cover_2014,
      downloadLink: "https://drive.google.com/file/d/1m670uaJM-PA9zUszX_gcmi8HLwF6OtJQ/view?usp=sharing",
    },
    {
      name: "Pandulipi",
      year: "1990",
      imgLink: cover_1990,
      downloadLink: "https://drive.google.com/file/d/1s_jgMnMuoP5V40CTxRxkVqyBNe7yBrHZ/view?usp=sharing",
    },
    {
      name: "Pandulipi",
      year: "1985",
      imgLink: cover_1985,
      downloadLink: "https://drive.google.com/file/d/1STzcWm5S18Q1qTLp85QVHzeEhNztuQ3L/view?usp=sharing",
    },
    {
      name: "Pandulipi",
      year: "1982",
      imgLink: cover_1982,
      downloadLink: "https://drive.google.com/file/d/1A3DVdFoOKmcLKOzp6Qn4mSCZge4mqDNx/view?usp=sharing",
    },
  ];

  return (
    <div>
      <h4 className="text-center md:text-left md:pl-28">
        Older Editions of Pandulipi
      </h4>
      <div id="row">
        {MoreMagazineDetails.map((details) => (
          <div id="card">
            <div className="relative">
              <img src={details.imgLink} alt={details.name} />
              <a
                target="_blank"
                href={details.downloadLink}
                id="button"
                className="absolute bottom-20 right-5 rounded-full py-[10px] px-[15px] bg-white shadow-md"
              >
                <span id="download" className="material-symbols-rounded">
                  download
                </span>
              </a>
              <div className="details">
                <p className="text-2xl font-semibold">{details.name}</p>
                <p className="font-bold text-gray-700">{details.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MagazineMore;
