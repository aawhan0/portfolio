import { FlipWords } from "./FlipWords"

const HeroText = () => {
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/* {Desktop View} */}
        <div className="flex-col hidden md:flex c-space">
            <h1 className="text-4xl font-medium">Hi, I'm Aawhan</h1>
            <div className="flex flex-col items-start">
                <p className="text-5xl font-medium text-neutral-300">
                    Software engineer building intuitive experiences</p>
                {/* <div> get flipword from aceternity</div> */}
                <div>
                    <FlipWords
                        words = {["Minimal", "Scalable", "Effective"]}
                        className= "font-black text-white text-8xl"
                    />
                </div>
                <p className="text-4xl font-medium text-neutral-300">Web solutions</p>
            </div>
            
        </div>
        {/* {Mobile View} */}
        {/* <div className="flex-col hidden md:flex c-space">
            Hi, I'm Aawhan
        </div> */}
      </div>
  )
}

export default HeroText
