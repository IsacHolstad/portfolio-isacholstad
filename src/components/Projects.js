import React from 'react';
import venueFinderImg from "../img/houseicon.png"
import buyBetterImg from "../img/page.icon.png"
import auctionHouseImg from "../img/logo.svg"
import snakeGameImg from "../img/snakegame-icon.jpg"
import noroffLogo from "../img/noroff-logo.png"
import jsTwoCaImg from "../img/3-30454_bluejay-drawing-baby-blue-bird-clip-art.jpg"

function Projects() {
    const project = [
        {
            id: 1,
            name: 'VenueFinder',
            repo: 'https://github.com/IsacHolstad/venuefinder',
            site: 'https://comforting-gelato-d2e497.netlify.app/',
            imageSrc: venueFinderImg,
            imageAlt: "VenueFinder a AirBnB like website",
        },
        {
            id: 2,
            name: 'BuyBetter',
            repo: 'https://github.com/IsacHolstad/buybetter',
            site: 'https://6480334bbd88f042442207b3--shiny-moxie-e179f9.netlify.app/',
            imageSrc: buyBetterImg,
            imageAlt: "E-commerce website",

        },
        {
            id: 3,
            name: 'Noroff Graduation 23',
            repo: 'https://github.com/IsacHolstad/graduation--showcase-2023',
            site: 'https://comforting-gelato-d2e497.netlify.app/',
            imageSrc: noroffLogo,
            imageAlt: "Noroff graduation showcase for all students",
        },
        {
            id: 4,
            name: 'Auction House',
            repo: 'https://github.com/IsacHolstad/auction-house-22',
            site: 'https://comforting-gelato-d2e497.netlify.app/',
            imageSrc: auctionHouseImg,
            imageAlt: "Auction House, a auctioning site",

        },
        {
            id: 5,
            name: 'Snake game',
            repo: 'https://github.com/IsacHolstad/snakegame.react',
            site: 'https://comforting-gelato-d2e497.netlify.app/',
            imageSrc: snakeGameImg,
            imageAlt: "E-commerce website",
        },
        {
            id: 6,
            name: 'SocialMedia App',
            repo: 'https://github.com/IsacHolstad/js-2-ca',
            site: 'https://isac-socialmedia-app-js-ca.netlify.app/signup.html',
            imageSrc: jsTwoCaImg,
            imageAlt: "Social media app, much like twitter",
        },
    ];

    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Projects</h2>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
                        {project.map((item) => (
                            <div key={item.id} className="group relative">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-50 lg:aspect-none  lg:h-80">
                                    <img
                                        src={item.imageSrc}
                                        alt={item.imageAlt}
                                        className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-2 flex justify-between">
                                    <div>
                                        <h3 className="text-md font-semibold py-2 text-gray-900 ">
                                            {item.name}
                                        </h3>
                                    </div>
                                </div>
                                <div>
                                    <button className="mr-2 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        <a href={item.repo}>View Repo</a>
                                    </button>
                                    <button className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        <a href={item.repo}>View Site</a>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
