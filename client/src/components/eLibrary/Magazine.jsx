import React from "react";
import "./library.css";
import ToggleVisibility from "./ToggleShow";
import MagazineMore from "./MoreMagazines";

const Magazine = () => {
  const magazineDetails = [
    {
      name: "Pandulipi",
      year: "2022",
      imgLink:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564",
      downloadLink:
        "https://drive.google.com/file/d/1_Vns8sZ8BR2LQG0Lb7Xu1BCue30P1Vsm/view?usp=share_link",
    },
    {
      name: "Pandulipi",
      year: "2021",
      imgLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsf8N7-q8AKvxahFanHJNnJLMRYas7H7MRwQ&usqp=CAU",
      downloadLink:
        "https://drive.google.com/file/d/1Jc6S6R1M8i8KdoAQErpLP5mLN2-ew-Sj/view?usp=share_link",
    },
    {
      name: "Pandulipi",
      year: "2020",
      imgLink:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564",
      downloadLink:
        "https://drive.google.com/file/d/1zQoMh1adIQATjMWDGpNwS9SvPK2b4osV/view?usp=share_link",
    },
    {
      name: "Pandulipi",
      year: "2019",
      imgLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsf8N7-q8AKvxahFanHJNnJLMRYas7H7MRwQ&usqp=CAU",
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
