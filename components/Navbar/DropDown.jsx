import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const DropDown = ({ name, op1, op2, op3 }) => {
    return (
        <Menu as="div" className="relative inline-block text-left mr-7">
            <div>
                <Menu.Button className="inline-flex justify-center w-full   px-4 py-2  text-xl font-medium " >
                    {name}
                    <div className="-mr-1 ml-2 h-5 w-5 " >
                        <Image
                            alt="down arrow"
                            src="/Images/arrow.webp"
                            width={12}
                            height={7}
                        />

                    </div>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    {op1}
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    {op2}
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    {op3}
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default DropDown;