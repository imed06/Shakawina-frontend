"use client"
import { submitApi } from '@/app/api/user/submitApi';
import { Button, Checkbox, Divider, Input, Spacer, Textarea } from '@nextui-org/react'
import { Select, SelectItem } from "@nextui-org/react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import _ from 'lodash';

export default function FormPersonnel() {
    const router = useRouter()
    const [etape, setEtape] = useState(true)

    const [personalData, setPersonalData] = useState({
        nom: '',
        prenom: '',
        email: '',
        password: '123',
        wilaya: '',
        commune: '',
        natureDoc: '',
        numDoc: '',
        dateDeliv: '',
        placeDeliv: '',
        tel: '',
    });

    const [complaintData, setComplaintData] = useState({
        content: '',
        type: '',
        objet: '',
    });

    const handleChangePersonal = (field, value) => {
        setPersonalData(prevData => ({
            ...prevData,
            [field]: value
        }));
        console.log(personalData)
    };

    const handleChangeComplaint = (field, value) => {
        setComplaintData(prevData => ({
            ...prevData,
            [field]: value
        }));
        console.log(complaintData)
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        var userId;

        /* add user */
        try {
            const response = await fetch('http://localhost:4000/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(personalData),
            });

            const json = await response.json()

            console.log(json)

            userId = json.user.id;

            if (response.ok) {
                console.log('Data sent successfully');
            } else {
                console.error('Failed to send data');
            }
        } catch (error) {
            console.error('Error:', error);
        }

        complaintData.userId = userId

        console.log(complaintData)

        /* add complaint */
        try {
            const response = await fetch('http://localhost:4000/complaint/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(complaintData),
            });

            const json = await response.json()

            console.log(json)

            if (response.ok) {
                console.log('Data sent successfully');
                router.push("/user/reclamations")
            } else {
                console.error('Failed to send data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChangeEtape = () => {
        const hasEmptyField = _.some(personalData, value => value === '');
        
        setEtape(false)
    }

    return (
        <main className='bg-gray-100'>

            {/* etape 01 */}
            {
                etape ?
                    <div className='flex justify-center items-center flex-col bg-white w-3/5 p-20 my-20 rounded-md border-2'>
                        <div className='flex items-center justify-between w-full'>
                            <h1 className='text-[#101739] text-2xl'>Informations Plaignant</h1>
                            <p>Etape 1/2</p>
                        </div>
                        <div className='flex w-full items-center flex-col'>

                            {/* Informations générale */}
                            <Spacer y={8} />
                            <h2 className='font-bold'>Info général</h2>
                            <Spacer y={8} />
                            <div className='input'>
                                <Input
                                    type="text"
                                    label="Nom"
                                    labelPlacement='outside'
                                    validationState="invalid"
                                    placeholder="Nom" isRequired
                                    onChange={e => handleChangePersonal('nom', e.target.value)}
                                />
                                <Spacer x={4}></Spacer>
                                <Input
                                    type="text"
                                    label="Prenom"
                                    labelPlacement='outside'
                                    placeholder="Prenom"
                                    isRequired
                                    onChange={e => handleChangePersonal('prenom', e.target.value)}
                                />
                            </div>

                            {/* Adresse */}
                            <Spacer y={8} />
                            <h2 className='font-bold'>Adresse</h2>
                            <Spacer y={8} />
                            <div className='input'>
                                <Select
                                    label="Wilaya"
                                    placeholder="eg: Alger"
                                    labelPlacement='outside'
                                    className="max-w-xs"
                                    isRequired
                                    onChange={e => handleChangePersonal('wilaya', e.target.value)}
                                >
                                    <SelectItem key="geulma">geulma</SelectItem>
                                </Select>
                                <Spacer x={4}></Spacer>
                                <Select
                                    label="Commune"
                                    placeholder="eg: Alger"
                                    labelPlacement='outside'
                                    className="max-w-xs"
                                    isRequired
                                    onChange={e => handleChangePersonal('commune', e.target.value)}
                                >
                                    <SelectItem key="geulma">geulma</SelectItem>
                                </Select>
                            </div>

                            {/* Preuve d'identité */}
                            <Spacer y={8} />
                            <h2 className='font-bold'>Preuve d'identité</h2>
                            <Spacer y={8} />
                            <div className='input'>
                                <Select
                                    label="Nature du document"
                                    placeholder="eg: pièce d'identité"
                                    labelPlacement='outside'
                                    className="max-w-xs"
                                    isRequired
                                    onChange={e => handleChangePersonal('natureDoc', e.target.value)}
                                >
                                    <SelectItem key="pièce d'identité">pièce d'identité</SelectItem>
                                    <SelectItem key="permis de conduite">permis de conduite</SelectItem>
                                    <SelectItem key="passport">passport</SelectItem>
                                </Select>
                                <Spacer x={4}></Spacer>
                                <Input
                                    type="num"
                                    label="Numéro du pièce"
                                    labelPlacement='outside'
                                    placeholder="eg: 1223546"
                                    isRequired
                                    onChange={e => handleChangePersonal('numDoc', e.target.value)}
                                />
                            </div>
                            <Spacer y={4} />
                            <div className='input'>
                                <Input
                                    type="date"
                                    label="Date de délivrance"
                                    labelPlacement='outside'
                                    placeholder="eg: 1223546"
                                    isRequired
                                    onChange={e => handleChangePersonal('dateDeliv', e.target.value)}
                                />
                                <Spacer x={4}></Spacer>
                                <Select
                                    label="En"
                                    placeholder="eg: Alger"
                                    labelPlacement='outside'
                                    className="max-w-xs"
                                    isRequired
                                    onChange={e => handleChangePersonal('placeDeliv', e.target.value)}
                                >
                                    <SelectItem key="geulma">geulma</SelectItem>
                                </Select>
                            </div>

                            {/* Contact */}
                            <Spacer y={8} />
                            <h2 className='font-bold'>Contact</h2>
                            <Spacer y={8} />
                            <div className='input'>
                                <Input
                                    type="email"
                                    label="Email"
                                    labelPlacement='outside'
                                    placeholder="Email"
                                    isRequired
                                    onChange={e => handleChangePersonal('email', e.target.value)}
                                />
                                <Spacer x={4}></Spacer>
                                <Input
                                    type="tel"
                                    maxLength={10}
                                    minLength={10}
                                    label="Numéro tel"
                                    labelPlacement='outside'
                                    placeholder="0X-XX-XX-XX-XX"
                                    isRequired
                                    onChange={e => handleChangePersonal('tel', e.target.value)}
                                />
                            </div>
                            <Spacer y={16} />

                            <div className='flex w-full justify-between'>
                                <Link href="/">
                                    <Button className="text-gray-500 font-bold" >
                                        Annuler
                                    </Button>
                                </Link>
                                <Button color="warning" className="text-white font-bold" onClick={handleChangeEtape}>
                                    Continue
                                </Button>
                            </div>
                        </div>
                    </div>
                    :
                    /* étape 02 */
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
                                    onChange={e => handleChangeComplaint('objet', e.target.value)}
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
                                    onChange={e => handleChangeComplaint('type', e.target.value)}
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
                                    onChange={e => handleChangeComplaint('content', e.target.value)}
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
                                <Button color="warning" className="text-white font-bold" onClick={handleFormSubmit}>
                                    Envoyer
                                </Button>
                            </div>
                        </div>
                    </div>
            }

        </main>
    )
}
