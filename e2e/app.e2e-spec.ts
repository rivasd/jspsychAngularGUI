import { JspsychAngularGUIPage } from './app.po';

describe('jspsych-angular-gui App', function() {
  let page: JspsychAngularGUIPage;

  beforeEach(() => {
    page = new JspsychAngularGUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
