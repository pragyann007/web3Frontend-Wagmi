import React from 'react'
import {useAccount, useConnection} from "wagmi"

const App = () => {
  const {isConnected} = useConnection()
  console.log(isConnected)
  return (
    <div>
      Hi i am web3 frontend.
    </div>
  )
}

export default App