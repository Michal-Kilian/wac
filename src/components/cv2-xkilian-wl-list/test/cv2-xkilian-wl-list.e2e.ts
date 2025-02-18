import { newE2EPage } from '@stencil/core/testing';

describe('cv2-xkilian-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cv2-xkilian-wl-list></cv2-xkilian-wl-list>');

    const element = await page.find('cv2-xkilian-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
