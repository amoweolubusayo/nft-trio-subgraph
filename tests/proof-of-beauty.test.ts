import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ProofOfBeautyApprovalForAll } from "../generated/schema"
import { ProofOfBeautyApprovalForAll as ProofOfBeautyApprovalForAllEvent } from "../generated/ProofOfBeauty/ProofOfBeauty"
import { handleProofOfBeautyApprovalForAll } from "../src/proof-of-beauty"
import { createProofOfBeautyApprovalForAllEvent } from "./proof-of-beauty-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _owner = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _operator = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _approved = "boolean Not implemented"
    let newProofOfBeautyApprovalForAllEvent = createProofOfBeautyApprovalForAllEvent(
      _owner,
      _operator,
      _approved
    )
    handleProofOfBeautyApprovalForAll(newProofOfBeautyApprovalForAllEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ProofOfBeautyApprovalForAll created and stored", () => {
    assert.entityCount("ProofOfBeautyApprovalForAll", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ProofOfBeautyApprovalForAll",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_owner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ProofOfBeautyApprovalForAll",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_operator",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ProofOfBeautyApprovalForAll",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_approved",
      "boolean Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
