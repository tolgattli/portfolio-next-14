"use client";

import siteMetadata from "@/data/siteMetadata";
import { Dialog, Transition } from "@headlessui/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaEdit,
  FaGithub,
  FaHamburger,
  FaInstagram,
  FaLinkedin,
  FaMoon,
  FaSteam,
  FaSun,
  FaTwitter,
} from "react-icons/fa";

export default function BottomNav() {
  const navLinks = [
    {
      name: "Home",
      url: "/",
    },

    {
      name: "Projects",
      url: "/projects",
    },
    {
      name: "Tools",
      url: "/tools",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-x-0 bottom-0 block md:hidden">
      <div className="dark:bg-neutralD-100 mt-auto flex h-16 flex-row items-center justify-around border-t-2 border-neutral-400 bg-white py-2 transition-colors duration-200 ease-in dark:border-neutral-900 dark:bg-black dark:text-white">
        <div className="flex w-full items-center justify-center">
          <Link
            href="/posts"
            className="flex flex-col items-center rounded-md px-6"
          >
            <FaEdit className="inline-block h-4 w-4 shrink-0 align-middle leading-4 text-current" />
            <p className="text-xs font-medium">Blog</p>
          </Link>
        </div>
        <div className="flex w-full items-center justify-center">
          <button
            type="button"
            onClick={openModal}
            className="flex flex-col items-center rounded-md px-6"
          >
            <FaHamburger className="inline" />
            <p className="text-xs font-medium">Menu</p>
          </button>
        </div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            <div className="fixed inset-x-0 bottom-0 overflow-y-auto">
              <div className="flex min-h-fit items-center justify-center text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="translate-y-3/4"
                  enterTo="translate-y-0"
                  leave="ease-in duration-100"
                  leaveFrom="translate-y-0"
                  leaveTo="translate-y-3/4"
                >
                  <Dialog.Panel className="w-full max-w-full transform overflow-hidden rounded-t-2xl bg-white text-left align-middle shadow-xl transition-all dark:bg-neutral-950 dark:text-white">
                    <Dialog.Title
                      as="h3"
                      className="flex-initial px-6 py-4 text-xl font-semibold"
                    >
                      Menu
                    </Dialog.Title>
                    <div className="my-2">
                      <button
                        type="button"
                        aria-label="Close"
                        className="absolute right-3 top-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-xs outline-offset-2"
                        onClick={closeModal}
                      >
                        <AiOutlineClose className="inline-block h-4 w-4 shrink-0 align-middle leading-4 text-current" />
                      </button>
                      <div className="flex-1 overflow-auto px-6 pb-4 pt-2">
                        <div className="flex flex-col items-center">
                          <div className="flex w-full flex-col items-center">
                            <div className="mt-2 grid w-full grid-cols-1 gap-2">
                              {navLinks.map((link) => (
                                <button
                                  key={link.name}
                                  onClick={() =>
                                    `${
                                      pathname == link.url
                                        ? closeModal()
                                        : router.push(link.url)
                                    }`
                                  }
                                  type="button"
                                  className={`relative inline-flex h-12 w-full min-w-[3rem] select-none appearance-none items-center justify-center whitespace-nowrap  rounded-lg  px-6 align-middle text-lg font-medium outline-offset-2 ${
                                    pathname == link.url
                                      ? "bg-neutral-300 dark:bg-neutral-900"
                                      : "bg-neutral-100 dark:bg-neutral-600"
                                  }`}
                                >
                                  {link.name}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul className="dark:border-neutralD-400 flex cursor-pointer items-center justify-center space-x-5 border-t border-neutral-400 pb-5 pt-4">
                        <li>
                          <a
                            href={siteMetadata.instagram}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="instagram"
                          >
                            <FaInstagram className="sm:text-lg" />
                          </a>
                        </li>
                        <li>
                          <a
                            href={siteMetadata.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="linkedin"
                          >
                            <FaLinkedin className="sm:text-lg" />
                          </a>
                        </li>
                        <li>
                          <a
                            href={siteMetadata.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="github"
                          >
                            <FaGithub className="sm:text-lg" />
                          </a>
                        </li>
                        <li>
                          <a
                            href={siteMetadata.twitter}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="twitter"
                          >
                            <FaTwitter className="sm:text-lg" />
                          </a>
                        </li>
                        <li>
                          <a
                            href={siteMetadata.steam}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="steam"
                          >
                            <FaSteam className="sm:text-lg" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        <div className="flex w-full items-center justify-center">
          <button
            aria-label="Karanlık Mod"
            type="button"
            className="flex flex-col items-center rounded-md px-6"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && theme === "dark" ? (
              <>
                <FaSun className="inline-block h-4 w-4 shrink-0 align-middle leading-4 text-current" />
                <p className="text-xs font-medium">Light</p>
              </>
            ) : (
              <>
                <FaMoon className="inline-block h-4 w-4 shrink-0 align-middle leading-4 text-current" />
                <p className="text-xs font-medium">Dark</p>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
