"use client"
import { Button, Checkbox, Input, Spacer, Textarea } from '@nextui-org/react'
import { Select, SelectItem } from "@nextui-org/react";
import Link from 'next/link';
import React, { useState } from 'react'

export default function FormComplaint(data) {

    const [formData, setFormData] = useState({
        content: '',
        type: '',
        objet: '',
    });

    const handleChange = (field, value) => {
        setFormData(prevData => ({
            ...prevData,
            [field]: value
        }));
        console.log(formData)
    };

    return (
        <main>
            <div className='flex justify-center items-center flex-col bg-white w-3/5 p-20 my-20 rounded-md border-2'>
                <div className='flex items-center justify-between w-full'>
                    <h1 className='text-[#101739] text-2xl'>Informations Réclamation</h1>
                    <p>Etape 2/2</p>
                </div>
                <Spacer y={8} />
                <div className='flex w-full items-center flex-col'>

                    {/* objet de reclamation */}
                    <div className='input'>
                        <Select
                            label="Type de réclamation"
                            placeholder="eg: réclamation"
                            labelPlacement='outside'
                            isRequired
                            onChange={e => handleChange('objet', e.target.value)}
                        >
                            <SelectItem key="reclamation">reclamation</SelectItem>
                            <SelectItem key="remarque">remarque</SelectItem>
                            <SelectItem key="suggestion">suggestion</SelectItem>
                        </Select>
                    </div>

                    {/* type de reclamation */}
                    <Spacer y={8} />
                    <div className='input'>
                        <Select
                            label="Objet de réclamation"
                            placeholder="eg: payement retardée"
                            labelPlacement='outside'
                            isRequired
                            onChange={e => handleChange('type', e.target.value)}
                        >
                            <SelectItem key="mauvais service">mauvais service</SelectItem>
                        </Select>
                    </div>

                    {/* description de reclamation */}
                    <Spacer y={8} />
                    <div className='input'>
                        <Textarea
                            label="Corps de réclamation"
                            labelPlacement="outside"
                            placeholder="Enter your description"
                            onChange={e => handleChange('content', e.target.value)}
                        />
                    </div>

                    {/* pièces jointes */}
                    <Spacer y={8} />
                    <div>piece jointe</div>
                    <Spacer y={8} />
                    <div className='input'>
                        <Checkbox>J'accepte <span className='text-primary underline'>les conditions générales et les termes d'utilisation</span></Checkbox>
                    </div>
                    
                    <Spacer y={16} />
                    <div className='input justify-between'>
                        <Link href="/form/personnel">
                            <Button className="text-gray-500 font-bold" >
                                Précédent
                            </Button>
                        </Link>
                        <Button color="warning" className="text-white font-bold" >
                            Envoyer
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}
