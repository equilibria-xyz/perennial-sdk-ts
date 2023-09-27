import { EvmPriceServiceConnection } from "@pythnetwork/pyth-evm-js";
import { Address, Hex, PublicClient } from "viem";

import { SupportedChainId } from "../constants/network";
import { getPythProviderContract } from "./contractUtils";

export const getRecentVaa = async ({
  pyth,
  feedId,
  minValidTime,
}: {
  pyth: EvmPriceServiceConnection;
  feedId: string;
  minValidTime: bigint;
}) => {
  const vaaQueryTime = Math.floor(Date.now() / 1000) - Number(minValidTime);
  const [vaa, publishTime] = await pyth.getVaa(feedId, vaaQueryTime);

  return {
    vaa: `0x${Buffer.from(vaa, "base64").toString("hex")}`,
    publishTime,
    version: BigInt(publishTime) - minValidTime,
  };
};

export const buildCommitmentsForOracles = ({
  pyth,
  marketOracles,
  publicClient,
}: {
  pyth: EvmPriceServiceConnection;
  publicClient: PublicClient;
  marketOracles: {
    providerAddress: Address;
    providerId: Hex;
    minValidTime: bigint;
  }[];
}) => {
  // TODO: there is some duplicate code here with the markets lens logic, we can probably consolidate some of this
  return Promise.all(
    Object.values(marketOracles).map(
      async ({ providerAddress, providerId, minValidTime }) => {
        const { vaa, version } = await getRecentVaa({
          pyth,
          feedId: providerId,
          minValidTime,
        });
        const index = await getPythProviderContract(
          providerAddress,
          publicClient
        ).read.versionListLength();
        return {
          pyth: providerAddress,
          version,
          value: BigInt(1),
          index,
          updateData: vaa as Hex,
        };
      }
    )
  );
};
