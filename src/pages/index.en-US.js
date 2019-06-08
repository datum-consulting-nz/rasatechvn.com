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
                                src
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
                                file {
                                    url
                                }
                            }
                            header
                            text {
                                text
                            }
                            link
                            image {
                                fluid {
                                    src
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