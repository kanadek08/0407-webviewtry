import { EthereumProvider } from '@walletconnect/ethereum-provider'

const provider = await EthereumProvider.init({
  projectId: '6bff3d4c36c26ff2fb0ed76123c2675f',
  metadata: {
    name: 'webview try',
    description: 'Trying webview connection',
    url: 'https://0407-webviewtry.vercel.app/', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  },
  showQrModal: false,
  optionalChains: [9372, 19011, 20197, 40875, 11155111],

  /*Optional - Add custom RPCs for each supported chain*/
  rpcMap: {
    9372: 'https://rpc.testnet.oasys.games',
    19011: 'https://rpc.mainnet.oasys.games', 
    20197: 'https://rpc.sandverse.oasys.games', 
    40875: 'https://rpc.testnet.oasys.homeverse.games', 
    11155111: 'https://rpc.sepolia.org',
  }
})


export default provider;
