import { Link } from "react-router-dom";
import links from "../../data/links";

export default function PromtBattleDemo() {
  const handlePromptInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder="Enter your prompt here"
        onChange={handlePromptInput}
      />
      <Link
        className="bg-primaryBackground text-xl p-4 px-10 rounded-xl text-primaryType"
        to={links.sitePaths.promptBattleDemo2}
      >
        Mint
      </Link>
    </div>
  );
}
