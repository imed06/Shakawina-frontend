import React from 'react'
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import QuestionImage from "../../assets/icon.png"
import Image from 'next/image';
import Link from 'next/link';

export default function ReclamationCard({ imagePath, textColor, title, descp, linkText }) {
    const formLink = linkText == "Soumettre votre réclamation" ? "/form/personnel" : "/mesReclamations" 
    return (
        <Card className="flex justify-center items-start max-w-lg py-5">
            <CardHeader className="flex items-center gap-8">
                <Image
                    alt="nextui logo"
                    radius="sm"
                    src={imagePath}
                    width={120}
                    height={120}
                />
                <div className="flex flex-col">
                    <h2 className="text-lg font-bold">{title}</h2>
                    <p className=" text-lg">{descp}</p>
                </div>
            </CardHeader>
            <CardBody className=" py-2 flex flex-row justify-end font-bold cursor-pointer">
                <Link href={formLink} className={`text-[${textColor}]`}>
                    <p >{linkText}</p>
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={textColor} className="w-6 h-6 ml-3">
                    <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
            </CardBody>
        </Card>
    )
}
