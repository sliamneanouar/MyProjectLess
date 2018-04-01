import { MyProjectLessPage } from './app.po';

describe('my-project-less App', function() {
  let page: MyProjectLessPage;

  beforeEach(() => {
    page = new MyProjectLessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
