import { MadPOSPage } from './app.po';

describe('mad-pos App', () => {
  let page: MadPOSPage;

  beforeEach(() => {
    page = new MadPOSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
