export interface FeeConfig {
  chargeFeeBy: 'tokenIn' | 'tokenOut'
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
