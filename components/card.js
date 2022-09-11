export default function Card({ title, body, Svg }) {
    return (
        <div className=" h-full p-5">
            <div className="grid-col p-10 border-2 border-secondary bg-tertiary w-full h-full  rounded-md ">
                <div className="  w-full grid place-content-center  pb-10 aspect-square h-40">
                    <Svg width={170} height={170} />
                </div>

                <div className=" grid place-items-center text-6xl text-fourth text-center ">
                    {title}
                </div>
                <div className=" grid place-items-center text-lg text-gray-400 pt-5 text-center font-mono">
                    {body}
                </div>
            </div>
        </div>
    );
}
