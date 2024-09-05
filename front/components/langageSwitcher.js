import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale } = router;

  const switchLanguage = (lang) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  return (
    <div>
      <button onClick={() => switchLanguage('ar')}>Arabic</button>
      <button onClick={() => switchLanguage('en')}>English</button>
    </div>
  );
}
