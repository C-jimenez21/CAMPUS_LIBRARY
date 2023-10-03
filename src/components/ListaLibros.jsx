import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
//import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const url = import.meta.env

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode ===  '#bbb',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   width: "340px",
//   height: "140px",
//   color: theme.palette.text.secondary,
// }));

export default function ListaLibros() {
    const [libros, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
  console.log("url",`http://${url.VITE_HOSTNAME}:${url.VITE_PORT_BACKEND}/api/Products`);
    async function bringData() {
      try {
        const response = await axios.get(`http://${url.VITE_HOSTNAME}:${url.VITE_PORT_BACKEND}/api/Products`);
        console.log(response.data);
        setBooks(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    }
  const redirect = () => {
    
  }
  
    useEffect(() => {
      //console.log(`http://${url.VITE_HOSTNAME}:${url.VITE_PORT_BACKEND}/api/User/pruebas`);
      // Realizar una solicitud a una API utilizando Axios
      bringData()
    }, []); // El segundo argumento vacío indica que este efecto se ejecutará solo una vez, similar a componentDidMount en clases
  
    
    const navigation = [
      { name: 'Books', href: '#', current: true },
      { name: 'Loans', href: '#', current: false },
      { name: 'Reserves', href: '#', current: false },
      { name: 'Calendar', href: '#', current: false },
    ]
    
    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }

  return (
    // <Container>
    // <Box sx={{ flexGrow: 1 }}>
    //   <Grid container spacing={{ xs: 2, md: 3 }} columns={{xs:12, sm:6, md:3}} >
    //     {Array.from(Array(21)).map((_, index) => (
    //       <Grid item xs={10} sm={4} md={2} key={index}>
    //         <Item>xs=2</Item>
    //       </Grid>
    //     ))}
    //   </Grid>
    // </Box>
    // </Container>

    <>


    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                  <div> icontrue</div>
                  ) : (
                    <div> iconFalse</div>

                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  
          
<Container maxWidth="md">
    <Grid container spacing={2} id="contenedor" >
      {libros.map((libro) => (
        <Grid item xs={10} md={5} key={libro.id} height="auto">
        <a id={libros._id} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={libro.image} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{libro.name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{libro.author}</p>
            </div>
        </a>
        </Grid>
      ))}
    </Grid>
</Container> 


</>
  );
}