// import {
//   PartyDegeneratesApproval as PartyDegeneratesApprovalEvent,
//   PartyDegeneratesApprovalForAll as PartyDegeneratesApprovalForAllEvent,
//   PartyDegeneratesOwnershipTransferred as PartyDegeneratesOwnershipTransferredEvent,
//   PublicSalePaused as PublicSalePausedEvent,
//   PublicSaleStart as PublicSaleStartEvent,
//   PartyDegeneratesTransfer as PartyDegeneratesTransferEvent
// } from "../generated/PartyDegenerates/PartyDegenerates"
// import {
//   PartyDegeneratesApproval,
//   PartyDegeneratesApprovalForAll,
//   PartyDegeneratesOwnershipTransferred,
//   PublicSalePaused,
//   PublicSaleStart,
//   PartyDegeneratesTransfer
// } from "../generated/schema"

// export function handlePartyDegeneratesApproval(
//   event: PartyDegeneratesApprovalEvent
// ): void {
//   let entity = new PartyDegeneratesApproval(
//     event.transaction.hash.toHex() + "-" + event.logIndex.toString()
//   )
//   entity.owner = event.params.owner
//   entity.approved = event.params.approved
//   entity.tokenId = event.params.tokenId
//   entity.save()
// }

// export function handlePartyDegeneratesApprovalForAll(
//   event: PartyDegeneratesApprovalForAllEvent
// ): void {
//   let entity = new PartyDegeneratesApprovalForAll(
//     event.transaction.hash.toHex() + "-" + event.logIndex.toString()
//   )
//   entity.owner = event.params.owner
//   entity.operator = event.params.operator
//   entity.approved = event.params.approved
//   entity.save()
// }

// export function handlePartyDegeneratesOwnershipTransferred(
//   event: PartyDegeneratesOwnershipTransferredEvent
// ): void {
//   let entity = new PartyDegeneratesOwnershipTransferred(
//     event.transaction.hash.toHex() + "-" + event.logIndex.toString()
//   )
//   entity.previousOwner = event.params.previousOwner
//   entity.newOwner = event.params.newOwner
//   entity.save()
// }

// export function handlePublicSalePaused(event: PublicSalePausedEvent): void {
//   let entity = new PublicSalePaused(
//     event.transaction.hash.toHex() + "-" + event.logIndex.toString()
//   )
//   entity._currentPrice = event.params._currentPrice
//   entity._timeElapsed = event.params._timeElapsed
//   entity.save()
// }

// export function handlePublicSaleStart(event: PublicSaleStartEvent): void {
//   let entity = new PublicSaleStart(
//     event.transaction.hash.toHex() + "-" + event.logIndex.toString()
//   )
//   entity._saleDuration = event.params._saleDuration
//   entity._saleStartTime = event.params._saleStartTime
//   entity.save()
// }

// export function handlePartyDegeneratesTransfer(
//   event: PartyDegeneratesTransferEvent
// ): void {
//   let entity = new PartyDegeneratesTransfer(
//     event.transaction.hash.toHex() + "-" + event.logIndex.toString()
//   )
//   entity.from = event.params.from
//   entity.to = event.params.to
//   entity.tokenId = event.params.tokenId
//   entity.save()
// }
