import { Link } from "react-router";
import github from "../assets/github-mark-white.svg";
import linkedin from "../assets/InBug-White.png";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <h4 className="text-brandColor-white font-bold text-xl sm:text-2xl">
                        Jacques Coetzee
                    </h4>
                    <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
                        <li>
                            <a
                                href="https://github.com/jacquescoetzee202"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                            >
                                <span className="sr-only">Github</span>
                                <img src={github} width="24" height="24" alt="GitHub Logo" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/jacques-coetzee-96889089/"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                            >
                                <span className="sr-only">LinkedIn</span>
                                <img src={linkedin} width="24" height="24" alt="LinkedIn Logo" />
                            </a>
                        </li>
                    </ul>
                </div>

                <div
                    className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16 dark:border-gray-800"
                >
                    <div>
                        <a
                            href="/sitemap.xml"
                            className="font-medium text-gray-900 dark:text-white hover:opacity-75 transition"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Site Map
                        </a>

                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <Link to="/" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium text-gray-900 dark:text-white">Credits</p>

                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a
                                    href="https://undraw.co"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                >
                                    unDraw Illustrations
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.opendoodles.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                >
                                    Open Doodles
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                    &copy; {currentYear}. Jacques Coetzee. All rights reserved.
                </p>
            </div>
        </footer>
    );
};