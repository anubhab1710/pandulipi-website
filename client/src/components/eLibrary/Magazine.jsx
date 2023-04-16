import React from "react";
import "./library.css";
import ToggleVisibility from "./ToggleShow";
import MagazineMore from "./MoreMagazines";
import cover_2022 from "../../assets/img/2022.png";
import cover_2021 from "../../assets/img/2021.png";
import cover_2020 from "../../assets/img/2020.png";
import cover_2019 from "../../assets/img/2019.png";
import cover_2018 from "../../assets/img/2018.png";
import cover_2016 from "../../assets/img/2016.png";
import cover_2014 from "../../assets/img/2014.png";
import cover_1990 from "../../assets/img/1990.png";
import cover_1985 from "../../assets/img/1985.png";
import cover_1982 from "../../assets/img/1982.png";

const Magazine = () => {
  const magazineDetails = [
    {
      name: "Pandulipi",
      year: "2022",
      imgLink: cover_2022,
      downloadLink:
        "https://drive.google.com/file/d/1_Vns8sZ8BR2LQG0Lb7Xu1BCue30P1Vsm/view?usp=share_link",
    },
    {
      name: "Pandulipi",
      year: "2021",
      imgLink: cover_2021,
      downloadLink:
        "https://drive.google.com/file/d/1Jc6S6R1M8i8KdoAQErpLP5mLN2-ew-Sj/view?usp=share_link",
    },
    {
      name: "Pandulipi",
      year: "2020",
      imgLink: cover_2020,
      downloadLink:
        "https://drive.google.com/file/d/1zQoMh1adIQATjMWDGpNwS9SvPK2b4osV/view?usp=share_link",
    },
    {
      name: "Pandulipi",
      year: "2019",
      imgLink: cover_2019,
      downloadLink:
        "https://drive.google.com/file/d/1SzjOeg_rO8C1nhaj24hkkNU5HREWrQFH/view?usp=share_link",
    },
  ];

  return (
    <div>
      <h4 className="text-center md:text-left md:pl-28">
        Latest Editions of Pandulipi
      </h4>
      <div>
        <div id="row">
          {magazineDetails.map((details) => (
            <div id="card">
              <div className="relative">
                <img src={details.imgLink} alt={details.name} />
                <a
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

        <div class="more">
          <ToggleVisibility>
            <MagazineMore />
          </ToggleVisibility>
        </div>
      </div>
    </div>
  );
};

export default Magazine;
