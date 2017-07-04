import { MkHangmanPage } from './app.po';

describe('mk-hangman App', () => {
  let page: MkHangmanPage;

  beforeEach(() => {
    page = new MkHangmanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
