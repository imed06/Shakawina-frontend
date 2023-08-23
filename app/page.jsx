"use client"
import Image from "next/image"
import QuestionImage from "./assets/illustration.png"
import icon from "./assets/icon.png"
import icon2 from "./assets/icon2.png"
import ReclamationCard from "./components/cards/reclamation"
import Stepper from "./components/cards/stepper"

export default function Home() {

  return (
    <main className="flex flex-col">
      <div className="flex header">
        <div>
          <h1 className=" leading-tight">
            PLATE-FORME DE <br />
            RÉCLAMATION
          </h1>
          <p>
            Le Centre Régional d'Investissement Marrakech-Safi est à votre écoute
            !Vous pouvez désormais soumettre en ligne vos réclamations et les suivre
          </p>
        </div>
        <Image
          src={QuestionImage}
          alt="illustration"
          width={400}
          quality={100}
        />
      </div>
      <div className="flex justify-evenly w-full">
        <ReclamationCard
          imagePath={icon}
          textColor="[#F8AF28]"
          title="Soumettre votre réclamation"
          descp="Pour soumettre une nouvelle réclamation."
          linkText="Soumettre votre réclamation"
        />
        <ReclamationCard
          imagePath={icon2}
          textColor="[#5EC3C5]"
          title="Suivre mes réclamations"
          descp="Pour suivre l'état d'avancement d'une réclamation déjà soumise"
          linkText="Suivre votre réclamation"
        />
      </div>
      <div>
        <Stepper />
      </div>
    </main>
  )
}
