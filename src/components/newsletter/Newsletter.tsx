import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log("Subscribed with email:", email);
  };

  return (
    <>
      {/* ...existing code... */}

      {/* Newsletter section */}
      <div className="p-10">
        <h1 className="font-mono font-bold text-4xl text-primaryType mb-4 text-center">
          KEEP IN TOUCH
        </h1>
        <div className="flex jsutify-center items-center flex-col">
          <p className="font-mono text-primaryType">
            The Midwest's most vibrant web3 community.
          </p>
          <a
            href="https://paragraph.xyz/@ethchicago"
            target="_blank"
            rel="noreferrer"
            className="text-primaryBrand hover:underline mt-2 text-xl"
          >
            Check it out
          </a>
        </div>
        <div className="flex justify-center p-4">
          <div className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 mr-2"
            />
            <a
              href={`https://paragraph.xyz/@ethchicago/subscribe?email=${encodeURIComponent(
                email
              )}`}
              target="_blank"
              rel="noreferrer"
              className="text-primaryBrand hover:underline mt-2 text-xl"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
