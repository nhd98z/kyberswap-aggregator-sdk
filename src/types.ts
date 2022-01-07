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
  /**
   * The amount of wei to send in hex.
   */
  value: string
}

export interface TradeConfig {
  /**
   * How much the execution price is allowed to move unfavorably from the trade execution price.
   * Unit: bps
   */
  allowedSlippage: number
  /**
   * The account that should receive the output of the swap.
   */
  recipient: string
  /**
   * When the transaction expires.
   * This is an alternative to specifying the ttl, for when you do not want to use local time.
   */
  deadline: number
  /**
   * Save gas or receive best output amount.
   */
  saveGas: boolean
}

export interface GetSwapParametersParams {
  chainId: number
  currencyInAddress: string
  currencyInDecimal: number
  amountIn: string
  currencyOutAddress: string
  currencyOutDecimal: number
  tradeConfig: TradeConfig
  feeConfig: FeeConfig | undefined
}

export interface GetSwapParametersCustomTradeRouteParams extends GetSwapParametersParams {
  customTradeRoute: string | undefined
}
