import { ImdbVideoPlayerPage } from './app.po';

describe('imdb-video-player App', () => {
  let page: ImdbVideoPlayerPage;

  beforeEach(() => {
    page = new ImdbVideoPlayerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
