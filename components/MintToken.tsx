import { useWeb3 } from "@3rdweb/hooks";
import { NextComponentType } from "next";
import { useCallback, useMemo } from "react";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";

const MintToken: NextComponentType = () => {
  const { provider } = useWeb3();

  const sdk = useMemo(() => {
    if (provider) return new ThirdwebSDK(provider.getSigner());
    return undefined;
  }, [provider]);

  const tokenModule = useMemo(() => {
    if (sdk)
      return sdk.getTokenModule("0x793DDF77487883b38c4E9BB0739Fdc89d3327472");
    return undefined;
  }, [sdk]);

  const amount = ethers.utils.parseUnits("8", 18);
  const mintToken = useCallback(() => {
    tokenModule?.mint(amount);
  }, [tokenModule, amount]);

  return (
    <div className="mt-5">
      <a
        className="relative inline-block group focus:outline-none focus:ring cursor-pointer"
        onClick={mintToken}
      >
        <span className="absolute inset-0 transition-transform translate-x-0 translate-y-0 bg-red-300 group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

        <span className="relative inline-block px-8 py-3 text-sm font-bold tracking-widest uppercase border-2 border-current">
          Mint 5 Apples
        </span>
      </a>
    </div>
  );
};

export default MintToken;
