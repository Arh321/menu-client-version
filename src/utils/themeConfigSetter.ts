interface ParsedThemeConfig {
  themeConfigs?: {
    primaryColor?: string;
    secondaryColor?: string;
    backgroundColor?: string;
    [key: string]: string | undefined;
  };
  generalConfigs?: {
    logo?: string;
    vat?: string;
    [key: string]: string | undefined;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export const applyThemeConfig = (
  parsedConfig: ParsedThemeConfig,
  logoSetter: (logo: string) => void,
  vatSetter: (vat: string) => void
) => {
  // 🎨 ۱. ست کردن متغیرهای CSS
  if (parsedConfig.themeConfigs) {
    Object.entries(parsedConfig.themeConfigs).forEach(([key, value]) => {
      if (value) {
        document.documentElement.style.setProperty(`--${key}`, value);
      }
    });
  }

  // 🧾 ۲. ست کردن لوگو و VAT توی Redux
  if (parsedConfig.generalConfigs?.image_url) {
    logoSetter(parsedConfig.generalConfigs.image_url);
  }

  if (parsedConfig.generalConfigs?.vat) {
    vatSetter(parsedConfig.generalConfigs.vat);
  }

  // ⚠️ ۳. هر آپدیت اضافه‌ای اینجا اضافه میشه
};
