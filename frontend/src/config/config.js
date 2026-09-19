import {createConfig,http} from "wagmi"
import {mainnet,sepolia} from "wagmi/chains"
import {injected,metaMask,safe,walletConnect} from "wagmi/connectors"

const projectId = '82e53c5e5e2b86c02f60c535f6069446'

export const config = createConfig({
    chains:[mainnet,sepolia],
    
    transports:{
        [mainnet.id]:http(),
        [sepolia.id]:http()
    },
    connectors:[
        injected(),
        walletConnect({projectId}),
        metaMask(),
        safe()
    ]
})