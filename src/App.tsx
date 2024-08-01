import type { WormholeConnectConfig } from '@wormhole-foundation/wormhole-connect'
import WormholeConnect from '@wormhole-foundation/wormhole-connect'


const wormholeConfig: WormholeConnectConfig = {
    env: 'testnet', // from deployment.json of the NTT deployment directory
    networks: ['sepolia', 'solana'], // from https://github.com/wormhole-foundation/wormhole-connect/blob/development/wormhole-connect/src/config/testnet/chains.ts#L170
    tokens: ['FTTsep', 'FTTsol'], 
    routes: ['nttManual'], // from https://github.com/wormhole-foundation/wormhole-connect/blob/d7a6b67b18db2c8eb4a249d19ef77d0174deffbe/wormhole-connect/src/config/types.ts#L70
    bridgeDefaults: {
      fromNetwork: 'sepolia',
      toNetwork: 'solana'
    },
    nttGroups: {
      FTT_NTT: { // arbitrary name for the ntt group
        nttManagers: [
          {
            chainName: 'sepolia',
            address: '0xeBdEFbC8111439449293A98f552a4BE57e2D5FAD', // nttManagers Address from deployment.json
            tokenKey: 'FTTsep', 
            transceivers: [
              {
                address: '0xf5D15B2F36A34918bD18C9D1382B98B9C22a7d3e', // transceivers address from deployment.json
                type: 'wormhole'
              }
            ]
          },
          {
            chainName: 'solana',
            address: 'NTttPKktsauausafEimYigoDKfb193P94L3Vyff6LvV', // nttManagers Address from deployment.json
            tokenKey: 'FTTsol',
            transceivers: [
              {
                address: 'AQmPbngJJHmKcC482pVshfLeS3KP4iK5q863a2DhH992', // transceivers address from deployment.json
                type: 'wormhole'
              }
            ]
          }
        ]
      }
    },

    tokensConfig: {
      FTTsep: {
        key: 'FTTsep',
        symbol: 'FTT',
        nativeChain: 'sepolia',
        displayName: 'FTT (Sep)',
        tokenId: {
          chain: 'sepolia',
          address: '0xF7cbc69c6259Cf06582EEDF9477D58a15Dc5332e' // token address
        },
        coinGeckoId: 'test',
        icon: 'https://wormhole.com/token.png',
        color: '#00C3D9',
        decimals: {
          Ethereum: 18,
          default: 8
        }
      },
  
      FTTsol: {
        key: 'FTTsol',
        symbol: 'FTT',
        nativeChain: 'solana',
        displayName: 'FTT (Solana)',
        tokenId: {
          chain: 'solana',
          address: 'GCzVVsjMjkg8EpoidnFW9bqegwhbp1GWGpzuSfhH6fyB' // token address
        },
        coinGeckoId: 'test',
        icon: 'https://wormhole.com/token.png',
        color: '#00C3D9',
        decimals: {
          Solana: 9,
          Ethereum: 9,
          default: 8
        }
      }
    }
  }

function App() {
  return (
    <div>
      <h1>My Wormhole Connect App</h1>
      <WormholeConnect config={wormholeConfig} />
    </div>
  )
}


export default App