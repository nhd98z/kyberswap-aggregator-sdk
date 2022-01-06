import { ChainId, Currency, CurrencyAmount, TradeOptions, TradeOptionsDeadline } from '@dynamic-amm/sdk'

export interface FeeConfig {
  chargeFeeBy: 'currency_in' | 'currency_out'
  feeReceiver: string
  isInBps: boolean
  feeAmount: string
}

/**
 * The parameters to use in the call to the DmmExchange Router to execute a trade.
 */
export interface SwapV2Parameters {
  /**
   * The method to call on the DmmExchange Router.
   */
  methodNames: string[]
  /**
   * The arguments to pass to the method, all hex encoded.
   */
  args: Array<string | Array<string | string[]>>
  // args: any[]
  /**
   * The amount of wei to send in hex.
   */
  value: string
}

export interface GetSwapParametersParams {
  currencyAmountIn: CurrencyAmount | undefined
  currencyOut: Currency | undefined
  saveGas: boolean
  chainId: ChainId | undefined
  options: TradeOptions | TradeOptionsDeadline
  feeConfig: FeeConfig | undefined
  customTradeRoute: string | undefined
}
