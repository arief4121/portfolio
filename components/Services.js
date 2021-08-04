import React from 'react'

export default function Services() {
    return (
        <>
          <section id="services" className="bg-gray-100 font-roboto">
                <div className="w-10/12 flex flex-wrap mx-auto py-20 justify-between flex-col items-center">
                    <h2 className="text-3xl font-semibold"><span className="text-orange text-4xl font-bold">S</span>ervices</h2>
                    <div className="lg:w-6/12 mx-auto flex justify-center my-12 flex-wrap">
                        <img src="/coming-soon.svg" alt="about" />
                        <h2 className="text-3xl font-normal m-2 text-gray-700">Coming Soon</h2>
                    </div>
                </div>
            </section>  
        </>
    )
}
