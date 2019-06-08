import React from 'react';
import { graphql } from 'gatsby';
import IndexLayout from '../Layout/IndexLayout';

const IndexPage = ({ data }) => {
  return (
    <IndexLayout pageData={data.allContentfulPage.edges[0].node}/>
  );
};

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
                                fixed(toFormat: NO_CHANGE) {
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