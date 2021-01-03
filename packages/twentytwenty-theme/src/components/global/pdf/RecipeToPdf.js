import {styled, connect, decode} from "frontity";
import React, {useEffect} from "react";
import {PDFViewer, Text, View, Document, StyleSheet} from '@react-pdf/renderer';
import ReactDOM from 'react-dom';

const RecipeToPdf = ({state, actions, libraries}) => {
    // Get information about the current URL.
    const data = state.source.get(state.router.link);
    // Get the data of the post.
    const page = state.source[data.type][data.id];

    // Get the html2react component.
    const Html2React = libraries.html2react.Component;


    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        }
    });




    /**
     * Once the post has loaded in the DOM, prefetch both the
     * home posts and the list component so if the user visits
     * the home page, everything is ready and it loads instantly.
     */
    useEffect(() => {
        actions.source.fetch("/");
    }, []);

    // Load the post, but only if the data is ready.
    return data.isReady ? (

        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>Section #1</Text>
                </View>
                <View style={styles.section}>
                    <Text>Section #2</Text>
                </View>
            </Page>
        </Document>

    ): null;
};

export default connect(RecipeToPdf);

const maxWidths = {
    thin: "58rem",
    small: "80rem",
    medium: "100rem",
};

const getMaxWidth = (props) => maxWidths[props.size] || maxWidths["medium"];


const SectionContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: calc(100% - 4rem);
  max-width: ${getMaxWidth};

  @media (min-width: 700px) {
    width: calc(100% - 8rem);
  }
`;

const PostInner = styled(SectionContainer)`
  padding-top: 5rem;
  @media (min-width: 700px) {
    padding-top: 8rem;
  }
`;

const EntryContent = styled.div`
  line-height: 1.5;
  letter-spacing: normal;
  @media (min-width: 700px) {
    font-size: 2.1rem;
  }

  > *:first-of-type {
    margin-top: 0;
  }

  figure {
    margin: 2em 0;
    max-width: 100%;
  }
`;
