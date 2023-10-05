import React from 'react'
//import products from '../API/JSON/Products.json'
import { Link } from 'react-router-dom'

export default function ProductsList({ data }) {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mt-4 flex justify-between">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Cantidad de libros: </h2>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900"> {data.length}</h2>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {data.map((product) => (
                        <div key={product._id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={(product.image == "") ? "https://hispanoamericana.es/static/media/preview.b0188632.jpg" : product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <Link to={`/bokId/${product.serial}`}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </Link>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.author}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.qualify}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>

    )
}


