import {
  MoveVector,
  U64,
  U8,
} from "@aptos-labs/ts-sdk";

const NUM_SLOTS = 36;
const rouletteModule = "roulette";
const aptosinoPackageAddress =
  "0x0da2178c68352cf9035afbb8750eb9eb6905332a9d0f15bd36b140cba6eaf5eb";

const entryFunctionPayload = (func, args, typeArgs) => ({
  function: func,
  typeArguments: typeArgs,
  functionArguments: args,
});
const rouletteEntryFunction = (functionName, args, typeArgs) =>
  entryFunctionPayload(

    `${aptosinoPackageAddress}::${rouletteModule}::${functionName}`,
    args,
    typeArgs
  );

export const spinWheelEntryFunctionPayload = (address,betAmounts, predictedOutcomes) =>
  rouletteEntryFunction("spin_wheel", [address,
    new MoveVector(betAmounts.map((bet) => new U64(Math.round(bet)))),
    new MoveVector(
      predictedOutcomes.map(
        (outcomes) => new MoveVector([new U8(outcomes)])
      )
    ),
  ]);
