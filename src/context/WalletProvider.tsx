import { EthereumProvider } from '@walletconnect/ethereum-provider'

const provider = await EthereumProvider.init({
  projectId: '6bff3d4c36c26ff2fb0ed76123c2675f',
  metadata: {
    name: 'webview try',
    description: 'Trying webview connection',
    url: 'https://mywebsite.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  },
  showQrModal: false,
  optionalChains: [1, 137, 2020],

  /*Optional - Add custom RPCs for each supported chain*/
  rpcMap: {
    1: 'mainnet.rpc...',
    137: 'polygon.rpc...'
  }
})


export default provider;
