import { WebTemplatePage } from './app.po';

describe('web-template App', function() {
  let page: WebTemplatePage;

  beforeEach(() => {
    page = new WebTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
