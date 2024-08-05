import hero from "../assets/hero.png";

const Hero = () => {
    return(
        <div>
            <img src={hero} alt="heroImage" className="w-full max-h-[600px] object-cover" />
        </div>
    )
}

export default Hero;

