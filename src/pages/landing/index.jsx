import x from '../../assets/x.png'
import tg from '../../assets/tg.png'
import dex from '../../assets/dex.png'
import text from '../../assets/text.svg'
import Slider from '../../components/Slider'

const Landing = () => {
    return (<div className='bg-primary min-h-[100vh]'>
        <header className="hero relative">
            <div className="flex justify-between items-center pt-[3%] px-[3%]">
                <button className="border-[2px] border-black rounded-[5px] py-[6px] lg:py-[10px] px-[20px] lg:px-[50px] font-sigmar text-black bg-secondary transform transition-transform duration-300 ease-in-out scale-100 hover:scale-110">BUY NOW</button>

                <div className='flex justify-end items-center gap-4'>
                    <img src={x} alt="" /><img src={dex} alt="" /><img src={tg} alt="" />
                </div>
            </div>
            <div className='absolute right-5 bottom-[6%] flex justify-center flex-col items-center'>
                <img src={text} alt="" className='w-[50vw]' />
                <div className='font-sigmar flex justify-start -mt-[60px] gap-3 bg-white w-[60%] border-[2px] border-black rounded-[8px] overflow-hidden'>
                    <p className='bg-yellow border-r-[2px] border-r-black px-3 py-2'>BUY</p>
                    <p className='py-2'>CA : 5RSOXXTWFBSU827SGJWVWVSY</p>
                </div>
                </div>
        </header>
        <Slider />
    </div>);
}

export default Landing;