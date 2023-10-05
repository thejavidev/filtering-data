import React, { useEffect, useState } from "react";
import {
  account,
  eyecam_co,
  faceit,
  icon_remove,
  insure,
  loopstudios,
  manage,
  myhome,
  photoshop,
  shortly,
  the_air,
} from "../assets";
import { nanoid } from "nanoid";
import { getLocal, setLocal } from "../utilty/utilty";

export const dataAll = [
  {
    id: 1,
    company: "Photosnap",
    logo: photoshop,
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: manage,
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: account,
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: myhome,
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: loopstudios,
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: faceit,
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: shortly,
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: insure,
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: eyecam_co,
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: the_air,
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

const Home = () => {
  const getapi = getLocal("data");
  const getSelected = getLocal("filter");
  const [api, setApi] = useState(getapi || dataAll);
  const [selected, setSelected] = useState(getSelected || []);

  const selectedElemnts = (items, key) => {
    setSelected((prevState) => {
      const newState = prevState.some((filter) => filter.value === items)
        ? prevState
        : [
            ...prevState,
            {
              id: nanoid(),
              value: items,
              key: key,
            },
          ];
      return newState;
    });
  };

  const clearElemenst = () => {
    setSelected([]);
    setApi(dataAll);
  };

  const removeElement = (elId) => {
    setSelected(selected.filter(({ id }) => id !== elId));
    setApi(dataAll);
  };

  useEffect(() => {
    setApi(
      api?.filter((item) => {
        return selected.every((elem) => {
          if (Array.isArray(item[elem.key])) {
            return item[elem.key].includes(elem?.value);
          } else {
            return item[elem.key] === elem.value;
          }
        });
      })
    );
    setLocal("filter", selected);
    setLocal("data", api);
  }, [selected]);

  return (
    <>
      <div className="mx-36  xl:mx-10 md:mx-4">
        {selected.length > 0 && (
          <div className="bg-white  overflow-hidden rounded-lg -m-4 relative z-20 flex items-center justify-between gap-3">
            <div className="grid grid-cols-8 gap-4 items-center w-[95%] py-5 px-5 ">
              {selected?.map((elem) => (
                <div
                  key={elem?.id}
                  className="flex justify-between w-full   bg-[#f1f5f4] rounded-md px-1 py-1 h-auto relative overflow-hidden cursor-default "
                >
                  <div className="left w-[80%] mr-8">{elem?.value}</div>
                  <button
                    onClick={() => removeElement(elem?.id)}
                    className="right bg-[#589da2] absolute right-0 top-0 flex items-center justify-center h-full px-1 py-1 cursor-pointer"
                  >
                    <img src={icon_remove} className="filter" alt="" />
                    <img src={icon_remove} className="filter" alt="" />
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() => clearElemenst()}
              type="button"
              className="mr-5 text-[#709494] font-bold text-lg capitalize hover:underline transition-all"
            >
              clear
            </button>
          </div>
        )}

        <section className="mt-20 all">
          {api &&
            api?.map((elem, i) => {
              return (
                <div
                  key={i}
                  className="box-shadow-ss w-full grid grid-cols-2 lg:flex lg:flex-wrap gap-4 p-5 mb-8 bg-white elem_1 relative rounded-lg lg:mb-[60px]"
                >
                  <div className="left flex items-center gap-4 lg:border-b-[1px] w-full lg:border-b-[#00] pb-[20px] relative">
                    <div className="img lg:absolute lg:-top-[3rem] lg:">
                      <img src={elem?.logo} className="lg:w-16 lg:h-16 "alt="" />
                    </div>
                    <div className="flex flex-col gap-1 lg:pt-4">
                      <div className="flex items-center gap-3">
                        <h2 className="font-bold capitalize text-[#61a49b]">
                          {elem?.company}
                        </h2>
                        {elem?.new && (
                          <span className="uppercase bg-[#60a6a8] text-white text-sm font-medium px-2 py-[2px] rounded-lg md:text-xs">
                            new
                          </span>
                        )}
                        {elem?.futured && (
                          <span className="uppercase bg-[#2a3838] text-white text-sm font-medium px-2 py-[2px] rounded-lg md:text-sm">
                            featured
                          </span>
                        )}
                      </div>
                      <div className="title">
                        <h3 className="text-[#2a2a2a] capitalize font-bold text-xl md:text-sm">
                          {elem?.position}
                        </h3>
                      </div>
                      <ul className="flex items-center text-[#b8b8b8] gap-7">
                        <li className="capitalize font-medium text-sm">
                          {elem?.postedAt} 
                        </li>
                        <li className="list-disc font-medium capitalize text-sm">
                          {elem?.contract}
                        </li>
                        <li className="list-disc font-medium capitalize text-sm">
                          {elem?.location}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="right flex justify-end">
                    <ul className="flex items-center flex-wrap gap-4 capitalize font-bold ">
                      <li
                        onClick={() => selectedElemnts(elem?.role, "role")}
                        className="bg-[#eef7f6] text-[#73a4a1] px-2 py-1 text-sm cursor-pointer hover:bg-[#5aaba5] hover:text-white transition-all delay-100 ease-in"
                      >
                        {elem?.role}
                      </li>
                      <li
                        onClick={() => selectedElemnts(elem?.level, "level")}
                        className="bg-[#eef7f6] text-[#73a4a1] px-2 py-1 text-sm cursor-pointer hover:bg-[#5aaba5] hover:text-white transition-all delay-100 ease-in"
                      >
                        {elem?.level}
                      </li>
                      {elem?.languages?.map((cur, i) => (
                        <li
                          key={i}
                          onClick={() => selectedElemnts(cur, "languages")}
                          className="bg-[#eef7f6] text-[#73a4a1] px-2 py-1 text-sm cursor-pointer hover:bg-[#5aaba5] hover:text-white transition-all delay-100  ease-in"
                        >
                          {cur}
                        </li>
                      ))}
                      {elem?.tools?.map((elem, i) => (
                        <li
                          key={i}
                          onClick={() => selectedElemnts(elem, "tools")}
                          className="bg-[#eef7f6] text-[#73a4a1] px-2 py-1 text-sm cursor-pointer hover:bg-[#5aaba5] hover:text-white transition-all delay-100 ease-in"
                        >
                          {elem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
        </section>
      </div>
    </>
  );
};

export default Home;
