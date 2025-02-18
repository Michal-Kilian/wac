import { newSpecPage } from '@stencil/core/testing';
import { Cv2XkilianWlList } from '../cv2-xkilian-wl-list';

describe('cv2-xkilian-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Cv2XkilianWlList],
      html: `<cv2-xkilian-wl-list></cv2-xkilian-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <cv2-xkilian-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cv2-xkilian-wl-list>
    `);
  });
});
