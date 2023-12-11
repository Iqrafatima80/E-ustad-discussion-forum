// forums/page.jsx
import Image from "next/image";
import Link from "next/link";
import Skills from "../components/skills/Skills";
import { content } from "@/app/data/data";
import Filters from "../components/filters/Filters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ForumPage = () => {
  const questionsData = content.forums.questions;
  const mustReadPoints = content.forums.mustReadPoints;
  return (
    <div className="ml-6 ">
      <div className="flex gap-3 mb-6">
        <div>
          <Filters>New</Filters>
        </div>
        <div>
          <Filters>Hot</Filters>
        </div>
        <div>
          <Filters>Trending</Filters>
        </div>
      </div>
      <div className="flex justify-between">
        <ul className="w-[70%] flex gap-6 flex-col">
          {questionsData.map((question) => (
            <li key={question.id}>
              <Link href="/forums/[id]" as={`/forums/${question.id}`}>
                <div className="flex flex-col gap-3 px-6 py-3 duration-500 border rounded-md shadow-xl hover:scale-105">
                  <div className="flex gap-3">
                    <div className="overflow-hidden border-2 border-gray-900 rounded-full w-14 h-14 dark:border-white">
                      <Image
                        width={15}
                        height={15}
                        src={question.author.avatarSrc}
                        alt=""
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div>
                        <p className="text-sm font-semibold">
                          {question.author.name}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">
                          {question.timestamp}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <h3 className="font-bold">{question.title}</h3>
                    </div>
                    <div>
                      <p>{question.brief}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {question.skills.map((skill, index) => (
                      <Skills key={index} bgColor={question.skillsColor[index]}>
                        {skill}
                      </Skills>
                    ))}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-[25%] border h-max mr-6">
          {mustReadPoints.map((point) => (
            <div key={point.id} className="px-4 py-8">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faStar} />
                <h3 className="text-lg font-semibold">{point.heading}</h3>
              </div>
              <hr className="border" />
              <ul className="pl-4 list-disc">
                {point.points.map((message, index) => (
                  <li key={index} className="py-2 text-sm text-blue-500 cursor-pointer">
                    {message}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForumPage;
