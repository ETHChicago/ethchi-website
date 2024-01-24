import VideoBackground from "./elements/videoBackground/VideoBackground";
import Accordion from "../../components/accordion/Accordion";
import VennityMap from "../../components/vennityMap/VennityMap";
import PartnerContainer from "./elements/partnerContainer/PartnerContainer";
import links from "../../data/links";
import Newsletter from "../../components/newsletter/Newsletter";

export default function Home() {
  return (
    <>
      <div className="w-full bg-primaryBackground">
        <div>
          <VideoBackground />
        </div>

        <div>
          <img
            className="w-full"
            src="/images/learn-build-create-network-banner.png"
            alt="learn build create network banner"
          />
        </div>

        {/*
        <div className="w-full h-full">
          <VennityMap />
        </div>
		*/}

        {/* newsletter section */}
        <div className="p-10">
          <Newsletter />
        </div>

        {/* FAQ section */}
        <div className="bg-grid_bg_navy p-10">
          <div className="bg-primaryBackground p-6 rounded-sm">
            <h1 className="font-mono font-bold text-4xl text-primaryType mb-4">
              FAQ
            </h1>

            <div className="flex flex-col justify-evenly space-y-4 items-center">
              <Accordion label="WHAT IS ETHCHICAGO?">
                <p>
                  ETHChicago is a community-run hackathon and conference focused
                  on decentralized technology, particularly within the Ethereum
                  ecosystem. Our aim is to catalyze innovation, foster
                  collaboration, and promote education through real-world impact
                  in blockchain technology.
                </p>
              </Accordion>
              <Accordion label="WHO CAN ATTEND ETHCHICAGO?">
                <p>
                  Anyone interested in decentralized technology is welcome,
                  including developers, creatives, business leaders, students,
                  and enthusiasts from all walks of life. Our community is
                  diverse, inclusive, and open to all.
                </p>
              </Accordion>
              <Accordion label="HOW CAN I PARTICIPATE IN ETHCHICAGO?">
                <p>
                  There are several ways you can participate in ETHChicago: as a
                  volunteer, partner, speaker, mentor, or attendee. Our website
                  is a great starting point but also feel free to checkout
                  {"  "}
                  <a
                    href={links.forum}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline text-primaryBrand"
                  >
                    forum.ethchicago.xyz
                  </a>
                  {"  "}or contact us directly on{" "}
                  <a
                    href={links.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline text-primaryBrand"
                  >
                    Twitter
                  </a>{" "}
                  &{" "}
                  <a
                    href="mailto:ecosystem@ethchicago.xyz"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline text-primaryBrand"
                  >
                    ecosystem@ethchicago.xyz
                  </a>
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Partners sections */}
        <div className="p-10">
          <h1 className="font-mono font-bold text-4xl text-primaryType mb-4">
            OUR PARTNERS AND SPONSORS
          </h1>
          <PartnerContainer />
        </div>
      </div>
    </>
  );
}
