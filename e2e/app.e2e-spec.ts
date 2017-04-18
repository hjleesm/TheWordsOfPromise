import { TheWordsOfPromisePage } from './app.po';

describe('the-words-of-promise App', function() {
  let page: TheWordsOfPromisePage;

  beforeEach(() => {
    page = new TheWordsOfPromisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
