import { BigInt } from "@graphprotocol/graph-ts"
import {
  PoolImplementation,
  AddLiquidity,
  AddMargin,
  AddMarket,
  CollectProtocolFee,
  NewAdmin,
  NewImplementation,
  NewProtocolFeeCollector,
  RemoveLiquidity,
  RemoveMargin
} from "../generated/PoolImplementation/PoolImplementation"
import { ExampleEntity } from "../generated/schema"

export function handleAddLiquidity(event: AddLiquidity): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.lTokenId = event.params.lTokenId
  entity.underlying = event.params.underlying

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.admin(...)
  // - contract.cumulativePnlPerLiquidity(...)
  // - contract.decimalsB0(...)
  // - contract.implementation(...)
  // - contract.lToken(...)
  // - contract.liquidationRewardCutRatio(...)
  // - contract.liquidity(...)
  // - contract.lpInfos(...)
  // - contract.lpsPnl(...)
  // - contract.markets(...)
  // - contract.maxLiquidationReward(...)
  // - contract.minLiquidationReward(...)
  // - contract.minRatioB0(...)
  // - contract.nameId(...)
  // - contract.oracleManager(...)
  // - contract.pToken(...)
  // - contract.poolInitialMarginMultiplier(...)
  // - contract.privileger(...)
  // - contract.protocolFeeAccrued(...)
  // - contract.protocolFeeCollectRatio(...)
  // - contract.protocolFeeCollector(...)
  // - contract.reserveRatioB0(...)
  // - contract.rewardVault(...)
  // - contract.swapper(...)
  // - contract.symbolManager(...)
  // - contract.tdInfos(...)
  // - contract.tokenB0(...)
  // - contract.tokenWETH(...)
  // - contract.vTokenB0(...)
  // - contract.vTokenETH(...)
  // - contract.vaultImplementation(...)
  // - contract.vaultTemplate(...)
  // - contract.versionId(...)
}

export function handleAddMargin(event: AddMargin): void {}

export function handleAddMarket(event: AddMarket): void {}

export function handleCollectProtocolFee(event: CollectProtocolFee): void {}

export function handleNewAdmin(event: NewAdmin): void {}

export function handleNewImplementation(event: NewImplementation): void {}

export function handleNewProtocolFeeCollector(
  event: NewProtocolFeeCollector
): void {}

export function handleRemoveLiquidity(event: RemoveLiquidity): void {}

export function handleRemoveMargin(event: RemoveMargin): void {}
