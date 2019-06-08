import React from 'react';

const IndexPage = () => (
  <>
      hellow
  </>
);

export default IndexPage;

export const pageQuery = graphql`
    query IndexEN {
        allContentfulPage(filter: {node_locale: {eq: "en-US"}}) {
            edges {
                node {
                    linkOfPage
                    node_locale
                    nameOfPage
                    header {
                        headerTitle
                        headerSubTitle
                        headerBackgroundImage {
                            title
                            description
                            fluid {
                                base64
                            }
                        }
                        headerCallToActionTitle
                        headerCallToActionLink
                        headerShowCallToActionButton
                    }
                    section {
                        sectionTitle
                        sectionSubTitle
                        imageHeaderTextIconLinkCombo {
                            icon {
                                title
                                description
                                fixed(toFormat: WEBP) {
                                    tracedSVG
                                }
                            }
                            header
                            text {
                                text
                            }
                            link
                            image {
                                fluid {
                                    base64
                                }
                            }
                            imageLeft
                        }
                    }
                }
            }
        }
    }
`;