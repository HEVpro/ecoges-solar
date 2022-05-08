import Data from '../data.json';

import {MailIcon, PhoneIcon} from '@heroicons/react/outline'
import {FormEvent, useState} from "react";
import {XCircleIcon} from "@heroicons/react/solid";
import Privacy from "./atoms/privacy";
import {classNames} from "../utils/utils";

const Contact = () => {
    const [fullName, setFullName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [submitted, setSubmitted] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [alertMessage, setAlertMessage] = useState<string>("")
    const [acceptPrivacy, setAcceptPrivacy] = useState<boolean>(false)
    const data = Data.contact;

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        let data = {
            fullName,
            email,
            phone,
            message,
            privacy: acceptPrivacy ? "Acepta la política de privacidad" : "No acepta la política de privacidad"
        }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log(res.body)
            if (res.status === 200) {
                setSubmitted(true)
                setFullName('')
                setMessage('')
                setPhone('')
                setEmail('')
                setAcceptPrivacy(false)
                setAlertMessage("Correo enviado correctamente, en breves nos pondremos en contacto contigo")
                setTimeout(() => {
                    setSubmitted(false)
                }, 5000)
            }
            if(res.status === 400){
                setError(true)
                setAlertMessage("Algo ha ido mal, vuelva a intentarlo")
                setTimeout(() => {
                    setError(false)
                }, 5000)
            }
        })

    }
    const handlePrivacy = () => {
        acceptPrivacy ? setAcceptPrivacy(false) : setAcceptPrivacy(true)
    }
    return (
        <div
            id={Data.contact.id}
            className="relative ">
            <div className="absolute inset-0">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-bone"/>
            </div>
            <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
                <div className="bg-bone py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                    <div className="max-w-lg mx-auto">
                        <h2 className="text-2xl font-extrabold tracking-tight text-black font-Inter sm:text-5xl">{data.title}</h2>
                        <p className="mt-3 text-lg leading-6 text-gray-500">
                            {data.description}
                        </p>
                        <dl className="mt-8 text-base text-gray-500">
                            <div>
                                <dt className="sr-only">Postal address</dt>
                                <dd>
                                    <p>{data.street}</p>
                                    <p>{data.address}</p>
                                </dd>
                            </div>
                            <div className="mt-6">
                                <dt className="sr-only">Phone number</dt>
                                <dd className="flex">
                                    <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true"/>
                                    <span className="ml-3">{data.phone}</span>
                                </dd>
                            </div>
                            <div className="mt-3">
                                <dt className="sr-only">Email</dt>
                                <dd className="flex">
                                    <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true"/>
                                    <span className="ml-3">{data.email}</span>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="bg-bone py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                    <div className="max-w-lg mx-auto lg:max-w-none">
                        <form
                            method="POST"
                            className="grid grid-cols-1 gap-y-6"

                        >
                            <div>
                                <label htmlFor="full-name" className="sr-only">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    name="full-name"
                                    id="full-name"
                                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                                    placeholder="Nombre"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="sr-only">
                                    Teléfono
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                                    placeholder="Teléfono"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                                    placeholder="Mensaje"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            <div className="flex items-start">
                                <div className="h-5 flex items-center">
                                    <input
                                        id="offers"
                                        name="offers"
                                        type="checkbox"
                                        checked={acceptPrivacy}
                                        onChange={handlePrivacy}
                                        className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded"
                                    />
                                </div>
                                <div className="ml-3 text-sm flex flex-row">
                                    <p className="text-gray-500">{Data.contact.policy}</p>
                                    <Privacy />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    onClick={(e) => handleSubmit(e)}
                                    disabled={!acceptPrivacy}
                                    className={classNames("inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-darkGreen",
                                        acceptPrivacy ? "text-white bg-softGreen hover:bg-darkGreen" : "text-black bg-gray-300 hover:bg-gray-500"
                                    )}
                                >
                                    Enviar
                                </button>
                                {error &&
                                    <div className="flex mt-8">
                                        <div className="flex-shrink-0">
                                            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true"/>
                                        </div>
                                        <div className="ml-3">
                                            <h3 className="text-sm font-medium text-red-800">{alertMessage}</h3>
                                        </div>
                                    </div>
                                }
                                {submitted &&
                                    <div className="flex mt-8">
                                        <div className="flex-shrink-0">
                                            <XCircleIcon className="h-5 w-5 text-green-700" aria-hidden="true"/>
                                        </div>
                                        <div className="ml-3">
                                            <h3 className="text-sm font-medium text-green-700">{alertMessage}</h3>
                                        </div>
                                    </div>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Contact;