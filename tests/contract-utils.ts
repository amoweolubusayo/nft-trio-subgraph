import { newMockEvent } from "matchstick-as";
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts";
import {
  Approval,
  ApprovalForAll,
  OwnershipTransferred,
  Transfer,
} from "../generated/StarLink/StarLink";

export function createContractApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let contractApprovalEvent = changetype<Approval>(newMockEvent());

  contractApprovalEvent.parameters = new Array();

  contractApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  );
  contractApprovalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  );
  contractApprovalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  );

  return contractApprovalEvent;
}

export function createContractApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let contractApprovalForAllEvent = changetype<ApprovalForAll>(newMockEvent());

  contractApprovalForAllEvent.parameters = new Array();

  contractApprovalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  );
  contractApprovalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  );
  contractApprovalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  );

  return contractApprovalForAllEvent;
}

export function createContractOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let contractOwnershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  );

  contractOwnershipTransferredEvent.parameters = new Array();

  contractOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  );
  contractOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  );

  return contractOwnershipTransferredEvent;
}

export function createContractTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let contractTransferEvent = changetype<Transfer>(newMockEvent());

  contractTransferEvent.parameters = new Array();

  contractTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  );
  contractTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  );
  contractTransferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  );

  return contractTransferEvent;
}
