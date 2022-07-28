Collection 1 - [Starlink PixelNauts](https://opensea.io/collection/starlink-pixelnauts)

Contract Address - 0x27cC171B16FdD2224E1f93eD7DccFcc6790cA4BF

graph init --from-contract 0x27cC171B16FdD2224E1f93eD7DccFcc6790cA4BF --network mainnet --abi ./ERC721.json

Schema -

```
type Account @entity {
  id: ID!
  address: Bytes!
  collectibles: [Collectible!] @derivedFrom(field: "owner")
}

type Collectible @entity {
  id: ID!
  tokenId: BigInt!
  creator: Account!
  owner: Account!
  collection: Collection!
  descriptorUri: String!

  #Timestamps
  modified: BigInt
  created: BigInt!
  removed: BigInt

  #metadata
  name: String
  description: String
  imageURL: String
}

type Collection @entity {
  id: ID!
  collectionName: String
  collectionSymbol: String
  collectionAddress: Bytes!
  collectibles: [Collectible!] @derivedFrom(field: "collection")
}

```

Collection 2 - [Party Degenerates](https://opensea.io/collection/partydegenerates)

Contract Address - 0x4BE3223f8708Ca6b30D1E8b8926cF281EC83E770

graph init --from-contract 0x4BE3223f8708Ca6b30D1E8b8926cF281EC83E770 --network mainnet --abi ./ERC721.json

Schema -

```
type Account @entity {
  id: ID!
  address: Bytes!
  collectibles: [Collectible!] @derivedFrom(field: "owner")
}

type Collectible @entity {
  id: ID!
  tokenId: BigInt!
  creator: Account!
  owner: Account!
  collection: Collection!
  descriptorUri: String!

  #Timestamps
  modified: BigInt
  created: BigInt!
  removed: BigInt

  #metadata
  name: String
  description: String
  imageURL: String
}

type Collection @entity {
  id: ID!
  collectionName: String
  collectionSymbol: String
  collectionAddress: Bytes!
  collectibles: [Collectible!] @derivedFrom(field: "collection")
}

```

Collection 3 - [Proof Of Beauty](https://opensea.io/collection/proof-of-beauty)

Contract Address - 0xE18a32192ED95b0FE9D70D19e5025f103475d7BA

graph init --from-contract 0xE18a32192ED95b0FE9D70D19e5025f103475d7BA --network mainnet --abi ./ERC1155.json

Schema -

```
type Account @entity {
  id: ID!
  address: Bytes!
  collectibles: [Collectible!] @derivedFrom(field: "owner")
}

type Collectible @entity {
  id: ID!
  tokenId: BigInt!
  creator: Account!
  owner: Account!
  collection: Collection!
  descriptorUri: String!

  #Timestamps
  modified: BigInt
  created: BigInt!
  removed: BigInt

  #metadata
  name: String
  description: String
  imageURL: String
}

type Collection @entity {
  id: ID!
  collectionName: String
  collectionSymbol: String
  collectionAddress: Bytes!
  collectibles: [Collectible!] @derivedFrom(field: "collection")
}

```
