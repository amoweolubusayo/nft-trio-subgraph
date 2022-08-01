import { Address } from "@graphprotocol/graph-ts";
import {
  TransferSingle,
  ProofOfBeauty,
} from "../generated/ProofOfBeauty/ProofOfBeauty";
import { Account, Collectible, Collection } from "../generated/schema";

import {
  getOrCreateAccount,
  getOrCreateCollection,
} from "./proof-of-beauty-util";

// export function handleTransferSingle(event: TransferSingle): void {
//   let collection = getOrCreateCollection(event.address);
//   let receiver = getOrCreateAccount(event.params._to);
//   if (
//     event.params._from ==
//     Address.fromString("0x0000000000000000000000000000000000000000")
//   ) {
//     // THIS IS A MINT
//     getOrCreateCollectible(
//       collection.collectionAddress,
//       collection.id,
//       event.params._id,
//       receiver.id,
//       event.block.timestamp
//     );
//   } else {
//     let collectibleId = collection.collectionAddress
//       .toHexString()
//       .concat("-")
//       .concat(event.params._id.toHexString());
//     let collectible = Collectible.load(collectibleId);
//     if (collectible) {
//       if (
//         event.params._to ==
//         Address.fromString("0x0000000000000000000000000000000000000000")
//       ) {
//         // THIS IS A BURN
//         collectible.removed = event.block.timestamp;
//       } else {
//         let sender = getOrCreateAccount(event.params._from);
//         collectible.owner = sender.id;
//         collectible.modified = event.block.timestamp;
//       }
//       collectible.save();
//     }
//   }
// }

export function handleTransferSingle(event: TransferSingle): void {
  let tokenId = event.params._id;
  let id = event.address.toHex() + "_" + tokenId.toString();
  let contractId = event.address.toHex();

  let contract = ProofOfBeauty.bind(event.address);
  let tokenContract = Collection.load(contractId);
  if (tokenContract == null) {
    tokenContract = new Collection(contractId);

    let name = "ProofOfBeauty";
    tokenContract.name = name;
    let symbol = "POB";
    tokenContract.symbol = symbol;
    tokenContract.address = contract._address;
    tokenContract.save();
  }
}
