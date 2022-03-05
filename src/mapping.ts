import {
  LogClose as LogCloseEvent,
  LogCreate as LogCreateEvent
} from "../generated/Contract/Contract"
import { LogClose, LogCreate } from "../generated/schema"

export function handleLogClose(event: LogCloseEvent): void {
  let entity = new LogClose(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenId = event.params.tokenId
  entity.owner = event.params.owner
  entity.amount0 = event.params.amount0
  entity.amount1 = event.params.amount1
  entity.fee0 = event.params.fee0
  entity.fee1 = event.params.fee1
  entity.token0to1 = event.params.token0to1
  entity.save()
}

export function handleLogCreate(event: LogCreateEvent): void {
  let entity = new LogCreate(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenId = event.params.tokenId
  entity.owner = event.params.owner
  entity.liquidity = event.params.liquidity
  entity.amount = event.params.amount
  entity.token0to1 = event.params.token0to1
  entity.save()
}