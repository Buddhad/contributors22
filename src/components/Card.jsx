import { useState } from "react";
import "./card.css";
import Tilt from "react-parallax-tilt"

const callouts = [ {
    name: "Buddhadeb Chhetri",
    description:
      "Front-end Developer 💻 | |📱Android Developer|🎮 Game Developer |Blogger ✍️| Poster Designer📜| Coder👨‍💻",
    imageSrc: "https://avatars.githubusercontent.com/u/71445997?v=4",
    imageAlt: "Buddhadeb Chhetri",
    href: "https://github.com/Buddhad",
  },
  {
    name: "N Deepika",
    description: "Full-Stack Developer 💻 | Coder👨‍💻 | Cloud Computing Enthusiast ☁️ | Poster Designer📜",
    imageSrc:
      "https://avatars.githubusercontent.com/u/66058598?s=400&u=22248a738b51bd63710048cdfe83baf60a17a348&v=4",
    imageAlt: "N Deepika",
    href: "https://github.com/N-Deepika",
    languages: ["JavaScript",
      "Python",
      "C++",]
      
  },
  {
    name: "Siddharth",
    description: "Software Engineer",
    imageSrc:
      "https://avatars.githubusercontent.com/u/59883021?v=4",
    imageAlt: "siddharth",
    href: "https://github.com/siddharthsg2",
  },
  {
    name: "Temitope",
    description: "Backend Engineer",
    imageSrc:
      "https://avatars.githubusercontent.com/u/71881414?v=4",
    imageAlt: "Temitope",
    href: "https://github.com/TemitopeAgbaje",
  }
];


export default function Card() {
    const [val, setval] = useState("");
    return (
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="text-2xl font-bold text-gray-900">
              Contributors
            </h2>
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 ">
              {callouts.map((callout) =>
                callout.name.toLowerCase().includes(val.toLowerCase()) ? (
                <Tilt><div
                    key={callout.name}
                    className="group relative py-6 profile-card text-center"
                  >
                    <div className="relative w-48 h-48 overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1 ">
                      <img
                        style={{ objectFit: "contain" }}
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <h3 className="contributor-name mt-6 text-xl font-bold text-black ">
                      <div className="contributor">{callout.name}</div>
                    </h3>
                    <a href={callout.href} target="_blank" rel="noreferrer">
                      <span className="absolute inset-0" />
                    </a>
                    <p className="text-base font-semibold text-gray-900 dark:text-gray-500">
                      {callout.description}
                    </p>
                  
                  </div>
                  </Tilt> 
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
