import { test, expect } from '../../helpers/fixtures.helper'

test.describe('calculator sanity tests', () => {
    test.beforeEach(async ({ page, calculatorWidget }) => {
        await page.goto('/')
        await calculatorWidget.clearField(true)
    })

    test('clear entry data test', async ({ calculatorWidget }) => {
        await calculatorWidget.sum(2, 2)
        await calculatorWidget.calculate()
        await calculatorWidget.sum(1)

        await calculatorWidget.clearField()

        await calculatorWidget.sum(2)
        await calculatorWidget.calculate()

        await expect(calculatorWidget.dataField).toHaveValue('6')
    })

    test('clear all data test', async ({ calculatorWidget }) => {
        await calculatorWidget.sum(2, 2)
        await calculatorWidget.calculate()
        await calculatorWidget.sum(1)

        await calculatorWidget.clearField(true)

        await calculatorWidget.sum(2)
        await calculatorWidget.calculate()

        await expect(calculatorWidget.dataField).not.toHaveValue('6')
        await expect(calculatorWidget.dataField).toHaveValue('2')
    })

    test('sum test', async ({ calculatorWidget }) => {
        await calculatorWidget.sum(2, 2)
        await calculatorWidget.calculate()

        await expect(calculatorWidget.dataField).toHaveValue('4')
    })

    test('subtract test', async ({ calculatorWidget }) => {
        await calculatorWidget.subtract(2, 2)
        await calculatorWidget.calculate()

        await expect(calculatorWidget.dataField).toHaveValue('0')
    })

    test('multiply test', async ({ calculatorWidget }) => {
        await calculatorWidget.multiply(2, 2)
        await calculatorWidget.calculate()

        await expect(calculatorWidget.dataField).toHaveValue('4')
    })

    test('divide test', async ({ calculatorWidget }) => {
        await calculatorWidget.divide(2, 2)
        await calculatorWidget.calculate()

        await expect(calculatorWidget.dataField).toHaveValue('1')
    })

    test('division by zero test', async ({ calculatorWidget }) => {
        await calculatorWidget.divide(2, 0)
        await calculatorWidget.calculate()

        await expect(calculatorWidget.dataField).toHaveValue('Not a Number')
    })
})
