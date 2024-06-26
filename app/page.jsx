"use client"
import Image from "next/image"
import QuestionImage from "./assets/Questions-pana.png"
import icon from "./assets/icon.png"
import icon2 from "./assets/icon2.png"
import ReclamationCard from "./components/cards/reclamation"
import Stepper from "./components/cards/stepper"
import CustomAccordion from "./components/accordion"
import Footer from "./components/shared/footer"
import CustomNavbar from "./components/shared/navbar"

export default function Home() {

  return (
    <main className="">
      <CustomNavbar />
      <div className="content">
        <div className="header">
          <div>
            <h1 className=" leading-tight text-black">
              PLATE-FORME DE <br />
              RÉCLAMATION
            </h1>
            <p className="text-black">
              L'agence national de l'emploi est à votre écoute! <br />
              Vous pouvez désormais soumettre en ligne vos réclamations et les suivre
            </p>
          </div>
          <Image
            src={QuestionImage}
            alt="illustration"
            width={400}
            quality={100}
          />
        </div>
        <div className="flex justify-center gap-16">
          <ReclamationCard
            imagePath={icon}
            textColor="#F8AF28"
            title="Soumettre votre réclamation"
            descp="Pour soumettre une nouvelle réclamation."
            linkText="Soumettre votre réclamation"
          />
          <ReclamationCard
            imagePath={icon}
            textColor="
            #0515A3"
            title="Suivre mes réclamations"
            descp="Pour suivre l'état d'avancement d'une réclamation déjà soumise."
            linkText="Suivre votre réclamation"
          />
        </div>
        <div className="mx-40">
          <Stepper />
          <div className="flex justify-between my-20 gap-16">
            <div className=" w-1/4 ">
              <h1 className="title">
                PLATE-FORME DE <br />
                RÉCLAMATION
              </h1>
              <p className="text-base mt-6 ">
                L'agence national de l'emploi est à votre écoute
                !Vous pouvez désormais soumettre en ligne vos réclamations et les suivre
              </p>
              <h4 className="text-[#F8AF28] mt-6 flex cursor-pointer">
                Lire toutes les FAQs
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-3">
                  <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>

              </h4>
            </div>
            <CustomAccordion />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
