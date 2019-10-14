import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let service: LanguageService;

  const setBrowerLanguage = (lang: string) => {
    Object.defineProperty(navigator, 'language', {
      get: () => lang,
    });
  };

  // このafterEachは必要かどうかちょいわからん
  afterEach(() => {
    // 日本語環境に戻す
    setBrowerLanguage('ja');
  });

  it('ブラウザ言語が日本語の時「ja」を返す', () => {
    setBrowerLanguage('ja');
    service = new LanguageService();

    expect(service.code).toBe('ja');
  });

  it('ブラウザ言語が英語の時「en」を返す', () => {
    setBrowerLanguage('en');
    service = new LanguageService();

    expect(service.code).toBe('en');
  });

  it('ブラウザ言語が日本語、英語以外の時「en」を返す', () => {
    setBrowerLanguage('ch');
    service = new LanguageService();

    expect(service.code).toBe('en');
  });
});
