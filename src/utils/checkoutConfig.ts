import links from "./links"

const baseUrl = 'https://app.unlock-protocol.com/checkout?'
const redirectUri: string = window.location.href
const ethChiLogoUrl = links.images.ethChiLogo
const checkoutTitle = 'ETHChicago'
const checkoutRefefrer = '0xf0017157524793829F29Fb67a4DF21Eaeee87578'

const requiredMetadata = [
    {
        name: 'first name',
        defaultValue: '',
        type: 'text',
        required: true,
        placeholder: 'John',
        public: false,
    },
    {
        name: 'last name',
        defaultValue: '',
        type: 'text',
        required: true,
        placeholder: 'Doe',
        public: false,
    },
]

const hackerPaywallConfig = {
    locks: {
        '0x4119a55f4b384b44f2e79ef25bc69bec699fac85': {
            network: 42161, // arbitrum
            emailRequired: true,
            password: true,
        },
        '0xea4d8c95b5a17456302d770d0f543a3c03a4de22': {
            network: 42161, // arbitrum
            emailRequired: true,
            password: true, 
        },
    },
    icon: ethChiLogoUrl,
    title: checkoutTitle,
    referrer: checkoutRefefrer,
    metadataInputs: requiredMetadata,
}

const generalPaywallConfig = {
    locks: {
        '0x4e944b4dd172b3c23e82e5b5d94d548d631fc3e8': {
            network: 42161, // arbitrum
            emailRequired: true,
        },
        '0xa6b0b2e43504e6513921740886dbcf49f51d968a': {
            network: 42161, // arbitrum
            emailRequired: true,
        },
    },
    icon: ethChiLogoUrl,
    title: checkoutTitle,
    referrer: checkoutRefefrer,
    metadataInputs: requiredMetadata,
}

const vipPaywallConfig = {
    locks: {
        '0x431857bbeb6fed55850ee5511b258b27afa85fcc': {
            network: 42161, // arbitrum
            emailRequired: true,
        },
    },
    icon: ethChiLogoUrl,
    title: checkoutTitle,
    referrer: checkoutRefefrer,
    metadataInputs: requiredMetadata,
}

export const hackerCheckoutUrl = `${baseUrl}&paywallConfig=${encodeURIComponent(JSON.stringify(hackerPaywallConfig))}&redirectUri${redirectUri}`
export const generalCheckoutUrl = `${baseUrl}&paywallConfig=${encodeURIComponent(JSON.stringify(generalPaywallConfig))}&redirectUri${redirectUri}`
export const vipCheckoutUrl = `${baseUrl}&paywallConfig=${encodeURIComponent(JSON.stringify(vipPaywallConfig))}&redirectUri${redirectUri}`