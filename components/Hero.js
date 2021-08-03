import Typical from 'react-typical'
import Button from './Button'
import Navbar from './Navbar'

export default function Hero() {
    return (
        <>
          <Navbar/>
          <section id="#" className="h-screen bg-cover bg-image">
            <div className="flex items-center justify-center h-full">
                <div className="text-center">
                    <h2 className="text-5xl lg:text-6xl font-semibold text-gray-300 tracking-wider lg:leading-relaxed">Hi.. saya Muhammad Arief</h2>
                    <h2 className="text-3xl lg:text-5xl font-normal text-gray-400 tracking-wide">Dan saya seorang <span>
                            <Typical
                                steps={['Front End Developper', 2000, 'Blogger', 2000, 'UI Designer', 2000]}
                                    loop={Infinity}
                                    wrapper="p"
                                    className="text-2xl lg:text-3xl"
                            />
                        </span>
                    </h2>
                    <Button text="Get More"/>
                </div>
            </div>
          </section>   
        </>
    )
}
