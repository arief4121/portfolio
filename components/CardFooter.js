
export default function Card(props) {
    return (
        <div>
            <div className="bg-white  w-40 h-40 rounded-full flex items-center flex-wrap p-9 m-2 lg:m-0 shadow-2xl">
                <img src={props.image} alt="image-services"/>
            </div>
        </div>
    )
}
