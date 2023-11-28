export default function ScheduleCard(props) {
    return (
      <>
          <div className="w-11/12 lg:h-full mx-auto bg-white shadow-lg shadow-gray-500/40 border rounded-3xl mt-3 min-h-[400px]">
              <div className="p-5">
                  <div className="flex flex-col justify-center">
                      <h2 className="text-xl font-bold">{props.title}</h2>
                  </div>
                  
                  <div className="my-2">
                      <p className="text-sm">{props.description}</p>
                  </div>

                  <div className="my-2">
                    <ul className="my-2">
                        <li className="flex flex-col py-2 border-b border-b-[#D2D4DA] hover:cursor-pointer hover:bg-[#f4f4f4]">
                            <p className="text-sm font-bold">DTP & FUN - Team Business Innovation Challenge</p>
                            <p className="text-sm">Due December 1 at 11:59PM</p>
                        </li>
                        <li className="flex flex-col py-2 border-b border-b-[#D2D4DA] hover:cursor-pointer hover:bg-[#f4f4f4]">
                            <p className="text-sm font-bold">Getting Started with Youth Boost</p>
                            <p className="text-sm">Due March 1 at 11:59PM</p>
                        </li>
                    </ul>
                  </div>
  
              </div>
          </div>
      </>
    );
  }