import React from 'react'
import {useConnection,useDisconnect,useEnsAvatar,useEnsName} from "wagmi"

const Connection = () => {
    const {address} = useConnection()
    const {disconnect} = useDisconnect()
    const {data:ensName} = useEnsName({address})
    const {data:ensAvatar} = useEnsAvatar({name:ensName})
  return (
    <div>
        {ensAvatar && <img src={ensAvatar} />}
        {address && <div>
            Name : {ensName}
            <br />
            Address : {address}
            </div>}


            <button onClick={()=>disconnect()} >Disconnec</button>
    </div>
  )
}

export default Connection