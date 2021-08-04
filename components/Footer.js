import CardFooter from './CardFooter'

export default function Footer() {
    return (
        <>
            <section id="contact">
                <div className="flex flex-col items-center w-10/12 mx-auto my-10">
                    <h2 className="text-3xl font-semibold">My <span className="text-orange text-4xl font-bold">C</span>ontact</h2>
                    <div className="flex flex-wrap w-full m-10 justify-evenly">
                        <CardFooter image="/facebook.png"/>
                        <CardFooter image="/whatsapp.png"/>
                        <CardFooter image="/instagram.png"/>
                        <CardFooter image="/facebook.png"/>
                    </div>
                </div>
                <div className="bg-black p-5 w-full text-center">
                    <h2 className="text-gray-100">© Muhammad Arief 2021</h2>
                </div>
            </section>
        </>
    )
}
