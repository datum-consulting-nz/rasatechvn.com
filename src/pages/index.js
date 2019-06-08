import React from 'react';
import { graphql, navigate, withPrefix } from 'gatsby';
import { getUserLangKey } from 'ptz-i18n';

class RedirectIndex extends React.PureComponent {
  constructor(args) {
    super(args);

    // Skip build, Browsers only
    if (typeof window !== 'undefined') {
      const { langs, defaultLangKey } = args.data.site.siteMetadata;
      const langKey = getUserLangKey(langs, defaultLangKey);

      // Check if previous chosen 'lang'
      const userLang = localStorage.getItem('lang');
      // If none user chosen 'lang', use default
      if (!userLang) {
        localStorage.setItem('lang', defaultLangKey);
      }

      // Prefer
      const homeUrl = withPrefix(`/${userLang || langKey}`);

      navigate(homeUrl);
    }
  }

  render() {
    // It's recommended to add your SEO solution in here for bots
    return (<div/>);
  }
}

export default RedirectIndex;

export const pageQuery = graphql`
    query IndexQuery {
        site{
            siteMetadata{
                defaultLangKey
                langs
            }
        }
    }
`;