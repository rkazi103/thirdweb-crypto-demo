import { NextComponentType } from "next";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const MintToken: NextComponentType = () => {
  const { data, error } = useSWR("/api/hello", fetcher);

  return (
    <div className="mt-5">
      <a
        className="relative inline-block group focus:outline-none focus:ring"
        href="/download"
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
