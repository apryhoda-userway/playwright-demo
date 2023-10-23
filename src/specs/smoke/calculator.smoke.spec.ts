import { test, expect } from '../../helpers/fixtures.helper';

test.describe('calculator smoke tests', () => {
    test('proceed through the main flow test', async ({
        calculatorWidget,
        page,
    }) => {
        await page.goto('/');
        await calculatorWidget.clearField(true);

        await calculatorWidget.sum(2, 2);
        await calculatorWidget.calculate();

        await expect(calculatorWidget.dataField).toHaveValue('4');

        await calculatorWidget.sum(6);
        await calculatorWidget.sum(0);

        await expect(calculatorWidget.dataField).toHaveValue('10');

        await calculatorWidget.multiply(2);
        await calculatorWidget.calculate();

        await expect(calculatorWidget.dataField).toHaveValue('20');

        await calculatorWidget.divide(2, 2);
        await calculatorWidget.clearField();
        await calculatorWidget.enterNumber(1);
        await calculatorWidget.calculate();

        await expect(calculatorWidget.dataField).toHaveValue('10');

        await calculatorWidget.multiply(0);
        await calculatorWidget.calculate();

        await expect(calculatorWidget.dataField).toHaveValue('0');

        await calculatorWidget.clearField(true);

        await expect(calculatorWidget.dataField).toBeEmpty();
    });
});
