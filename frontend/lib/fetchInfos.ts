import { StacksNetwork } from '@stacks/network'
import { callReadOnlyFunction, cvToValue, standardPrincipalCV } from '@stacks/transactions'
import { contractOwnerAddress, microstacksPerSTX } from './constants'

export interface IUserInfo {
  stxBalance: number
}

export async function fetchUserInfos(network: StacksNetwork, userAddress: string): Promise<IUserInfo> {
  const stxBalanceResponse = await callReadOnlyFunction({
    contractAddress: contractOwnerAddress,
    contractName: 'dapp',
    functionName: 'get-stx-balance',
    functionArgs: [standardPrincipalCV(userAddress)],
    network,
    senderAddress: userAddress,
  })

  // stxBalanceResponse is a uint clarity value
  // cvToValue(stxBalanceResponse) is a bigint, balance in microstacks

  const microstacks: bigint = cvToValue(stxBalanceResponse).value
  const stxBalance = Number(microstacks) / microstacksPerSTX

  return {
    stxBalance,
  }
}
