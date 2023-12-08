import { createConfig } from "wagmi";
import {  getDefaultConfig } from "connectkit";

const infuraId = ""
const walletConnectProjectId = ""

const wagmiConfig = createConfig(
  getDefaultConfig({
    // Required API Keys
    infuraId,
    walletConnectProjectId,

    // Required
    appName: "ETHChicago Website",
  }),
);

export default wagmiConfig

