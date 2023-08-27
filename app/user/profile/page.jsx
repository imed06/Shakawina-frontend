"use client"
import { Button, Divider, Input, Spacer } from '@nextui-org/react'
import { Select, SelectItem } from "@nextui-org/react";
import Link from 'next/link';
import React from 'react'

export default function Profile() {
    return (
        <main>
            <div className='flex justify-center items-center flex-col w-full p-24'>
                <div className='flex items-center w-full gap-x-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                    </svg>
                    <h1 className='text-[#101739] text-2xl'>Mon profile</h1>
                </div>
                <div className='flex w-full items-center flex-col'>

                    {/* Informations générale */}
                    <Spacer y={8} />
                    <h2 className='font-bold'>Info général</h2>
                    <Spacer y={8} />
                    <div className='input'>
                        <Input type="text" label="Nom" labelPlacement='outside' placeholder="Nom" isRequired />
                        <Spacer x={4}></Spacer>
                        <Input type="text" label="Prenom" labelPlacement='outside' placeholder="Prenom" isRequired />
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
                            isRequired
                        >
                            <SelectItem key="geulma">geulma</SelectItem>
                        </Select>
                        <Spacer x={4}></Spacer>
                        <Select
                            label="Commune"
                            placeholder="eg: Alger"
                            labelPlacement='outside'
                            isRequired
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
                            isRequired
                        >
                            <SelectItem key="pièceID">pièce d'identité</SelectItem>
                            <SelectItem key="permis">permis de conduite</SelectItem>
                            <SelectItem key="passport">passport</SelectItem>
                        </Select>
                        <Spacer x={4}></Spacer>
                        <Input type="num" label="Numéro du pièce" labelPlacement='outside' placeholder="eg: 1223546" isRequired />
                    </div>
                    <Spacer y={4} />
                    <div className='input'>
                        <Input type="date" label="Date de délivrance" labelPlacement='outside' placeholder="eg: 1223546" isRequired />
                        <Spacer x={4}></Spacer>
                        <Select
                            label="En"
                            placeholder="eg: Alger"
                            labelPlacement='outside'
                            isRequired
                        >
                            <SelectItem key="geulma">geulma</SelectItem>
                        </Select>
                    </div>

                    {/* Contact */}
                    <Spacer y={8} />
                    <h2 className='font-bold'>Contact</h2>
                    <Spacer y={8} />
                    <div className='input'>
                        <Input type="email" label="Email" labelPlacement='outside' placeholder="Email" isRequired />
                        <Spacer x={4}></Spacer>
                        <Input type="tel" label="Numéro tel" labelPlacement='outside' placeholder="0X-XX-XX-XX-XX" isRequired />
                    </div>
                    <Spacer y={4} />
                    <div className='input'>
                        <Input type="password" label="Ancien mot de passe" labelPlacement='outside' placeholder="mot de passe" isRequired />
                        <Spacer x={4}></Spacer>
                        <Input type="password" label="Nouveau mot de passe" labelPlacement='outside' placeholder="mot de passe" isRequired />
                    </div>
                    <Spacer y={16} />

                    <div className='flex w-full justify-between'>
                        <Link href="/">
                            <Button className="text-gray-500 font-bold" >
                                Annuler
                            </Button>
                        </Link>
                        <Link href="/form/reclamation">
                            <Button color="warning" className="text-white font-bold" >
                                Mis à jour
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
