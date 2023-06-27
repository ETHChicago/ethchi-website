import TeamContainer from "../components/TeamContainer"

export default function About() {

    return(
        <>
        <div className="m-10">
            <h1 className="text-xl my-4">
                Welcome to ETHChicago: <i>Where Innovation Meets Community</i>
            </h1>
            <div className="flex justify-center items-center my-4">
                <img 
                    src="/images/ethchi_flag.jpg" 
                    alt="ethchi flag" 
                    width={350} 
                    height={233}
                    className="shadow-md outline outline-1 rounded"
                />
            </div>
            <p>
                We are thrilled to invite you to ETHChicago, the premier community-run 
                conference and hackathon dedicated to fueling innovation and fostering 
                collaboration in the vibrant Chicagoland area. Our mission is to harness 
                the power of decentralized technology, showcasing the brilliance of the Midwest, 
                while addressing pressing coordination challenges and reimagining the way our 
                community connects and thrives.
            </p>
            <br/>
            <p>
                Mark your calendars for the inaugural event, taking place over three exciting 
                days from September 15th to 17th, 2023, in the heart of downtown Chicago at 
                the *Willis Tower.
            </p>
            <br/>
            <p>
                At ETHChicago, a diverse community of creatives and builders come 
                together, combining their expertise to drive demonstrable impact in 
                Chicago's commercial and social partner communities. We welcome everyone, 
                providing a safe environment for learning and connection, whether you're 
                a crypto and blockchain enthusiast, a traditional business professional, 
                legal and policy expert, or a financial industry veteran. The conference 
                offers targeted tracks tailored to each of these fields, ensuring that 
                there's something for everyone.
            </p>
            <br/>
            <p>
                Above all, ETHChicago aims to be a celebration of innovation and growth, 
                reflecting the spirit of Chicagoland. Join us as we embark on an exciting 
                journey, exploring new possibilities, and shaping the future of decentralized 
                technology. Together, let's build a brighter, more collaborative tomorrow that 
                Chicago deserves.
            </p>
            <br/>
            <p>
                We look forward to welcoming you to ETHChicago this fall!
            </p>


            <p className="mt-10 text-sm">
                *We know, we know… We still call it the Sear’s, too.
            </p>
        </div>
        <div className="flex justify-center items-center w-screen bg-secondaryBrand">
            <TeamContainer />
        </div>
        </>

    )
}