
export default function Card(props) {
    return (
        <div>
            <div className="bg-white  w-40 h-40 rounded-full flex items-center flex-wrap p-9 animate-float m-5 lg:m-0">
                <img src={props.image} alt="image-services"/>
            </div>
        </div>
    )
}
