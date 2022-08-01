import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import { ProofOfBeauty } from "../generated/ProofOfBeauty/ProofOfBeauty";
import { Account, Collectible, Collection } from "../generated/schema";

export function getOrCreateAccount(address: Address): Account {
  let accountAddress = address.toHexString();
  let account = Account.load(accountAddress);

  if (account == null) {
    account = new Account(accountAddress);
    account.address = address;
    account.save();
  }

  return account as Account;
}

export function getOrCreateCollection(address: Address): Collection {
  let collectionId = address.toHexString();
  let collection = Collection.load(collectionId);
  if (!collection) {
    collection = new Collection(collectionId);
    collection.collectionAddress = address;

    let contract = ProofOfBeauty.bind(address);
    let name = "ProofOfBeauty";
    collection.collectionName = name;
    let symbol = "POB";
    collection.collectionSymbol = symbol;
    collection.collectionAddress = address;

    collection.save();
  }
  return collection;
}
