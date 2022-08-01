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
    let nameResult = contract.try_baseMetadataURI();
    if (!nameResult.reverted) {
      collection.collectionName = nameResult.value;
    }

    let symbolResult = contract.try_baseMetadataURI();
    if (!symbolResult.reverted) {
      collection.collectionSymbol = symbolResult.value;
    }

    let balanceResult = contract.try_balanceOf(address, BigInt.fromString("1"));
    if (!balanceResult.reverted) {
      collection.collectionBalance = balanceResult.value;
    }

    collection.save();
  }
  return collection;
}

export function getOrCreateCollectible(
  collectionAddress: Bytes,
  collectionId: string,
  tokenId: BigInt,
  creatorId: string,
  createdTimestamp: BigInt
): Collectible {
  let collectibleId = collectionAddress
    .toHexString()
    .concat("-")
    .concat(tokenId.toHexString());
  let collectible = Collectible.load(collectibleId);
  if (!collectible) {
    collectible = new Collectible(collectibleId);
    collectible.tokenId = tokenId;
    collectible.collection = collectionId;
    collectible.creator = creatorId;
    collectible.owner = creatorId;
    collectible.created = createdTimestamp;
    collectible.descriptorUri = ProofOfBeauty.bind(
      Address.fromBytes(collectionAddress)
    ).contractURI();
    collectible.save();
  }
  return collectible;
}
