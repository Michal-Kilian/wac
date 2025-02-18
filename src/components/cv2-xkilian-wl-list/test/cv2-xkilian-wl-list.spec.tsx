import { newSpecPage } from '@stencil/core/testing';
import { Cv2XkilianWlList } from '../cv2-xkilian-wl-list';

describe('cv2-xkilian-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Cv2XkilianWlList],
      html: `<cv2-xkilian-wl-list></cv2-xkilian-wl-list>`,
    });
    const wlList = page.rootInstance as Cv2XkilianWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
