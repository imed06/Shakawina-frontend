import React from 'react'
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import QuestionImage from "../../assets/icon.png"
import Image from 'next/image';

export default function ReclamationCard({ imagePath, textColor, title, descp, linkText }) {
    return (
        <Card className="flex justify-center items-center max-w-sm">
            <CardHeader className="flex gap-3">
                <Image
                    alt="nextui logo"
                    radius="sm"
                    src={imagePath}
                    width={120}
                    height={120}
                />
                <div className="flex flex-col">
                    <h2 className="text-md">{title}</h2>
                    <p className="text-small text-default-500">{descp}</p>
                </div>
            </CardHeader>
            <CardBody className="overflow-hidden py-2">
                <h2 className={`text-${textColor}`}>{linkText}</h2>
            </CardBody>
        </Card>
    )
}
