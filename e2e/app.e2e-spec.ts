import { AngularPpPage } from './app.po';

describe('angular-pp App', function() {
  let page: AngularPpPage;

  beforeEach(() => {
    page = new AngularPpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
