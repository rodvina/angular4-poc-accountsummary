import { CustomerpolicyPage } from './app.po';

describe('customerpolicy App', () => {
  let page: CustomerpolicyPage;

  beforeEach(() => {
    page = new CustomerpolicyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
