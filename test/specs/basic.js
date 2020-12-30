describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io')
        expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
    })

    it('should demonstrate the addValue command', () => {
        browser.url('https://webdriver.io')
        let input = $('#search_input_react')
        input.addValue('test')
        browser.pause(2000);
        input.addValue(123);
        browser.pause(2000);

        value = input.getValue()
        assert(value === 'test123') // true
    })

    it('should demonstrate the addValue command', () => {
        browser.url('https://webdriver.io')
}) 

