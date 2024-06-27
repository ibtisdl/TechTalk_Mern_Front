import React from "react";

import { images } from "../../../constants";
import Search from "../../../components/Search";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row">
      <div className="mt-10 lg:w-1/2">
        <h1 className="font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
        Lisez les articles les plus passionnants.
        </h1>
        <p className="text-dark-light mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
        Découvrez des conseils, astuces et histoires inspirantes pour les développeurs, rédigés par des experts de l'industrie. Que vous soyez débutant ou professionnel chevronné, vous trouverez ici des ressources précieuses pour booster vos compétences et rester à jour avec les dernières tendances.
        </p>
        <Search className="mt-10 lg:mt-6 xl:mt-10" />
        <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
          <span className="text-dark-light font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base">
            Tendances
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Programming
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Software Engineering
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Python
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block lg:1/2">
        <img
          className="w-full"
          src={images.HeroImage}
          alt="users are reading articles"
        />
      </div>
    </section>
  );
};

export default Hero;
