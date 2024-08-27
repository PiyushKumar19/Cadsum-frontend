'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ImageCarousel from '../sli/page';
import VideoPlayer from '../Components/ProductOverview/VideoPlayer';
import PlanCard from '../Components/ProductOverview/planCard';
import ProductCard from '../Components/Products/productCard';

// Define the props interface
interface ProductOverviewProps {
    productId: string;
}

const ProductOverview: React.FC<ProductOverviewProps> = ({ productId }) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const formatDate = (dateString: string | undefined): string => {
        if (!dateString) return 'Date not available';
        const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', options);
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://localhost:7214/api/Products/get-product?Id=9769c38b-9626-411a-b2d0-83378a17e409`);
                const productData: Product = {
                    ...response.data,
                    licensingPlans: response.data.licensePlans ?? [], // Default to an empty array if undefined
                };
                console.log("---> Licensing Plans from response", response.data.licensePlans);
                console.log("---> Licensing Plans", productData.licensePlans);
                setProduct(productData);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unexpected error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, []);


    const images = product?.screenshots || [];

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className='flex-col items-center justify-center '>
            <div className='bg-slate-100 h-auto text-slate-700'>
                <div className='flex w-full p-5 bg-no-repeat bg-cover bg-center'
                    style={{
                        backgroundImage: "url('/Revit Banner New.png')",
                        backgroundBlendMode: "multiply",
                        backgroundColor: "rgba(0, 0, 0, 0.15)",
                    }}
                >
                    <div className='pl-12'>
                        <img src={product?.productLogo} className='w-36 h-36' alt='Image'></img>
                    </div>
                    <div className='flex flex-col w-64 p-3 justify-start'>
                        <h4 className='text-xl font-semibold'>{product?.productName}</h4>
                        <div className='flex-col items-center justify-start text-sm font-thin '>
                            <div className='flex w-full items-center justify-start'>
                                <span className='text-black'>{product?.version} | Last Update {formatDate(product?.releaseOn)}</span>
                            </div>

                            <div className='flex w-full my-3'>
                                <button className='justify-start bg-[#F97306] w-24 h-10 px-3 py-2 text-xs font-light text-white'>Get Quote</button>
                                <button className='justify-start
                                    ml-2 w-40 h-10 px-3 py-2
                                    border-2 border-solid border-[#F97306]
                                    text-xs font-light text-[#F97306]
                                    hover:bg-[#F97306] hover:text-white hover:transition-all hover:duration-300'>
                                    Download Free trial</button>
                            </div>
                            <div>
                                <a href='https://www.google.com' target='_blank'
                                    className='text-xs font-normal text-[#F97306]'>Get trial from AutoDesk AppStore</a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='flex items-center justify-around m-5 mt-2 py-5 bg-[#FFFFFF] border-2 rounded-sm shadow-sm'>
                    <div className='flex-col w-4/6 items-start justify-start'>
                        <div className='w-3/4 h-64 mb-10'>
                            <label className='text-[#F97306] text-2xl font-medium pl-4'>Description</label>
                            <br />
                            <pre className='whitespace-pre-wrap p-4 text-sm text-[#6E6E6E] font-normal font-sans'>
                                {product?.description}
                            </pre>
                        </div>
                    </div>
                    <div className='w-2/6 flex flex-col items-center justify-center'>
                        <div className='my-2 w-full max-w-[80%] bg-white shadow-sm shadow-gray-300 rounded-sm py-4 border border-slate-200'>
                            <div className='flex items-center justify-center'>
                                <label className='font-semibold text-md text-slate-700 w-full text-center'>Compatible With</label>
                            </div>
                            <hr className='my-2 mx-20 border-gray-500' />
                            <div className='w-full px-11 py-1 flex-col items-center justify-center'>
                                <label className='text-slate-600 text-base font-medium'>Autodesk Revit: </label><br />
                                <p className='text-slate-600 text-sm font-light'>Version: 2024, 2023, 2022, 2021</p>
                            </div>
                            <div className='grid grid-cols-2 items-center justify-items-center'>
                                <div className='w-1/2'>
                                    <ul>
                                        <li>Language :</li>
                                        <li>OS :</li>
                                    </ul>
                                </div>
                                <div className='font-light text-sm flex-col items-start justify-items-start'>
                                    <ul>
                                        <li>{product?.supportedLanguage}</li>
                                        <li>{product?.supportedOS}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='my-2 w-full max-w-[80%] bg-white shadow-sm shadow-gray-300 rounded-sm py-4 border border-slate-200'>
                            <div className='flex items-center justify-center'>
                                <label className='font-semibold text-md text-slate-700 w-full text-center'>Technical Info</label>
                            </div>
                            <hr className='my-2 mx-20 border-gray-500' />
                            <div className='grid grid-cols-2 items-center justify-items-center'>
                                <div>
                                    <ul>
                                        <li>Version :</li>
                                        <li>Supported OS :</li>
                                        <li>Released On :</li>
                                    </ul>
                                </div>
                                <div className='font-light text-sm flex-col items-start justify-items-start'>
                                    <ul>
                                        <li>{product?.version}</li>
                                        <li>{product?.supportedOS}</li>
                                        <li>{product?.releaseOn}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <hr className='my-8 mx-20 border-gray-300' /> */}

                </div>
                <div
                    className="left-0 right-0 w-[96vw] mb-10 bg-[#FFFFFF] border-2 rounded-sm shadow-sm h-auto p-1 text-black"
                    style={{ margin: "0 auto" }} // Centers the component
                >
                    <div className="mx-0">
                        <div className="mt-12 flex flex-col items-center">
                            <div className="flex items-center space-x-2 mt-1">
                                <hr className="w-12 border-t-2 border-orange-500 mt-2" />
                                <h2 className="text-orange-600 font-semibold text-2xl">
                                    Why Cadsum Plugins?
                                </h2>
                            </div>
                            <p className="mt-2 text-base">
                                The Cadsum plugin delivers rapid, precise results with an intuitive
                                interface, 24/7 support, and flexible customization.
                            </p>
                        </div>

                        <div className="flex justify-center mt-8">
                            <div className="max-w-sm p-4 w-1/4 m-3 bg-white border border-gray-200 rounded-lg shadow">
                                <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900">
                                    Rapid and Precise Results
                                </h5>
                                <p className="mb-3 font-normal text-gray-500">
                                    Cadsum plugin delivers rapid and precise results, ensuring
                                    efficiency in your workflow.
                                </p>
                            </div>

                            <div className="max-w-sm p-4 w-1/4 m-3 bg-white border border-gray-200 rounded-lg shadow">
                                <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900">
                                    Simple & User-friendly Interface
                                </h5>
                                <p className="mb-3 font-normal text-gray-500">
                                    The Cadsum plugin features an intuitive, user-friendly interface.
                                </p>
                            </div>

                            <div className="max-w-sm p-4 w-1/4 m-3 bg-white border border-gray-200 rounded-lg shadow">
                                <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900">
                                    24/7 Quick Support
                                </h5>
                                <p className="mb-3 font-normal text-gray-500">
                                    Free, round-the-clock support is available for your convenience.
                                </p>
                            </div>

                            <div className="max-w-sm p-4 w-1/4 m-3 bg-white border border-gray-200 rounded-lg shadow">
                                <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900">
                                    Flexible Plugin Customization
                                </h5>
                                <p className="mb-3 font-normal text-gray-500">
                                    Cadsum provides on-demand customization to enhance functionality &
                                    specific needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white m-6 flex flex-col items-center justify-center">
                    <div className="flex items-center space-x-2 mt-1">
                        {/* <hr className="w-12 border-t-2 border-orange-500 mt-2" /> */}
                        <h2 className="text-orange-600 font-semibold text-2xl">
                            Screenshots & Video
                        </h2>
                    </div>

                    <div className="flex justify-center w-full max-w-[90vw]">
                        <div className="w-1/2 p-4">
                            <ImageCarousel images={images} />
                        </div>
                        <div className="w-1/2 p-4">
                            <VideoPlayer src="#" poster=''/>
                        </div>
                    </div>
                </div>
                <div className='bg-white w-[96vw] mx-5 my-2'>
                    <div className=' pb-4'>
                        <div className='flex items-center justify-center'>
                            <label className='py-5 text-center font-semibold text-2xl text-orange-600'>Licensing Plans</label>
                        </div>
                        <div className='flex items-center justify-center ease-in duration-200'>
                            {product?.licensePlans.map((plan) => {
                                console.log("Licensing Plan:", plan); // <-- Log each plan to see if it's defined
                                return (
                                    <div key={plan.planId} className="px-4">
                                        <PlanCard plan={plan} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className='w-[96vw] mx-5 bg-white'>
                    <div className='flex items-center justify-start
                        my-2 mx-2 pt-2'>
                        <div className='flex w-full items-center justify-start'>
                            <label className='py-1 px-4 text-start font-semibold text-2xl text-orange-600'>Related Products</label>
                        </div>
                    </div>
                    {/* <div className='flex flex-nowrap'>
                        <ProductCard name={'Nike Air MX Super 2500 - Red'} imageSrc={'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'} />
                        <ProductCard name={'Nike Air MX Super 2500 - Red'} imageSrc={'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'} />
                        <ProductCard name={'Nike Air MX Super 2500 - Red'} imageSrc={'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'} />
                        <ProductCard name={'Nike Air MX Super 2500 - Red'} imageSrc={'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'} />
                    </div> */}
                </div>
            </div>
        </div>

    )
}

export default ProductOverview