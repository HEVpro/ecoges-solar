/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useEffect, useState} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import {CheckIcon, ChevronDownIcon} from '@heroicons/react/solid'
import {classNames} from "../../utils/utils";
import {useRouter} from "next/router";

const publishingOptions = [
    {value: 'es', label: 'Español', current: true},
    {value: 'en', label: 'English', current: false},
    {value: 'it', label: 'Italiano', current: false},
    {value: 'de', label: 'Deutsch', current: false},
    {value: 'fr', label: 'Français', current: false}
]

export default function Languages() {
    const router = useRouter()
    const [selected, setSelected] = useState<any>(publishingOptions[0])
    const [language, setLanguage] = useState<string>()

    const locale = router.locale

    const handleSubmit = (e: any) => {
        setSelected
        setLanguage(e.value)
    }
    useEffect(() => {
        router.push('/', '/', {locale: language})
    }, [language])

    useEffect(() => {
        setSelected(publishingOptions.filter(item => item.value === locale)[0])
    }, [locale])

    return (
            <Listbox value={selected} onChange={handleSubmit}>
                {({open}) => (
                    <>
                        <Listbox.Label className="sr-only">Change published status</Listbox.Label>
                        <div className="relative mr-2">
                            <div className="inline-flex shadow-sm rounded-md divide-x divide-green-600 h-10">
                                <div
                                    className="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-softGreen">
                                    <div
                                        className="relative inline-flex items-center bg-softGreen py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-black">
                                        <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                                        <p className="ml-1 text-sm font-medium">{selected.label}</p>
                                    </div>
                                    <Listbox.Button
                                        className="relative inline-flex items-center bg-softGreen p-2 rounded-l-none rounded-r-md text-sm font-medium text-black hover:bg-softGreen focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500">
                                        <span className="sr-only">Change published status</span>
                                        <ChevronDownIcon className="h-5 w-5 text-black" aria-hidden="true"/>
                                    </Listbox.Button>
                                </div>
                            </div>

                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options
                                    className="origin-top-right absolute z-10 right-0 mt-2 w-72 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    {publishingOptions.map((option) => (
                                        <Listbox.Option
                                            key={option.label}
                                            className={({active}) =>
                                                classNames(
                                                    active ? 'bg-softGreen' : '',
                                                    'cursor-default select-none relative p-4 text-sm text-black'
                                                )
                                            }
                                            value={option}
                                            onChange={handleSubmit}
                                        >
                                            {({selected, active}) => (
                                                <div className="flex flex-col">
                                                    <div className="flex justify-between">
                                                        <p className={selected ? 'font-semibold' : 'font-normal'}>{option.label}</p>
                                                        {selected ? (
                                                            <span className={active ? 'text-black' : 'text-green-500'}>
                                                          <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                                                        </span>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </>
                )}
            </Listbox>

    )
}
