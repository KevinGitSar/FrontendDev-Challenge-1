export default function BasicCard(props) {
  return (
    <>
        <div className="w-11/12 lg:h-full mx-auto bg-white shadow-lg shadow-gray-500/40 border rounded-3xl mt-3">
            <div className="p-5">
                <div className="flex flex-col justify-center">
                    <h2 className="text-xl font-bold">{props.title}</h2>
                </div>
                
                <div className="my-2">
                    <p className="text-sm">{props.description}</p>
                </div>

                <div className="w-1/2 lg:w-10/12 mx-auto my-5">
                    <img src={props.image} className="mx-auto"/>
                </div>
                <div className="w-1/2 lg:w-10/12 mx-auto mb-5 text-center">
                    <button className="bg-[#27AE60] text-white w-[150px] p-2 rounded hover:shadow-lg hover:shadow-gray-500/40">{props.buttonText}</button>
                </div>
            </div>
        </div>
    </>
  );
}