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
    collection.address = address;

    let contract = ProofOfBeauty.bind(address);
    let name = "ProofOfBeauty";
    collection.name = name;
    let symbol = "POB";
    collection.symbol = symbol;
    collection.address = address;

    collection.save();
  }
  return collection;
}
