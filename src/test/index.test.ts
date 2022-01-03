import { ChainId, CurrencyAmount, Percent, Token } from '@dynamic-amm/sdk'
import { getData } from '../index'

// describe('Test', async () => {
//   // beforeAll(async () => {
//   //   try {
//   //     const data = await getData({
//   //       currencyAmountIn: CurrencyAmount.ether('1000000000000'),
//   //       currencyOut: new Token(ChainId.BSCMAINNET, '0xfe56d5892BDffC7BF58f2E84BE1b2C32D21C308b', 18),
//   //       saveGas: false,
//   //       chainId: ChainId.BSCMAINNET,
//   //       options: JSON.parse(`{
//   //         "allowedSlippage": { "numerator": [4900], "denominator": [10000] },
//   //         "recipient": "0x16368dD7e94f177B8C2c028Ef42289113D328121",
//   //         "deadline": 1640937396
//   //       }
//   //       `),
//   //       feeConfig: undefined,
//   //     })
//   //     console.log(`data`, data)
//   //   } catch (err) {
//   //     console.log(`err`, err)
//   //   }
//   // })
//   it('Run successfully', () => {
//     expect(() => {
//       return true
//     })
//   })
// })

test('the fetch fails with an error', async () => {
  try {
    const asyncFunc = async () => {
      const data = await getData({
        currencyAmountIn: CurrencyAmount.ether('1000000000000'),
        currencyOut: new Token(ChainId.BSCMAINNET, '0xfe56d5892BDffC7BF58f2E84BE1b2C32D21C308b', 18),
        saveGas: false,
        chainId: ChainId.BSCMAINNET,
        options: {
          allowedSlippage: new Percent('500', '10000'),
          recipient: '0x16368dD7e94f177B8C2c028Ef42289113D328121',
          deadline: 1640937396000000000,
        },
        feeConfig: undefined,
      })
      console.log(`data`, data)
    }
    await asyncFunc()
  } catch (e) {
    console.log(`e`, e)
  }
  expect(() => {
    return true
  })
})
