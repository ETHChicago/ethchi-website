
export default function AboutTextBox() {
    return (
        <div className="bg-primaryBackground rounded-xl">

            <div className="flex justify-center items-center p-10"> 
                <img
                    width="800px"
                    height="400px"
                    src="/images/brand/event_timeline_sketch.png"
                    alt="event timeline sketch"
                />
            </div>

            <div className="p-10 flex flex-col justify-between space-y-4">
                <h1 className="text-primaryType text-2xl font-bold">
                    Welcome to ETHChicago: Where Innovation Meets Community
                </h1>
                <p className="text-primaryType text-lg">
                    We are thrilled to invite you to ETHChicago, the premier community-run conference and 
                    hackathon dedicated to fueling innovation and fostering collaboration in the vibrant Chicagoland 
                    area. Our mission is to harness the power of decentralized technology, showcasing the brilliance 
                    of the Midwest, while addressing pressing coordination challenges and reimagining the way our 
                    community connects and thrives.
                </p>
                <p className="text-primaryType text-lg">
                    Mark your calendars for the inaugural event, taking place over three exciting days from September 
                    15th to 17th, 2023, in the heart of downtown Chicago at the *Willis Tower.
                </p>
                <p className="text-primaryType text-lg">
                    At ETHChicago, a diverse community of creatives and builders come together, combining their 
                    expertise to drive demonstrable impact in Chicago's commercial and social partner communities. 
                    We welcome everyone, providing a safe environment for learning and connection, whether you're a 
                    crypto and blockchain enthusiast, a traditional business professional, legal and policy expert, or 
                    a financial industry veteran. The conference offers targeted tracks tailored to each of these fields, 
                    ensuring that there's something for everyone.
                </p>
                <p className="text-primaryType text-lg">
                    Above all, ETHChicago aims to be a celebration of innovation and growth, reflecting the spirit of 
                    Chicagoland. Join us as we embark on an exciting journey, exploring new possibilities, and shaping 
                    the future of decentralized technology. Together, let's build a brighter, more collaborative tomorrow 
                    that Chicago deserves.
                </p>
                <p className="text-primaryType text-lg">
                    We look forward to welcoming you to ETHChicago this fall!  
                </p>
                <p className="text-primaryType text-lg font-bold italic">
                    *We know, we know… We still call it the Sear’s, too.
                </p>
            </div>
        </div> 
    )
}