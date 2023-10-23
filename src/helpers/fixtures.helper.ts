import { test as base } from '@playwright/test'
import { CalculatorWidget } from '../widgets/calculator.widget'

type pages = {
    calculatorWidget: CalculatorWidget
}

const testPages = base.extend<pages>({
    calculatorWidget: async ({ page }, use) => {
        await use(new CalculatorWidget(page))
    },
})

export const test = testPages
export const expect = testPages.expect
