import React from 'react'
import {useAccount, useConnection} from "wagmi"
import Connection from './components/Connection'
import { WalletOptions } from './components/Wallet-options'

const App = () => {
  const { isConnected } = useConnection()
  console.log(isConnected)
  if (isConnected) return <Connection />
  else return <WalletOptions />
  return (
    <div>
      Hi i am web3 frontend.
    </div>
  )
}

export default App