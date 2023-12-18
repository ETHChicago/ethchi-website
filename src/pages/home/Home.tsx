import VideoBackground from "./elements/videoBackground/VideoBackground"
import Accordion from "../../components/accordion/Accordion"
import VennityMap from "../../components/vennityMap/VennityMap"
import PartnerContainer from "./elements/partnerContainer/PartnerContainer"
import links from "../../data/links"

export default function Home() {
    return (
        <>
        <div className="w-full bg-primaryBackground">

            {/* video bacground 

            <div>
                <VideoBackground />
            </div>
			*/}
			
			{/*
            <div>
                <img
                    className="w-full" 
                    src="/images/learn-build-create-network-banner.png" 
                    alt="learn build create network banner"
                />
            </div>
		*/}

            {/* vennity event map embed 
            <div className="w-full h-full">
                    <VennityMap />
            </div>
	*/}


            {/* FAQ section */}
            <div className="bg-grid_bg_navy p-10">
	    	<div className="bg-primaryBackground p-6 rounded-sm">
			<h1 className="font-mono font-bold text-4xl text-primaryType mb-4">FAQ</h1> 

			<div className="flex flex-col justify-evenly space-y-4 items-center">
			    <Accordion label="WHAT IS ETHCHICAGO?">
				<p>
				    ETHChicago is a community-run hackathon and conference focused on decentralized technology, particularly within the Ethereum ecosystem. Our aim is to catalyze innovation, foster collaboration, and promote education through real-world impact in blockchain technology.
				</p>
			    </Accordion>
			    <Accordion label="WHEN AND WHERE WILL ETHCHICAGO TAKE PLACE?">
				<p>
				    ETHChicago will take place September 15-17th 2023 in Chicago, Illinois at The Metropolitan Club inside the Willis Tower.
				</p>
			    </Accordion>
			    <Accordion label="WHO CAN ATTEND ETHCHICAGO?">
				<p>
				    Anyone interested in decentralized technology is welcome, including developers, creatives, business leaders, students, and enthusiasts from all walks of life. Our community is diverse, inclusive, and open to all.
				</p>
			    </Accordion>
			    <Accordion label="HOW CAN I PARTICIPATE IN ETHCHICAGO?">
				<p>
				    There are several ways you can participate in ETHChicago: as a volunteer, partner, speaker, mentor, or attendee. Our website is a great starting point but also feel free to checkout 
				    {'  '}<a href={links.forum} target="_blank" rel="noreferrer" className="hover:underline text-primaryBrand">forum.ethchicago.xyz</a>
				    {'  '}or contact us directly on 
					{' '}<a href={links.twitter} target="_blank" rel="noreferrer" className="hover:underline text-primaryBrand">Twitter</a>
				    {' '}&{' '}
				    <a href="mailto:ecosystem@ethchicago.xyz" target="_blank" rel="noreferrer" className="hover:underline text-primaryBrand">ecosystem@ethchicago.xyz</a>
				</p>
			    </Accordion>
			    <Accordion label="WILL THERE BE BOUNTIES?">
				<p>
				    Yes, there will be bounties for hackathon participants! They can be found <a className="hover:underline text-primaryBrand" href="https://taikai.network/ethchicago/hackathons/ETHChicagoHackathon2023/categories" target="_blank" rel="noreferrer" >here</a>
				</p>
			    </Accordion>
				<Accordion label="WHERE CAN I PARK AT THE WILLIS TOWER?">
					<ul className="list-disc mb-4">
						<p className="text-xl">Traders Garage</p>
						<li>
							A 3 minute walk from the Willis Tower.
						</li>
						<li>
							Address: <a className="hover:underline text-primaryBrand" 
							href="https://www.google.com/maps/place/Trader's+Self+Park/@41.8774051,-87.6373862,17z/data=!3m1!4b1!4m6!3m5!1s0x880e2cbe5d2d299f:0xa6eabe4e7fe8b38!8m2!3d41.8774011!4d-87.6348113!16s%2Fg%2F1tgpnm4m?entry=ttu"
							target="_blank" 
							rel="noreferrer">329 S Franklin St.</a>
						</li>
					</ul>
					<ul className="list-disc">
						<p className="text-xl">Tower Garage</p>
						<li>
							A 1 minute walk from the Willis Tower.
						</li>
						<li>
							Address: <a className="hover:underline text-primaryBrand" 
							href="https://www.google.com/maps/place/iParkit/@41.8791127,-87.6375336,17z/data=!3m1!4b1!4m6!3m5!1s0x880e2cbe945ce463:0xec5c4e4f5dcf24ca!8m2!3d41.8791087!4d-87.6349587!16s%2Fg%2F1vvyynx4?entry=ttu"
							target="_blank"
							rel="noreferrer">211 W. Adams St</a>
						</li>
					</ul>
				</Accordion>
				<Accordion label="WHERE DO I GO WHEN I ARRIVE AT THE WILLIS TOWER?">
					<p className="italic p-1">
						A valid, government issued photo ID is required (18+) for entrance into the Willis Tower. 
						A security Visitor Badge will be provided; please carry this with you if you leave the 
						building at any time. Security check in is required each day of the conference.
					</p>
					<ul className="list-disc">
						<li>
							Proceed up the stairs and head to the right. 
						</li>
						<li>
							Check in at the security desk.
						</li>
						<li>
							Continue through the security scanner.
						</li>
						<li>
							Once through the scanner take an immediate RIGHT. 
						</li>
						<li>
							Follow signs for the 67th floor bank of elevators (RIGHT).
						</li>
						<li>
							Proceed to the staircase on the 66th floor.
						</li>
						<li>
							There two tables - one for ticket holders and volunteers to check in, 
							and another for sponsors and speakers.
						</li>
						<li>
							For speakers: please arrive 30 minutes early. A liason will walk you to 
							your assigned room/stage.
						</li>
					</ul>
				</Accordion>
				<Accordion label="WILL PRESENTATIONS BE LIVESTREAMED?">
					<p>
						Yes! All presentations can be viewed live via <a className="hover:underline text-primaryBrand" href={links.streaming} target="_blank" rel="noreferrer">StreamETH</a>
					</p>
				</Accordion>
			</div>

		</div>
            </div>

            {/* Partners sections */}
            <div className="p-10">
                <h1 className="font-mono font-bold text-4xl text-primaryType mb-4">OUR PARTNERS AND SPONSORS</h1> 
                <PartnerContainer />
            </div>
            
        </div>
        </>
    )
}
