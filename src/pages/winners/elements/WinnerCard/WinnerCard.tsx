import React from 'react'

const TEAM_DATA = {
    'whalewatcher': {
        name: 'Whale Watcher',
        description: 'Generative NFT art project that connects creators with their collectors.',
        team: 'Amay Kataria, Max Knivets, Blair McKee',
        website: 'https://visualizer-hackathon-app.vercel.app/',
        img: '/images/winners/whalewatcher.jpg',
        bounties: [
            {
                title: 'Featured artists and creatives team(s) (First Place)',
                description: 'Build with artists and creatives in the web3 space.'
            }   
        ]
    },

    'chicare': {
        name: 'Chi Care',
        description: 'Empowering Immigrants Through Web3: A New Era of Donations',
        team: 'rudramore, Diego Aguilar, Julio Cruz, Beechy', 
        website: 'https://eth-chicago-fundswift.vercel.app/',
        img: '/images/winners/chicare.jpg',
        bounties: [
            {
                title: 'ETHChi for Good (First Place)',
                description: 'Best native blockchain solution can improve chicago public goods.'
            },
            {
                title: 'API3',
                description: 'Best projects utilizing API3’s price feeds.'
            },
        ]
    },

    'heyneighbor': {
        name: 'Hey Neighbor!',
        description: 'A platform that puts the power of funding back into the hands of communities.',
        team: 'Baba Jide, King Lawson',
        website: '',
        img: '/images/winners/heyneighbor.jpg',
        bounties: [
            {
                title: 'Hopscotch',
                description: 'Building the barter economy.'
            },
            {
                title: 'ETHChi for Good (Second Place)',
                description: 'Best native blockchain solution can improve chicago public goods.'
            }   
        ]
    },

    'initmail': {
        name: 'initmail',
        description: 'Sign Safe transactions in multiple chains through a unified interface.',
        team: 'jwp6',
        website: '',
        img: '/images/winners/initmail.jpg',
        bounties: [
            {
                title: 'Wormhole',
                description: 'Wormhole’s cross-chain messaging platform to add cross-chain capability to any application.'
            },
            {
                title: 'Build Guild',
                description: 'Best scaffold Eth 2 project.'
            }      
        ]
    },

    'reverberate': {
        name: 'Reverberate',
        description: 'Custom trading strategy implementation and backtesting.',
        team: 'Shashank Kalluri, George Fane, Ashrith Bandla, Alex Belouiu',
        website: '',
        img: '/images/winners/reverberate.jpg',
        bounties: [
            {
                title: 'Tastycrypto x Amberdata',
                description: 'tastycrypto x Amberdata onchain insights bounty.'
            }   
        ]
    },

    'daopropbot': {
        name: 'Dao Prop Bot',
        description: 'AI-powered DAP Proposal Bot, trained with comprehensive information about a DAO.',
        team: 'Daniel, Eddylg, ryoko, Fattybuthappy69',
        website: '',
        img: '/images/winners/daopropbot.jpg',
        bounties: [
            {
                title: 'Lil Nouns',
                description: 'Lil Nouns, are you ready to build in our bounty event?'
            }   
        ]
    },

    'vita': {
        name: 'Vita',
        description: 'A pharmaceutical supply chain network utilizing Arbitrum Orbit Layer 3 technology to ensure efficiency and authenticity in the industry.',
        team: 'Logan Morof, William Pizzuti, Neil Khedekar, Baibhav Thapa',
        website: '',
        img: '/images/winners/vita.jpg',
        bounties: [
            {
                title: 'Arbitrum',
                description: 'Arbitrum based bounty.'
            }   
        ]
    },

    'dakinehome': {
        name: 'Dakine Home',
        description: 'Purchase sustainable housing home kit - transparent supply chain tracking and carbon credit revenue.',
        team: 'vicemd, dakinekent',
        website: '',
        img: '/images/winners/dakine.jpg',
        bounties: [
            {
                title: 'Featured artists and creatives team(s) (Second Place)',
                description: 'Build with artists and creatives in the web3 space.'
            }   
        ]
    },

    'xsafe': {
        name: 'X-Safe',
        description: 'Sign Safe transactions in multiple chains through a unified interface.',
        team: 'João Alexandre, rahulb',
        website: '',
        img: '/images/winners/xsafe.jpg',
        bounties: [
            {
                title: 'ETHChi for Good (Second Place)',
                description: 'Best native blockchain solution can improve chicago public goods.'
            } ,
            {
                title: 'Build Guild',
                description: 'Best scaffold Eth 2 project.'
            }  
        ]
    },
}

export enum TEAMS {
    CHIC_CARE = 'chicare',
    WHALE_WATCHER = 'whalewatcher',
    HEY_NEIGHBOR = 'heyneighbor',
    INIT_MAIL = 'initmail',
    REVERBERATE = 'reverberate',
    DAO_PROP_BOT = 'daopropbot',
    VITA = 'vita',
    DAKINE_HOME = 'dakinehome',
    X_SAFE = 'xsafe'
}

interface IWinnerCard {
    teamName: TEAMS,
}

export default function WinnerCard(props: IWinnerCard) {
    const teamData = TEAM_DATA[props.teamName];

    const getBounties = (): Array<React.ReactElement> => {
        let bounties = teamData.bounties.map((b, i) => 
            <div className="flex flex-col items-center mt-2">
                <div className="font-bold text-base md:text-base text-center">{b['title']}</div>
                <div className="mt-1 italic text-center text-sm md:text-sm lg:text-base">{b['description']}</div>
            </div>
        );
        return bounties;
    }

    return <>    
        <div className="bg-secondaryBrand text-primaryType p-2">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2 items-center">
                <img alt={teamData.name} src={teamData.img} />
                <div className="flex flex-col items-center justify-center">
                    <div className="font-bold text-2xl md:text-3xl text-center pt-2">{teamData.name}</div>
                    <div className="mt-2 italic text-center text-sm md:text-base lg:text-lg">{teamData.description}</div>
                    {teamData.website ? <a target="_blank" rel="noopener noreferrer" className="underline italic mt-2" href={teamData.website}>Website</a> : <></>}
                    <div className="mt-2 text-center text-sm md:text-base lg:text-lg">{'Team: ' + teamData.team}</div>
                </div>
            </div>
            <div className="flex flex-col items-center mt-4">
                <div className="flex flex-col items-center">
                    <div className="font-bold md:text-2xl text-xl ">🏆🏆🏆</div>
                    {getBounties()}
                </div>
            </div>
        </div>
    </>
}