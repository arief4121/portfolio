import Card from "./Card";

export default function Skill() {
    return (
        <>
            <section id="skill">
                <div className="lg:w-8/12 mx-auto py-32 font-roboto">
                    <div className="flex flex-col items-center">
                        <h2 className="text-3xl font-semibold"><span className="text-orange text-4xl font-bold">S</span>tack I <span className="text-orange text-4xl font-bold">U</span>se</h2>
                        <div className="flex flex-wrap w-full justify-around m-10">
                            <Card image="/html.png"/>
                            <Card image="/css.png"/>
                            <Card image="/js.png"/>
                            <Card image="/tailwind.svg"/>
                            <Card image="/react.png"/>
                        </div>
                    </div> 
                </div>
            </section>
        </>
    )
}
