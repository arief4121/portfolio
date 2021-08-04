
export default function About() {
    return (
        <>
            <section id="about" className="bg-gray-100 font-roboto">
                <div className="w-10/12 flex flex-wrap mx-auto py-32 justify-between">
                    <div className="lg:w-6/12 flex justify-evenlyjustify-center my-16">
                        <img src="/about-image.svg" alt="about" className="object-cover" />
                    </div>
                    <div className="lg:w-5/12 flex justify-center my-16">
                        <div className="text-center bg-white shadow-md p-10">
                            <h2 className="text-3xl font-semibold"><span className="text-orange text-4xl font-bold">A</span>bout</h2>
                            <p className="text-gray-600 font-normal leading-relaxed my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempora minima quas id doloremque deleniti. Consequuntur odio, error tenetur commodi inventore repudiandae provident, reprehenderit repellendus distinctio praesentium eum quod quae!</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
