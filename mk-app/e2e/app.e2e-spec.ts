import { MkAppPage } from './app.po';

describe('mk-app App', () => {
  let page: MkAppPage;

  beforeEach(() => {
    page = new MkAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
