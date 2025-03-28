import { newE2EPage } from '@stencil/core/testing';

describe('cv2-xkilian-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cv2-xkilian-ambulance-wl-app></cv2-xkilian-ambulance-wl-app>');

    const element = await page.find('cv2-xkilian-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
