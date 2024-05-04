export default function AboutTextBox() {
  return (
    <div className="bg-primaryBackground rounded-xl">
      <div className="p-10 flex flex-col justify-between space-y-4">
        <h1 className="text-primaryType text-3xl font-bold">
          Welcome to ETHChicago
        </h1>
        <p className="text-primaryType text-xl font-bold" >
          ETHChicago is a community-run ecosystem on the mission of elevating Web3 innovation and entrepreneurship in the Midwest through education and events. 
        </p>
        <div className="flex justify-center items-center p-10">
          <img
            width="800px"
            height="400px"
            src="/images/brand/ethchi_flag.jpg"
            alt="event timeline sketch"
          />
        </div>
        <p className="text-primaryType text-lg">
          We are thrilled to invite you to ETHChicago, the premier community
          dedicated to fueling innovation and fostering collaboration in the
          vibrant Chicagoland area. Our mission is to harness the power of
          decentralized technology, showcasing the brilliance of the Midwest,
          while addressing pressing coordination challenges and reimagining the
          way our community connects and thrives.
        </p>
        <p className="text-primaryType text-lg">
          At ETHChicago, a diverse community of creatives and builders come
          together, combining their expertise to drive demonstrable impact in
          Chicago's commercial and social partner communities. We welcome
          everyone, providing a safe environment for learning and connection,
          whether you're a crypto and blockchain enthusiast, a traditional
          business professional, legal and policy expert, financial industry
          veteran, or just want to build something cool.
        </p>
        <p className="text-primaryType text-lg">
          Subscribe to our newsletter and follow us on social media to stay
          informed about meetups. We hope to see you there!
        </p>
      </div>
    </div>
  );
}
