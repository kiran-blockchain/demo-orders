import { Address } from "@graphprotocol/graph-ts"

export const OPEN = 'open'
export const EXECUTED = 'executed'
export const CANCELLED = 'cancelled'

export function getAddressByNetwork(network: string): Address {
  //@TODO Change
  if (network == 'mainnet') {
    return Address.fromString('0xd412054cca18a61278ced6f674a526a6940ebd84')
  } if (network == 'rinkeby') {
   // return Address.fromString('0xd412054cca18a61278ced6f674a526a6940ebd84')
   //return Address.fromString('0xdbaae94d69743c1afae083f1d08fd44f337ad65a')
   return Address.fromString('0x4EEaeB737fc95cd291B6580207a3F9BF18731179')
  }

  throw 'No Address specified'
}