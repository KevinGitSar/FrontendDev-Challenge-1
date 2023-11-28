export default function LeaderboardCard(props) {
    return (
      <>
          <div className="w-11/12 lg:h-full mx-auto bg-white shadow-lg shadow-gray-500/40 border rounded-3xl mt-3">
            <div className="flex justify-between p-5">
                <div className="flex">
                    <h2 className="text-xl text-[#27AE60] font-bold">{props.title}</h2>
                    <div className="flex flex-col justify-center text-base text-white font-bold bg-[#27AE60] rounded-full w-[20px] h-[20px] ml-2 hover:cursor-pointer">
                        <p className="text-center">?</p>
                    </div>
                </div>
                
                <button className="text-sm bg-[#27AE60] text-white w-[150px] rounded hover:shadow-lg hover:shadow-gray-500/40">View Leaderboard</button>
            </div>
            <div>
                <form>
                    <div className="flex flex-col w-10/12 lg:w-11/12 mx-auto">
                        <div className="lg:flex">
                            <div className="flex flex-col lg:w-1/4">
                                <label className="font-semibold my-2">Organization</label>
                                <select className="mb-2 active:ring-[#27AE60] focus:ring-[#27AE60] focus:border-none ">
                                    <option className="">All Organizations</option>
                                    <option>Prepr</option>
                                    <option>Youth Boost</option>
                                </select>
                            </div>

                            <div className="flex flex-col lg:w-1/4">
                                <label className="font-semibold my-2">Lab</label>
                                <select className="mb-2 active:ring-[#27AE60] focus:ring-[#27AE60] focus:border-none ">
                                    <option className="hover:bg-black">All Labs</option>
                                    <option>Getting Started using the PreprLab Network</option>
                                    <option>Career Planning</option>
                                    <option>Web Developer</option>
                                </select>
                            </div>

                            <div className="flex flex-col lg:w-1/4">
                                <label className="font-semibold my-2">Challenge</label>
                                <select className="mb-2 active:ring-[#27AE60] focus:ring-[#27AE60] focus:border-none ">
                                    <option>All Challenges</option>
                                    <option>Creating a Project</option>
                                    <option>Complete your Profile</option>
                                    <option>Exploring Labs and Challenges</option>
                                    <option>Lab Programs and Challenge Paths</option>
                                    <option>Getting Started with Youth Boost</option>
                                    <option>DTP & FUN Team Business Innovation Challenge</option>
                                </select>
                            </div>

                            <div className="flex flex-col lg:w-1/4">
                                <label className="font-semibold my-2">Sort by</label>
                                <select className="mb-2 active:ring-[#27AE60] focus:ring-[#27AE60] focus:border-none ">
                                    <option>Learning Points</option>
                                    <option>Learning Rank</option>
                                    <option>Achievements</option>
                                </select>
                            </div>
                        </div>

                        <a href="#0" className="text-sm text-[#27AE60] font-semibold my-2">Clear Filters</a>

                    </div>
                </form>
            </div>
          </div>
      </>
    );
  }