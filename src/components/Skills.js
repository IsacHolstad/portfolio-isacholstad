import React from 'react';
import javascriptIcon from "../img/JavaScript-logo.png";
import htmlIcon from "../img/html-icon.png";
import cssIcon from "../img/css-icon.png";
import reactIcon from "../img/React-icon.svg.png";
import viteIcon from "../img/vitejs-icon.svg";
import figmaIcon from "../img/figma-icon.webp";
import postmanIcon from "../img/postman-icon.png";
import supabaseIcon from "../img/supabase-icon.png";
import tailwindIcon from "../img/tailwind-icon.png";
import bootstrapIcon from "../img/bootstrap-icon.webp";
import gitIcon from "../img/Git-Icon-1788C.png";
import webstormIcon from "../img/webstorm-icon.png";
import sourcetreeIcon from "../img/sourcetree-icon.png";
import githubIcon from "../img/github-icon.png";
import netlifyIcon from "../img/netlify-icon.webp";

function Skills () {
    return (
        <>
            <div className="bg-gray-900 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-center text-2xl font-semibold leading-8 text-white">
                        Skills
                    </h2>
                    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-8">
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={javascriptIcon}
                            alt="Transistor"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={htmlIcon}
                            alt="Reform"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={cssIcon}
                            alt="Tuple"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={reactIcon}
                            alt="SavvyCal"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={viteIcon}
                            alt="Statamic"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={figmaIcon}
                            alt="Statamic"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={postmanIcon}
                            alt="Statamic"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={supabaseIcon}
                            alt="Statamic"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={tailwindIcon}
                            alt="Statamic"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={bootstrapIcon}
                            alt="Statamic"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={gitIcon}
                            alt="Statamic"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={webstormIcon}
                            alt="Statamic"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={sourcetreeIcon}
                            alt="Statamic"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={githubIcon}
                            alt="Statamic"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={netlifyIcon}
                            alt="Statamic"
                            width={158}
                            height={48}
                        />
                    </div>
                </div>
            </div>

        </>
    );
};

export default Skills;
