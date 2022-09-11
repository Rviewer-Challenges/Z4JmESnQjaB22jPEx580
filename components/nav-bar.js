/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const arrayMenuNav = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'ExecuteJS!',
        link: '/execute-js'
    },
    {
        title: 'Docs JSeint',
        link: '/jseint/docs'
    },
    {
        title: 'JSeint',
        link: '/jseint'
    }
];
export default function NavBar() {
    const [OpenNav, setOpenNav] = useState(false);
    return (
        <>
            <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 bg-js animate-navbar-transition">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <div className="flex">
                        <div className="hexagono">
                            <div className="wheel">
                                <ul className="umbrella">
                                    <li className="color"></li>
                                    <li className="color"></li>
                                    <li className="color"></li>
                                    <li className="color"></li>
                                    <li className="color"></li>
                                    <li className="color"></li>
                                    <li className="color"></li>
                                    <li className="color"></li>
                                    <li className="color"></li>
                                    <li className="color"></li>
                                    <li className="color"></li>
                                    <li className="color"></li>
                                </ul>
                            </div>
                            <div className="clip grid place-content-center font-sans font-bold">
                                JS
                            </div>
                        </div>
                        <span className=" self-center pl-2 text-xl font-semibold whitespace-nowrap tracking-tighter font-mono">
                            I{' '}
                            <span className=" text-red-800 tracking-tighter">
                                ❤️
                            </span>{' '}
                            JS
                        </span>
                    </div>
                    <button
                        onClick={() => setOpenNav(!OpenNav)}
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
                        </svg>
                    </button>
                    <div
                        className=" w-full hidden md:block md:w-auto"
                        id="navbar-default"
                    >
                        <motion.div layout>
                            <AnimatePresence>
                                <motion.ul
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        height: 'auto',
                                        transition: { duration: 0.5 }
                                    }}
                                    exit={{
                                        opacity: 0,
                                        height: 0,
                                        transition: { duration: 0.5 }
                                    }}
                                    className={'flex  rounded-lg '}
                                >
                                    {arrayMenuNav.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{
                                                opacity: 0
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,

                                                transition: {
                                                    duration: 0.1 * index
                                                }
                                            }}
                                            exit={{
                                                opacity: 0
                                            }}
                                        >
                                            <Link href={item.link}>
                                                <a
                                                    className=" block py-2 pr-4 pl-3 text-black rounded-lg hover:bg-gray-900 hover:text-white "
                                                    aria-current="page"
                                                >
                                                    {item.title}
                                                </a>
                                            </Link>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </AnimatePresence>
                        </motion.div>
                    </div>
                    <div
                        className=" w-full md:hidden md:w-auto"
                        id="navbar-default"
                    >
                        <motion.div layout>
                            <AnimatePresence>
                                {OpenNav && (
                                    <motion.ul
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            height: 'auto',
                                            transition: { duration: 0.5 }
                                        }}
                                        exit={{
                                            opacity: 0,
                                            height: 0,
                                            transition: { duration: 0.5 }
                                        }}
                                        className={
                                            'flex-col md:flex  rounded-lg '
                                        }
                                    >
                                        {arrayMenuNav.map((item, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{
                                                    opacity: 0
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,

                                                    transition: {
                                                        duration: 0.1 * index
                                                    }
                                                }}
                                                exit={{
                                                    opacity: 0
                                                }}
                                            >
                                                <Link href={item.link}>
                                                    <a
                                                        onClick={() => {
                                                            if (OpenNav) {
                                                                setOpenNav(
                                                                    false
                                                                );
                                                            }
                                                        }}
                                                        className=" block py-2 pr-4 pl-3 text-black rounded-lg hover:bg-gray-900 hover:text-white "
                                                        aria-current="page"
                                                    >
                                                        {item.title}
                                                    </a>
                                                </Link>
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </nav>
        </>
    );
}
