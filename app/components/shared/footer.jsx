import React from 'react'
import Logo from "../../assets/anemlogoblanc.png"
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer>
            <div
                className="mx-auto space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8"
            >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <Image
                            src={Logo}
                            alt="logo"
                            width={70}
                            quality={100}
                        />
                        <p className="mt-4 max-w-xs text-gray-400">
                            <span className='text-white font-bold'>Shakawina</span> Platform, plateforme de l'agence national de l'emploi. Vous pouvez désormais soumettre en ligne vos réclamations et les suivre, établissement public.
                        </p>
                    </div>
                    <div
                        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3"
                    >
                        <div>
                            <span className="hidden h-1 w-10 bg-[#F8AF28] lg:block mb-2"></span>
                            <p className="font-medium  text-white">OÙ NOUS TROUVER</p>
                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a
                                        href="#"
                                        className=" transition hover:opacity-75 text-white"
                                    >
                                        1on1 Coaching
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <span className="hidden h-1 w-10 bg-[#F8AF28] lg:block mb-2"></span>
                            <p className="font-medium  text-white">LIENS RAPIDES</p>
                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <Link
                                        href="https://www.anem.dz/"
                                        className=" transition hover:opacity-75 text-white"
                                    >
                                        Anem
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://wassitonline.anem.dz/"
                                        className=" transition hover:opacity-75 text-white"
                                    >
                                        Wassit online
                                    </Link>
                                </li>
                            </ul>
                        </div>


                        <div>
                            <span className="hidden h-1 w-10 bg-[#F8AF28] lg:block mb-2"></span>

                            <p className="font-medium  text-white">NEWSLETTER</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a
                                        href="#"
                                        className=" transition hover:opacity-75 text-white"
                                    >
                                        Accessibility
                                    </a>
                                </li>
                                <li>
                                    <Button color="warning" className='text-white rounded-full'>
                                        S'ABONNER
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <p className="text-xs text-gray-400">
                    &copy; 2022. Company Name. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
