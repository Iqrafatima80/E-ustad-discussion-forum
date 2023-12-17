import React from "react";
import ForumOption from "./f_options";
// import Image from "next/image";
// import Link from "next/link";

const ForumSidebar = () => {
    const menuOptions = [
        { icon: "list", text: "Questions", path: "/forums" },
        { icon: "tag", text: "Tags", path: "/forums/tags" },
        { icon: "help-circle", text: "Your Questions", path: "/forums/your-questions" },
        { icon: "message-circle", text: "Your Answers", path: "/forums/your-answers" },
        { icon: "heart", text: "Your Like & Votes", path: "/forums/your-likes" },
    ];

    return (
        <div className="w-[316px] shadow-2xl m-0 h-full">
            <div class="relative flex w-full items-stretch pl-10 pt-[32px]">
                <div><span
                    class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700"
                    id="basic-addon2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="h-5 w-5">
                        <path
                            fill-rule="evenodd"
                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                            clip-rule="evenodd" />
                    </svg>
                </span></div>
                <div class="">

                    <input
                        type="search"
                        class="relative m-0 block min-w-0 flex-auto rounded bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 placeholder-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon2" />
                </div>
            </div>
            <div className="w-full flex flex-col items-start gap-[20px] py-[32px] ">
                <p className="text-slate-400 text-[12px] font-roboto font-bold px-[50px]">MENU</p>

                {menuOptions.slice(0, 2).map(({ icon, text, path }, index) => (
                    <ForumOption key={index} icon={icon} text={text} path={path} />
                ))}
            </div>

            <div className="flex flex-col items-start gap-[20px]  py-[20px]   ">
                <p className="text-slate-400 text-[12px] font-roboto font-bold  px-[50px]">PERSONAL NAVIGATOR</p>

                {menuOptions.slice(2).map(({ icon, text, path }, index) => (
                    <ForumOption key={index} icon={icon} text={text} path={path} />
                ))}
            </div>
        </div>
    );
};

export default ForumSidebar;