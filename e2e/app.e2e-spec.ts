import { DevisEnLignePage } from './app.po';

describe('devis-en-ligne App', () => {
  let page: DevisEnLignePage;

  beforeEach(() => {
    page = new DevisEnLignePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
