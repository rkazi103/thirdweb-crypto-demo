import { useWeb3 } from "@3rdweb/hooks";
import type { NextPage } from "next";
import MintToken from "../components/MintToken";

const Home: NextPage = () => {
  const { address, connectWallet, disconnectWallet } = useWeb3();

  return (
    <div className="p-5">
      {address ? (
        <div>
          <h1>Hello, {address}</h1>

          <a
            className="inline-block p-[2px] rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring cursor-pointer mt-5"
            onClick={() => disconnectWallet()}
          >
            <span className="block px-8 py-3 text-sm font-medium bg-white rounded-sm hover:bg-transparent">
              Disconnect Wallet
            </span>
          </a>

          <MintToken />
        </div>
      ) : (
        <a
          className="inline-block px-12 py-3 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring cursor-pointer"
          onClick={() => connectWallet("injected")}
        >
          Connect Wallet
        </a>
      )}
    </div>
  );
};
export default Home;
