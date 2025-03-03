import Spline from '@splinetool/react-spline';

export default function Hero() {
	return (
		<div className="flex w-full h-[100vh]">
			<div className="part-1 w-[50vw] h-[100vh] ">
				<div className="bg-black h-15 w-48 absolute z-1 bottom-[-35px] right-[50%]"></div>
				<Spline scene="https://prod.spline.design/GOud1De8DJCvmcgK/scene.splinecode" className='hidden relative sm:block' />
			</div>
			<div className="part-2 w-[50vw] text-white flex flex-col justify-center items-center">
				<p className=' text-6xl'>DECODE YOUR DNA</p>
				<button className='my-10 text-[20px] border cursor-pointer relative px-6 py-3 text-white font-bold rounded-[30px] bg-[#FF00CD] transition-all duration-300 ease-in-out hover:bg-[#734EFF] hover:shadow-lg hover:scale-105'>Get Started</button>
			</div>
		</div>
	);
}
