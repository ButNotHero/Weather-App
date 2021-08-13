import { createI18n } from 'vue-i18n';
import ru from '@/lang/ru-RU';
import en from '@/lang/en-US';

const messages = {
  ru,
  en,
};

const i18n = createI18n({
  locale: 'en',
  messages,
});

export default i18n;
