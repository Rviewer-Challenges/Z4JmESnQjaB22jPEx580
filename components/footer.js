import Js from './logos/JavaScript';

export default function Footer() {
    return (
        <>
            <footer className="p-4 bg-primary  shadow md:px-6 md:py-8 ">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex">
                        <Js width={50} height={50} />
                    </div>

                    <ul className="flex flex-wrap items-center mb-6 text-sm text-secondary sm:mb-0 font-mono">
                        <li>
                            <a
                                href="https://github.com/kevinjuanjacque"
                                className="hover:underline"
                            >
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-secondary sm:mx-auto  lg:my-8" />
                <span className="block text-sm text-seconodary sm:text-center font-mono">
                    © 2022 ILoveJS™ . All Rights Reserved.
                </span>
            </footer>
        </>
    );
}
