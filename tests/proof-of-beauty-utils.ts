import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ProofOfBeautyApprovalForAll,
  ProofOfBeautyOwnershipTransferred,
  TransferBatch,
  TransferSingle,
  URI
} from "../generated/ProofOfBeauty/ProofOfBeauty"

export function createProofOfBeautyApprovalForAllEvent(
  _owner: Address,
  _operator: Address,
  _approved: boolean
): ProofOfBeautyApprovalForAll {
  let proofOfBeautyApprovalForAllEvent = changetype<
    ProofOfBeautyApprovalForAll
  >(newMockEvent())

  proofOfBeautyApprovalForAllEvent.parameters = new Array()

  proofOfBeautyApprovalForAllEvent.parameters.push(
    new ethereum.EventParam("_owner", ethereum.Value.fromAddress(_owner))
  )
  proofOfBeautyApprovalForAllEvent.parameters.push(
    new ethereum.EventParam("_operator", ethereum.Value.fromAddress(_operator))
  )
  proofOfBeautyApprovalForAllEvent.parameters.push(
    new ethereum.EventParam("_approved", ethereum.Value.fromBoolean(_approved))
  )

  return proofOfBeautyApprovalForAllEvent
}

export function createProofOfBeautyOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): ProofOfBeautyOwnershipTransferred {
  let proofOfBeautyOwnershipTransferredEvent = changetype<
    ProofOfBeautyOwnershipTransferred
  >(newMockEvent())

  proofOfBeautyOwnershipTransferredEvent.parameters = new Array()

  proofOfBeautyOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  proofOfBeautyOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return proofOfBeautyOwnershipTransferredEvent
}

export function createTransferBatchEvent(
  _operator: Address,
  _from: Address,
  _to: Address,
  _ids: Array<BigInt>,
  _values: Array<BigInt>
): TransferBatch {
  let transferBatchEvent = changetype<TransferBatch>(newMockEvent())

  transferBatchEvent.parameters = new Array()

  transferBatchEvent.parameters.push(
    new ethereum.EventParam("_operator", ethereum.Value.fromAddress(_operator))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam(
      "_ids",
      ethereum.Value.fromUnsignedBigIntArray(_ids)
    )
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam(
      "_values",
      ethereum.Value.fromUnsignedBigIntArray(_values)
    )
  )

  return transferBatchEvent
}

export function createTransferSingleEvent(
  _operator: Address,
  _from: Address,
  _to: Address,
  _id: BigInt,
  _value: BigInt
): TransferSingle {
  let transferSingleEvent = changetype<TransferSingle>(newMockEvent())

  transferSingleEvent.parameters = new Array()

  transferSingleEvent.parameters.push(
    new ethereum.EventParam("_operator", ethereum.Value.fromAddress(_operator))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("_value", ethereum.Value.fromUnsignedBigInt(_value))
  )

  return transferSingleEvent
}

export function createURIEvent(_value: string, _id: BigInt): URI {
  let uriEvent = changetype<URI>(newMockEvent())

  uriEvent.parameters = new Array()

  uriEvent.parameters.push(
    new ethereum.EventParam("_value", ethereum.Value.fromString(_value))
  )
  uriEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )

  return uriEvent
}
