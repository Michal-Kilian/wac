import { newSpecPage } from '@stencil/core/testing';
import { Cv2XkilianAmbulanceWlApp } from '../cv2-xkilian-ambulance-wl-app';

describe('<pfx>-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [Cv2XkilianAmbulanceWlApp],
        html: `<cv2-xkilian-ambulance-wl-app base-path="/"></cv2-xkilian-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("cv2-xkilian-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [Cv2XkilianAmbulanceWlApp],
        html: `<cv2-xkilian-ambulance-wl-app base-path="/ambulance-wl/"></cv2-xkilian-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("cv2-xkilian-wl-list");
  });
});
