import Accordion from "../../components/accordion/Accordion";

export default function Hackathon() {
  return (
    <div className="flex flex-col justify-center items-center bg-grid_bg_navy">
      <div className="m-10 max-w-2xl bg-primaryBackground rounded-xl p-10 text-primaryType">
        <h1 className="text-xl my-4">ETHChicago Hackathon 2023</h1>

        <h1 className="text-lg my-4">Who this event is for:</h1>
        <p>
          The ETHChicago Hackathon is a three-day builder and creative IRL event
          where participants compete to win bounties sponsored by our partners.
          Bounties consist of tying together new technology in the blockchain
          space, innovating and learning from each other about existing
          blockchain tools, or solving real-world use cases with the unique
          properties of decentralized technology.
        </p>
        <div className="flex justify-center items-center my-4 text-primaryBackground">
          <img
            src="/images/brand/event_timeline_sketch.png"
            alt="event timeline sketch"
            width={600}
            height={400}
            className="shadow-md outline outline-1 rounded"
          />
        </div>
        <p>
          While this isn’t a strict bounty rule, we encourage bounties relating
          back to showing demonstrable impact in the Chicago community.
        </p>
        <div className="flex justify-center items-center my-4 text-primaryBackground">
          <img
            src="/images/brand/hackathon_bounties_sketch.png"
            alt="hackathon bounties sketch"
            width={600}
            height={400}
            className="shadow-md outline outline-1 rounded"
          />
        </div>
        <div className="flex flex-col justify-evenly space-y-4">
          <Accordion label="Attendee Value Prop">
            <ul className="ml-2 list-disc marker:text-primaryBrand">
              <li>
                Build something fun with new friends or old while pursuing
                bounty categories
              </li>
              <li>Networking with industry professionals</li>
              <li>Pitching to investors</li>
              <li>Finding work</li>
              <li>
                Learning about the bleeding edge of web3 and the unique
                properties of blockchain technology
              </li>
              <li>Access to after-hour side events</li>
              <li>Included small meals and beverages throughout the event</li>
              <li>Swap</li>
            </ul>
          </Accordion>

          <Accordion label="Rules & Agreements - What are the rules to participate and win bounties?">
            <ul className="ml-2 list-none">
              <li className="list-disc marker:text-primaryBrand">
                Hackers should be 18+ to participate
              </li>
              <li className="list-disc marker:text-primaryBrand">
                Hackers must agree to our “terms and conditions” for
                participation
              </li>
              <li className="list-disc marker:text-primaryBrand">
                Hackers must have a “hacker ticket” for the event and be fully
                registered
              </li>
              <li className="list-disc marker:text-primaryBrand">
                If joining as a team;
              </li>
              <li>
                <ul>
                  <li className="list-decimal list-inside marker:text-primaryBrand">
                    each person will need a hacker ticket
                  </li>
                  <li className="list-decimal list-inside marker:text-primaryBrand">
                    teams are limited to 5 people
                  </li>
                  <li className="list-decimal list-inside marker:text-primaryBrand">
                    a team leader needs to be elected for bounty rewards and KYC
                    requirements, ETHChicago will not be responsible for
                    distributing bounties equally among team members.
                  </li>
                </ul>
              </li>
              <li className="list-disc marker:text-primaryBrand">
                Submissions for the hackathon are through Devpost
              </li>
              <li className="list-disc marker:text-primaryBrand">
                Submissions must follow the following guidelines to be eligible
                for prizes
              </li>
              <li>
                <ul>
                  <li className="list-decimal list-inside marker:text-primaryBrand">
                    Qualify as a hacker
                  </li>
                  <li className="list-decimal list-inside marker:text-primaryBrand">
                    Submit the project on Devpost before the deadline
                  </li>
                  <li className="list-decimal list-inside marker:text-primaryBrand">
                    Present the project in person Sunday, Sept 17th, 2023 if
                    selected to be judged
                  </li>
                  <li className="list-decimal list-inside marker:text-primaryBrand">
                    Bounty winners will need to go through a KYC process for
                    payout
                  </li>
                  <li className="list-decimal list-inside marker:text-primaryBrand">
                    Submissions must specify which bounties it goes after and
                    are subject to that bounty’s rules to be eligible.
                  </li>
                </ul>
              </li>
            </ul>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
