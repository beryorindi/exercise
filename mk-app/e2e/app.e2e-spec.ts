import { MkAppPage } from './app.po';

describe('mk-app App', () => {
  let page: MkAppPage;

  beforeEach(() => {
    page = new MkAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
