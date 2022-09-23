import NavbarAds from "../components/atoms/navbar-ads";
import FooterAds from "../components/footer-ads";
import Link from "next/link";
import {classNames} from "../utils/utils";
import {XCircleIcon} from "@heroicons/react/solid";
import {FormEvent, useState} from "react";
import {useRouter} from "next/router";

enum ConsumptionType{
    EUROS = "€",
    KW  = "Kw"
}

const Budget = () => {
    const [message, setMessage] = useState<string>("")
    const [fullName, setFullName] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [fullAddress, setFullAddress] = useState<any>({
        address: "",
        zipCode: "",
        city: "",
        province: ""
    })

    const [consumption, setConsumption] = useState({
        type: ConsumptionType.EUROS,
        data: "0,00"
    })

    const [acceptPrivacy, setAcceptPrivacy] = useState<boolean>(false)
    const [alertMessage, setAlertMessage] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const router = useRouter()

    const [submitted, setSubmitted] = useState<boolean>(false)

    const handlePrivacy = () => {
        acceptPrivacy ? setAcceptPrivacy(false) : setAcceptPrivacy(true)
    }
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        let data = {
            fullName,
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
                setFullAddress({
                    address: "",
                    zipCode: "",
                    city: "",
                    province: ""
                })
                setAcceptPrivacy(false)
                setAlertMessage("Mensaje enviado correctamente!")
                setTimeout(() => {
                    setSubmitted(false)
                }, 5000)
            }
            if (res.status === 400) {
                setError(true)
                setAlertMessage("Error al enviar el formulario!")
                setTimeout(() => {
                    setError(false)
                }, 5000)
            }
        })

    }
    return (
        <>
            <NavbarAds/>
            <div className={"flex flex-col items-center justify-center pt-6 pb-24"}>
                <h2 className={"font-Inter text-4xl font-semibold mb-8"}>Pide tu presupuesto ahora!</h2>
                <form
                    method="POST"
                    className="grid grid-cols-2 gap-y-6 gap-x-4 font-Inter w-1/2"

                >
                    <div>
                        <label htmlFor="full-name">
                            Nombre completo
                        </label>
                        <input
                            type="text"
                            name="full-name"
                            id="full-name"
                            className="mt-1 block w-full shadow-sm py-3 px-4 placeholder-gray-400 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                            placeholder={"Ej. Paco Gómez Martin"}
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">
                            Teléfono
                        </label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="mt-1 block w-full shadow-sm py-3 px-4 placeholder-gray-400 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                            placeholder={"Ej. 623 623 623"}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className={"col-span-2"}>
                        <label htmlFor="phone">
                            Direción completa
                        </label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="mt-1 block w-full shadow-sm py-3 px-4 placeholder-gray-400 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                            placeholder={"Ej. calle ejemplo, 24, 1º A"}
                            value={fullAddress.address}
                            onChange={(e) => setFullAddress({...fullAddress, address: e.target.value})}
                        />
                    </div>
                    <div className={"col-span-2"}>
                        <label htmlFor="phone">
                            Población/Ciudad
                        </label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="mt-1 block w-full shadow-sm py-3 px-4 placeholder-gray-400 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                            placeholder={"Ej. Los pueblos"}
                            value={fullAddress.city}
                            onChange={(e) => setFullAddress({...fullAddress, city: e.target.value})}
                        />
                    </div>
                    <div className={"col-span-1"}>
                        <label htmlFor="phone">
                            Código postal
                        </label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="mt-1 block w-full shadow-sm py-3 px-4 placeholder-gray-400 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                            placeholder={"Ej. 08081"}
                            value={fullAddress.zipCode}
                            onChange={(e) => setFullAddress({...fullAddress, zipCode: e.target.value})}
                        />
                    </div>
                    <div className={"col-span-1"}>
                        <label htmlFor="phone">
                            Província
                        </label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="mt-1 block w-full shadow-sm py-3 px-4 placeholder-gray-400 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                            placeholder={"Ej. Barcelona"}
                            value={fullAddress.province}
                            onChange={(e) => setFullAddress({...fullAddress, province: e.target.value})}
                        />
                    </div>
                    <div className={"col-span-1"}>
                        <label htmlFor="phone">
                            Tipo de consumo
                        </label>
                        <div className={"h-12 flex items-center justify-start pr-2 text-gray-600 text-lg"}>
                            <div>
                                <label htmlFor="phone">
                                    Kilovatios (Kw)
                                </label>
                                <input
                                    id="privacy"
                                    name="privacy"
                                    type="checkbox"
                                    checked={consumption.type === ConsumptionType.KW ? true : false}
                                    onChange={() => setConsumption({...consumption, type: ConsumptionType.KW})}
                                    className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded ml-2"
                                />
                            </div>
                            <div className={"ml-6"}>
                                <label htmlFor="phone">
                                    Euros (€)
                                </label>
                                <input
                                    id="privacy"
                                    name="privacy"
                                    type="checkbox"
                                    checked={consumption.type === ConsumptionType.EUROS ? true : false}
                                    onChange={() => setConsumption({...consumption, type: ConsumptionType.EUROS})}
                                    className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded ml-2"
                                />
                            </div>

                        </div>

                    </div>
                    <div className={"col-span-1"}>
                        <label htmlFor="phone">
                            Consumo
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                                type="text"
                                name="company-website"
                                id="company-website"
                                value={consumption.data}
                                onChange={(e) => setConsumption({...consumption,  data: e.target.value})}
                                className="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-right"
                                placeholder="Ej. 24,00"
                            />
                            <span
                                className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                              {consumption.type ? consumption.type : "€"}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-start col-span-2 -mt-3 text-sm">
                        <div className="h-5 flex items-center">
                            <label htmlFor="privacy" className="sr-only">
                                Privacy
                            </label>
                            <input
                                id="privacy"
                                name="privacy"
                                type="checkbox"
                                checked={acceptPrivacy}
                                onChange={handlePrivacy}
                                className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded"
                            />
                        </div>
                        <div className="ml-3 flex flex-row">
                            <p className="text-gray-500">{"Haciendo click acepta la política de privacidad. Que puede leer en"}
                                <Link href="/privacy-policy"><a
                                    className="text-darkGreen ml-1">{"Política de privacidad"}</a></Link></p>
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
            <FooterAds/>
        </>
    )
}
export default Budget
