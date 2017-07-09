import { CompetitionFisherAppPage } from './app.po';

describe('competition-fisher-app App', () => {
  let page: CompetitionFisherAppPage;

  beforeEach(() => {
    page = new CompetitionFisherAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
