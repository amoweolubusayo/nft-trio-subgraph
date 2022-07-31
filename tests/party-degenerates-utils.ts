import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  PartyDegeneratesApproval,
  PartyDegeneratesApprovalForAll,
  PartyDegeneratesOwnershipTransferred,
  PublicSalePaused,
  PublicSaleStart,
  PartyDegeneratesTransfer
} from "../generated/PartyDegenerates/PartyDegenerates"

export function createPartyDegeneratesApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): PartyDegeneratesApproval {
  let partyDegeneratesApprovalEvent = changetype<PartyDegeneratesApproval>(
    newMockEvent()
  )

  partyDegeneratesApprovalEvent.parameters = new Array()

  partyDegeneratesApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  partyDegeneratesApprovalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  partyDegeneratesApprovalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return partyDegeneratesApprovalEvent
}

export function createPartyDegeneratesApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): PartyDegeneratesApprovalForAll {
  let partyDegeneratesApprovalForAllEvent = changetype<
    PartyDegeneratesApprovalForAll
  >(newMockEvent())

  partyDegeneratesApprovalForAllEvent.parameters = new Array()

  partyDegeneratesApprovalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  partyDegeneratesApprovalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  partyDegeneratesApprovalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return partyDegeneratesApprovalForAllEvent
}

export function createPartyDegeneratesOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): PartyDegeneratesOwnershipTransferred {
  let partyDegeneratesOwnershipTransferredEvent = changetype<
    PartyDegeneratesOwnershipTransferred
  >(newMockEvent())

  partyDegeneratesOwnershipTransferredEvent.parameters = new Array()

  partyDegeneratesOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  partyDegeneratesOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return partyDegeneratesOwnershipTransferredEvent
}

export function createPublicSalePausedEvent(
  _currentPrice: BigInt,
  _timeElapsed: BigInt
): PublicSalePaused {
  let publicSalePausedEvent = changetype<PublicSalePaused>(newMockEvent())

  publicSalePausedEvent.parameters = new Array()

  publicSalePausedEvent.parameters.push(
    new ethereum.EventParam(
      "_currentPrice",
      ethereum.Value.fromUnsignedBigInt(_currentPrice)
    )
  )
  publicSalePausedEvent.parameters.push(
    new ethereum.EventParam(
      "_timeElapsed",
      ethereum.Value.fromUnsignedBigInt(_timeElapsed)
    )
  )

  return publicSalePausedEvent
}

export function createPublicSaleStartEvent(
  _saleDuration: BigInt,
  _saleStartTime: BigInt
): PublicSaleStart {
  let publicSaleStartEvent = changetype<PublicSaleStart>(newMockEvent())

  publicSaleStartEvent.parameters = new Array()

  publicSaleStartEvent.parameters.push(
    new ethereum.EventParam(
      "_saleDuration",
      ethereum.Value.fromUnsignedBigInt(_saleDuration)
    )
  )
  publicSaleStartEvent.parameters.push(
    new ethereum.EventParam(
      "_saleStartTime",
      ethereum.Value.fromUnsignedBigInt(_saleStartTime)
    )
  )

  return publicSaleStartEvent
}

export function createPartyDegeneratesTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): PartyDegeneratesTransfer {
  let partyDegeneratesTransferEvent = changetype<PartyDegeneratesTransfer>(
    newMockEvent()
  )

  partyDegeneratesTransferEvent.parameters = new Array()

  partyDegeneratesTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  partyDegeneratesTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  partyDegeneratesTransferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return partyDegeneratesTransferEvent
}
