import { Locator, Page } from '@playwright/test'

export class CalculatorWidget {
    readonly widgetContainer: Locator
    readonly dataField: Locator
    readonly clearButton: Locator
    readonly addOperatorButton: Locator
    readonly subtractOperatorButton: Locator
    readonly multiplyOperatorButton: Locator
    readonly devideOperatorButton: Locator
    readonly calculateOperatorButton: Locator

    constructor(public page: Page) {
        this.widgetContainer = page.getByTestId('calculator')
        this.dataField = this.widgetContainer.getByTestId('display')
        this.clearButton = this.widgetContainer.getByTestId('clearButton')
        this.addOperatorButton = this.widgetContainer.getByTestId('add')
        this.subtractOperatorButton =
            this.widgetContainer.getByTestId('subtract')
        this.multiplyOperatorButton =
            this.widgetContainer.getByTestId('multiply')
        this.devideOperatorButton = this.widgetContainer.getByTestId('divide')
        this.calculateOperatorButton =
            this.widgetContainer.getByTestId('calculate')
    }

    /**
     * Allows to enter the value by choosing numbers in the container.
     *
     * -------
     * await calculatorWidget.enterNumber(20); // we will see value '20' in the data field
     * -------
     *
     * @param number
     * @returns
     */
    async enterNumber(number: number): Promise<CalculatorWidget> {
        number
            .toString()
            .split('')
            .forEach(
                async (el) =>
                    await this.widgetContainer
                        .locator(`"${el}"`)
                        .click({ force: true })
            )

        return this
    }

    /**
     * Allows to sum the values in the different way.
     *
     * ------
     * await calculatorWidget.enterValue(2);
     * await calculatorWidget.sum(); // just clicks on "+" operator
     * await calculatorWidget.enterValue(2);
     * await calculatorWidget.calculate(); // = 4
     * ------
     * await calculatorWidget.enterValue(2);
     * await calculatorWidget.sum(2); // works like "+2"
     * await calculatorWidget.calculate(); // = 4
     * ------
     * await calculatorWidget.sum(2, 2); // works like "2+2"
     * await calculatorWidget.calculate(); // = 4
     * ------
     *
     * @param args
     * @returns
     */
    async sum(...args: number[]): Promise<CalculatorWidget> {
        if (args.length) {
            for (let arg of args) {
                await this.addOperatorButton.click({ force: true })
                await this.enterNumber(arg)
            }
        } else if (!args.length) {
            await this.addOperatorButton.click({ force: true })
        }

        return this
    }

    /**
     * Allows to subtract the values in the different way.
     *
     * ------
     * await calculatorWidget.enterValue(2);
     * await calculatorWidget.subtract(); // just clicks on "-" operator
     * await calculatorWidget.enterValue(2);
     * await calculatorWidget.calculate(); // = 0
     * ------
     * await calculatorWidget.enterValue(2);
     * await calculatorWidget.subtract(2); // works like "-2"
     * await calculatorWidget.calculate(); // = 0
     * ------
     * await calculatorWidget.subtract(2, 2); // works like "2-2"
     * await calculatorWidget.calculate(); // = 0
     * ------
     *
     * @param args
     * @returns
     */
    async subtract(...args: number[]): Promise<CalculatorWidget> {
        if (args.length) {
            for (let arg of args) {
                await this.subtractOperatorButton.click({ force: true })
                await this.enterNumber(arg)
            }
        } else if (!args.length) {
            await this.subtractOperatorButton.click({ force: true })
        }

        return this
    }

    /**
     * Allows to multiply the values in the different way.
     *
     * ------
     * await calculatorWidget.enterValue(2);
     * await calculatorWidget.multiply(); // just clicks on "*" operator
     * await calculatorWidget.enterValue(2);
     * await calculatorWidget.calculate(); // = 4
     * ------
     * await calculatorWidget.enterValue(2);
     * await calculatorWidget.multiply(2); // works like "*2"
     * await calculatorWidget.calculate(); // = 4
     * ------
     * await calculatorWidget.multiply(2, 2); // works like "2*2"
     * await calculatorWidget.calculate(); // = 4
     * ------
     *
     * @param args
     * @returns
     */
    async multiply(...args: number[]): Promise<CalculatorWidget> {
        if (args.length) {
            for (let arg of args) {
                await this.multiplyOperatorButton.click({ force: true })
                await this.enterNumber(arg)
            }
        } else if (!args.length) {
            await this.multiplyOperatorButton.click({ force: true })
        }

        return this
    }

    /**
     * Allows to devide the values in the different way.
     *
     * ------
     * await calculatorWidget.enterValue(2);
     * await calculatorWidget.divide(); // just clicks on "/" operator
     * await calculatorWidget.enterValue(2);
     * await calculatorWidget.calculate(); // = 1
     * ------
     * await calculatorWidget.enterValue(2);
     * await calculatorWidget.divide(2); // works like "/2"
     * await calculatorWidget.calculate(); // = 1
     * ------
     * await calculatorWidget.divide(2, 2); // works like "2/2"
     * await calculatorWidget.calculate(); // = 1
     * ------
     *
     * @param args
     * @returns
     */
    async divide(...args: number[]): Promise<CalculatorWidget> {
        if (args.length) {
            for (let arg of args) {
                await this.devideOperatorButton.click({ force: true })
                await this.enterNumber(arg)
            }
        } else if (!args.length) {
            await this.devideOperatorButton.click({ force: true })
        }

        return this
    }

    /**
     * Allows to calculate the equation by clicking on "=" operator.
     *
     * ------
     * await calculatorWidget.sum(2, 2);
     * await calculatorWidget.calculate(); // = 4
     * ------
     *
     * @returns
     */
    async calculate(): Promise<CalculatorWidget> {
        await this.calculateOperatorButton.click({ force: true })

        return this
    }

    /**
     * Allows to clear the field in in the different ways: Clear Entry(CE) and Clear All(CA).
     *
     * ------
     * await calculatorWidget.sum(2, 2);
     * await calculatorWidget.clearField(); // CE: the second entry "2" was deleted, so we have "2+ "
     * await calculatorWidget.sum(1); // = 3
     * ------
     * await calculatorWidget.sum(2, 2);
     * await calculatorWidget.clearField(true); // AC: everything was deleted
     * await calculatorWidget.sum(1); // = 1
     * ------
     *
     * @param clearAll
     * @returns
     */
    async clearField(clearAll?: boolean): Promise<CalculatorWidget> {
        clearAll
            ? await this.clearButton.click({ force: true, clickCount: 2 })
            : await this.clearButton.click({ force: true })

        return this
    }
}
