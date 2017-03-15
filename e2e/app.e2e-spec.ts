import { Cs14ChatPage } from './app.po';

describe('cs14-chat App', () => {
  let page: Cs14ChatPage;

  beforeEach(() => {
    page = new Cs14ChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
