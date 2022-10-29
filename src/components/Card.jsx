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

    name: "Vedang Mule",
    description: "Full-Stack Developer 💻 | Coder👨‍💻 | Cyber Security Enthusiast  | competitive programmer",
    imageSrc:
      "https://avatars.githubusercontent.com/u/98508734?s=400&u=07ac59f304af105cac32a13dcc098c41263daf28&v=4",
    imageAlt: "Vedang Mule",
    href: "https://github.com/developer208",
    languages: ["JavaScript",
      "Python",
      "C++","java"]
      
  },
{
    name: "Siddharth",
    description: "Software Engineer",
    imageSrc:
      "https://avatars.githubusercontent.com/u/59883021?v=4",
    imageAlt: "siddharth",
    href: "https://github.com/siddharthsg2",
    languages: ["Python",
      "Java"]
  },
  {
    name: "Shaurya Srivastava",
    description: "Software Engineer",
    imageSrc:
      "https://avatars.githubusercontent.com/u/64094563?v=4",
    imageAlt: "shaurya",
    href: "https://github.com/shauryasrivatava "
  }, 
  {
    name: "Temitope",
    description: "Backend Engineer",
    imageSrc:
      "https://avatars.githubusercontent.com/u/71881414?v=4",
    imageAlt: "Temitope",
    href: "https://github.com/TemitopeAgbaje",
  },
  {
    name: "Vaibhav Jain",
    description: "Software Engineer",
    imageSrc:
      "https://avatars.githubusercontent.com/u/43786003?s=400&u=5f0cc0453d6ef34e40680d1dc6a8d3f6a81d3787&v=4",
    imageAlt: "vaibhav_jain",
    href: "https://github.com/VAIBHAVCES",
  },
  {
    name: "Siddharth",
    description: "Web Developer",
    imageSrc:
      "https://avatars.githubusercontent.com/u/90437355?v=4",
    imageAlt: "Siddharth",
    href: "https://github.com/JadugarKalakaboola",
  },
  {
    name: "Aditya Ahirwar",
    description: "Student & Web Developer",
    imageSrc:
      "https://avatars.githubusercontent.com/u/77871976?v=4",
    imageAlt: "Aditya ",
    href: "https://github.com/Aditya-ahirwar",
  },
  {
    name: "Muhammad Taha",
    description: "Student & Web Developer",
    imageSrc:
      "https://avatars.githubusercontent.com/u/57311675?v=4",
    imageAlt: "Taha ",
    href: "https://github.com/mtahashahid",
  }
];


export default function Card() {
    const [val, setval] = useState("");
    return (
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 bg-black lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="text-2xl font-bold text-slate-200 text-900">
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
                    <h3 className="contributor-name mt-6 text-xl font-bold text-white ">
                      <div className="contributor">{callout.name}</div>
                    </h3>
                    <a href={callout.href} target="_blank" rel="noreferrer">
                      <span className="absolute inset-0" />
                    </a>
                    <p className="text-base font-semibold text-white dark:text-gray-500">
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
