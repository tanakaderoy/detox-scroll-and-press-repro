describe('Scroll And Press Repro', () => {
  const scrollByIDAndPressByText = id => async text => {
    await waitFor(element(by.text(text)))
      .toBeVisible()
      .whileElement(by.id(id))
      .scroll(100, 'down');
    await element(by.text(text)).tap();
  };

  beforeAll(async () => {
    await device.launchApp();
  });

  const reloadApp = async () => {
    await device.launchApp({newInstance: true});
  };

  beforeEach(async () => {
    await reloadApp();
  });

  it('should scroll to number 19 and increase count', async () => {
    for (let i = 0; i < 50; i++) {
      await expect(element(by.id('count'))).toBeVisible();
      await expect(element(by.id('count'))).toHaveText('0');
      await scrollByIDAndPressByText('Button_List')('Button #19');
      await expect(element(by.id('count'))).toHaveText('1');
      await reloadApp();
    }
  });
});
