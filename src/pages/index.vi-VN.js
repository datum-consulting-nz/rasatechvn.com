import React from 'react';

const IndexPage = () => (
  <>
    Xin chao
  </>
);

export default IndexPage;

export const pageQuery = graphql`
    query IndexVI {
        allContentfulPage(filter: {node_locale: {eq: "vi-VN"}}) {
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