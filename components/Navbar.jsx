import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BsPerson, BsSearch, BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useSession, signIn, signOut } from 'next-auth/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const { data: session } = useSession();

  return (
    <div className="fixed h-14 w-full flex flex-nowrap items-center p-4 bg-[#0e0e10] mb-[2px] z-10">
      <div className="flex grow items-center justify-start">
        <Link href="/">
          <a className="flex">
            <Image
              src={require('../public/assets/logo.png')}
              alt=""
              width="36"
              height="36"
              className="cursor-pointer z-10"
            />
          </a>
        </Link>
        <p className="p-4">Browse</p>
        <div className="p-4">
          {/* <Dropdown /> */}
          <Menu as="div" className="relative text-left">
            <div className="flex">
              <Menu.Button>
                <BsThreeDotsVertical size={20} />
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
              <Menu.Items className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        License
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <div className="hidden md:flex grow-[2] items-center max-w-[600px] justify-center">
        <div className="bg-gray-500 text-white flex justify-center w-full items-center m-auto p-2 rounded-2xl">
          <input
            type="text"
            className="bg-transparent border-none w-full text-white focus:outline-none"
            placeholder="Search"
          />

          <BsSearch />
        </div>
      </div>

      <div className="hidden md:flex grow items-center justify-end">
        {session ? (
          <div className="flex items-center">
            <Link href="/Account">
              <div>
                <p className="pr-4 cursor-pointer">
                  Welcome, {session.user.name}
                </p>
              </div>
            </Link>
            <Menu as="div" className="relative text-left">
              <div className="flex">
                <Menu.Button>
                  <Image
                    src={session.user.image}
                    width="40"
                    height="40"
                    className="rounded-full flex items-center justify-center"
                    alt="/"
                  />
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
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <p
                          className={classNames(
                            active
                              ? 'bg-gray-500 text-gray-100'
                              : 'text-gray-200',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          <Link href="/Account">Account</Link>
                        </p>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <p
                          onClick={() => signOut()}
                          className={classNames(
                            active
                              ? 'bg-gray-500 text-gray-100'
                              : 'text-gray-200',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Logout
                        </p>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        ) : (
          <div className="flex items-center">
            <Link href="/Account">
              <button className="px-4 py-[6px] rounded-lg font-bold bg-[#9147ff] mr-2">
                Account
              </button>
            </Link>
            <BsPerson size={30} />
          </div>
        )}
      </div>

      {/* Mobile Menu */}

      <div
        onClick={() => setMenu(!menu)}
        className="block md:hidden z-10  cursor-pointer"
      >
        {menu ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      <div
        className={`fixed md:hidden w-full top-0 overflow-hidden ${
          menu ? 'left-0' : 'left-[100vw]'
        } h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300`}
      >
        <ul className="text-center">
          <li
            className="p-4 rounded-md hover:bg-[#9147ff] ease-in duration-200 text-3xl font-bold"
            onClick={() => setMenu(!menu)}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className="p-4 rounded-md hover:bg-[#9147ff] ease-in duration-200 text-3xl font-bold"
            onClick={() => setMenu(!menu)}
          >
            <Link href="/">Live Channels</Link>
          </li>
          <li
            className="p-4 rounded-md hover:bg-[#9147ff] ease-in duration-200 text-3xl font-bold"
            onClick={() => setMenu(!menu)}
          >
            <Link href="/">Top Categoaries</Link>
          </li>
          <li
            className="p-4 rounded-md hover:bg-[#9147ff] ease-in duration-200 text-3xl font-bold"
            onClick={() => setMenu(!menu)}
          >
            <Link href="/Account">Account</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
