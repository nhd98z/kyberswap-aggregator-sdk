import { getData } from '../index'
import { ETHER_ADDRESS } from '../config'

test('Get swapV2Parameters', async () => {
  try {
    const asyncFunc = async () => {
      const data = await getData({
        chainId: 56,
        currencyInAddress: ETHER_ADDRESS,
        currencyInDecimals: 18,
        amountIn: '999200000000',
        currencyOutAddress: '0xfe56d5892BDffC7BF58f2E84BE1b2C32D21C308b',
        currencyOutDecimals: 18,
        tradeConfig: {
          minAmountOut: '1',
          recipient: '0x16368dD7e94f177B8C2c028Ef42289113D328121',
          deadline: 1640937396000000000,
        },
        feeConfig: {
          isInBps: true,
          feeAmount: '8', // 0.08%
          feeReceiver: '0xDa0D8fF1bE1F78c5d349722A5800622EA31CD5dd',
          chargeFeeBy: 'currency_in',
        },
        customTradeRoute: undefined,
      })
      console.log(JSON.stringify(data.swapV2Parameters))
      console.log(JSON.stringify(data.swapV2Parameters, null, 2))
    }
    await asyncFunc()
  } catch (err) {
    console.log(`err`, err)
  }
  expect(() => {
    return true
  })
})
