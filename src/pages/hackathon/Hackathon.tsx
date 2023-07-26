import Accordion from "../../components/accordion/Accordion"

export default function Hackathon() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="m-10 max-w-2xl">
        <h1 className="text-xl my-4">ETHChicago Hackathon 2023</h1>

        <h1 className="text-lg my-4">Who this event is for:</h1>
        <p>
            The ETHChicago Hackathon is a three-day builder and creative IRL event where participants compete to win bounties sponsored by our partners. Bounties consist of tying together new technology in the blockchain space, innovating and learning from each other about existing blockchain tools, or solving real-world use cases with the unique properties of decentralized technology. 
        </p>
        <div className="flex justify-center items-center my-4">
          <img 
            src="/images/brand/event_timeline_sketch.png" 
            alt="event timeline sketch" 
            width={600} 
            height={400}
            className="shadow-md outline outline-1 rounded"
          />
        </div>
        <p>
          While this isn’t a strict bounty rule, we encourage bounties relating back to showing demonstrable impact in the Chicago community.
        </p>
        <div className="flex justify-center items-center my-4">
          <img 
            src="/images/brand/hackathon_bounties_sketch.png" 
            alt="hackathon bounties sketch" 
            width={600} 
            height={400}
            className="shadow-md outline outline-1 rounded"
          />
        </div>

        <Accordion label="Attendee Value Prop" >
          <ul className="ml-2 list-disc marker:text-primaryBrand">
            <li>Build something fun with new friends or old while pursuing bounty categories</li>
            <li>Networking with industry professionals</li>
            <li>Pitching to investors</li>
            <li>Finding work</li>
            <li>Learning about the bleeding edge of web3 and the unique properties of blockchain technology</li>
            <li>Access to after-hour side events</li>
            <li>Included small meals and beverages throughout the event</li>
            <li>Swap</li>
          </ul>
        </ Accordion> 


      </div>
    </div>
  )
}
