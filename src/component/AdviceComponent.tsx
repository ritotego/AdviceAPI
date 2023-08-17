import { UseHook } from "../hook/useHook"

export const AdviceComponent = () => {

    const { advice, handleAdvice } = UseHook();

    return (<>
        <div className="flex justify-center items-center h-screen">
            <div id="container" className="w-80 h-64 rounded-xl shadow-xl relative">

                <div className="flex justify-center pt-8 pb-4 text-xs">
                    <span className="text-green-500 font-mono">Advice: {advice?.slip.id}</span>
                </div>

                <div className="flex justify-center py-4 px-4 text-center text-lg font-semibold">
                    <h1 className="text-slate-200">{advice?.slip.advice}</h1>
                </div>

                <div className="absolute bottom-0 left-0 w-full py-2 px-4 text-center ">
                    <hr className="py-2 px-2"/>
                    <button className="
                    transition ease-in-out delay-150 bg-green-400 hover:-translate-y-1 hover:scale-110 hover:bg-green-700 duration-300
                     rounded-full w-10 h-10 " onClick={handleAdvice}>
                        <svg className="inline-flex" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" /></svg>
                    </button>
                </div>

            </div>
        </div>
    </>
    )
}