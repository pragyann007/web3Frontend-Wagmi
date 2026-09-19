import React from "react";
import { useConnect, useConnectors } from "wagmi";

export const WalletOptions = () => {
  const {connect,connectors } = useConnect();

  if (!connectors || connectors.length === 0) {
    return <p>No connectors available</p>;
  }

  return connectors.map((connector) => {
    return (
      <button
        className="bg-red-600  p-6 ml-10"
        key={connector.uid}
        onClick={async () => {
          try {
            await connect({connector:connector});
            console.log("Connected to:", connector);
          } catch (error) {
            console.error("Connection failed:", error);
          }
        }}
      >
        {connector.name || "Unnamed Connector"}
      </button>
    );
  });
};