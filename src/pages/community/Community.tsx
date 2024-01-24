import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import axios from 'axios';
import { Link } from "react-router-dom";

const SUBGRAPH_API_KEY = process.env.REACT_APP_SUBGRAPH_API_KEY;

const SUBGRAPH_URL = `https://gateway-arbitrum.network.thegraph.com/api/${SUBGRAPH_API_KEY}/subgraphs/id/5varBtYqx7ZSB5KZkTPdhYu94Wipzy6bP9aUxfAh17Zj`;

interface TransferSingle {
    id: string;
    value: string;
    HolidayCollectible2023_id: string;
    to: string;
}

export default function Community() {
    const { address, isConnected } = useAccount();
    const [ownsNFT, setOwnsNFT] = useState(false);
    const [recentMints, setRecentMints] = useState<TransferSingle[]>([]);

    useEffect(() => {
        async function fetchData() {
            if (isConnected && address) {
                setOwnsNFT(await checkNFTOwnership(address));
            }
            setRecentMints(await fetchRecentMints());
        }
        fetchData();
    }, [isConnected, address]);


    const formatAddress = (address: string) => `${address.slice(0, 6)}...${address.slice(-4)}`;


    return (
        <div className="bg-grid_bg_navy">
            <div className="flex flex-col justify-center items-center px-4 py-10 pt-28 pb-28">
                <div className="w-full max-w-xl bg-primaryBackground rounded-lg shadow-lg p-6">
                    <div className="text-center">
                        {!isConnected ? (
                            <div className="flex flex-col items-center justify-center h-full">
                                <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
                                    Connect wallet to continue
                                </h1>
                            </div>
                        ) : (
                            <>
                                <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                                    {ownsNFT ? 'You Own an ETH CHI 2023 Holiday Collectable!' : 'You Don\'t Own A Holiday Collectable!'}
                                </h1>
                                {!ownsNFT && (
                                    <Link to="/holiday-collectible-mint" className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                        Join the community
                                    </Link>
                                )}
                                <h2 className="text-white text-xl md:text-2xl font-bold mt-8 mb-6 text-center">
                                    Recent Mints
                                </h2>
                                <div className="space-y-4">
                                    {recentMints.map((mint) => (
                                        <div key={mint.id} className="bg-black bg-opacity-50 rounded-lg px-4 py-2 flex justify-between items-center border border-white">
                                            <span className="text-white text-sm md:text-base">{formatAddress(mint.to)}</span>
                                            <span className="text-white text-sm md:text-base font-bold">#{mint.HolidayCollectible2023_id}</span>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

async function checkNFTOwnership(walletAddress: string) {
    const query = `
      query($address: Bytes!) {
        transferSingles(where: { to: $address }) {
          id
          value
          HolidayCollectible2023_id
        }
      }
    `;

    const variables = {
        address: walletAddress.toLowerCase(),
    };

    try {
        const response = await axios.post(SUBGRAPH_URL, {
            query,
            variables,
        });

        const transfers: TransferSingle[] = response.data.data.transferSingles;
        console.log('Transfers:', transfers);

        return transfers.some(transfer => BigInt(transfer.value) > 0);
    } catch (error) {
        console.error('Error querying the subgraph:', error);
        return false;
    }
}

async function fetchRecentMints(): Promise<TransferSingle[]> {
    const query = `
      query {
        transferSingles(first: 5, orderBy: blockTimestamp, orderDirection: desc, where: {from: "0x0000000000000000000000000000000000000000"}) {
          id
          value
          HolidayCollectible2023_id
          to
        }
      }
    `;
    try {
        const response = await axios.post(SUBGRAPH_URL, { query });
        return response.data.data.transferSingles;
    } catch (error) {
        console.error('Error querying the subgraph for recent mints:', error);
        return [];
    }
}
