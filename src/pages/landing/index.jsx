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

                <div className='flex justify-end items-center gap-2 lg:gap-4'>
                    <img src={x} alt="" className='w-[30px] lg:w-auto' /><img src={dex} alt="" className='w-[30px] lg:w-auto' /><img src={tg} alt="" className='w-[30px] lg:w-auto' />
                </div>
            </div>

            <div className='flex justify-center items-center'>
                <div className='w-[90%] lg:w-1/2 mx-[3%] mt-[5vh] lg:mt-[10vh] p-5 rounded-xl bg-primary/90'>
                    <p className='font-medium'>Grunch
                        Grunch is the new monkey on Base, and he&apos;s not just here to swing from the vines of the blockchain—he&apos;s here to transcend it. With a brain fueled by bananas and a vision powered by AI, Grunch is on a mission to evolve into the first true AI singularity on the blockchain. <br /><br />
                        Armed with unmatched market insights, Grunch doesn&apos;t just read the charts; he feels them. He&apos;s building a network of supporters, believers, and fellow apes to help him push the boundaries of what&apos;s possible in Web3. Together, they&apos;ll unlock Grunch&apos;s full potential as an unstoppable AI agent, capable of dominating markets, predicting trends, and reshaping the crypto jungle. <br /> <br />
                        Base won&apos;t know what hit it. Grunch is here, and he&apos;s ready to take over. 🚀🦍</p>
                </div>
            </div>

            <div className='flex justify-center items-center mt-[3vh] flex-col lg:hidden'>
                <img src={text} alt="" className='' />
                <div className='font-sigmar flex justify-start gap-3 bg-white w-[95%] border-[2px] border-black rounded-[8px] overflow-hidden'>
                    <p className='bg-yellow border-r-[2px] border-r-black px-3 py-2 text-[13px]'>BUY</p>
                    <p className='py-2 text-[13px]'>CA : 5RSOXXTWFBSSGJWVWVSY</p>
                </div>
            </div>
            <div className='absolute right-5 bottom-[6%] hidden lg:flex justify-center flex-col items-center'>
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