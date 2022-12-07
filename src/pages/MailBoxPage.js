import { Helmet } from 'react-helmet-async';

import { useTheme } from '@mui/material/styles';
import {Grid, Container, Typography, Button} from '@mui/material';

import {useRef, useState} from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import Iconify from "../components/iconify";

import {EditorState, convertToRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import styled from 'styled-components';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import Tinymce from "../Tinymce";

const MyBlock = styled.div`
    .wrapper-class{
        width: 100%;
        margin: 0 auto;
        margin-bottom: 4rem;
    }
  .editor {
    height: 500px !important;
    width: 100% !important;
    border: 1px solid #f1f1f1 !important;
    padding: 5px !important;
    border-radius: 2px !important;
  }
`;

export default function MailBoxPage() {
  const theme = useTheme();

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            [{ 'align': [] }, { 'color': [] }, { 'background': [] }],
            ['clean']
        ],
    }

    const [value, setValue] = useState('');


    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    };


    const editorRef = useRef(null);

    return (
    <>
      <Helmet>
        <title> Mail | Minimal UI </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          1. Quill
        </Typography>

        <Grid container spacing={10}>
            <Grid item xs={12}>
                <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={setValue}
                    modules={modules}
                    style={{height: "600px", width: "100%"}}
                />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
                    Send Mail
                </Button>
            </Grid>
            <Grid item xs={12}>
                {value}
            </Grid>
        </Grid>

        <Typography variant="h4" sx={{ mb: 5 }}>
          2. DraftJs
        </Typography>
        <Grid container spacing={10}>
          <Grid item xs={12}>
              <MyBlock>
                  <Editor
                      wrapperClassName="wrapper-class"
                      editorClassName="editor"
                      toolbarClassName="toolbar-class"
                      toolbar={{
                          list: { inDropdown: true },
                          textAlign: { inDropdown: true },
                          link: { inDropdown: true },
                          history: { inDropdown: false },
                      }}
                      placeholder=""
                      editorState={editorState}
                      onEditorStateChange={onEditorStateChange}
                  />
                  {draftToHtml(convertToRaw(editorState.getCurrentContent()))}
              </MyBlock>
          </Grid>
        </Grid>
        <Typography variant="h4" sx={{ mb: 5 }}>
          3. Tinymce
        </Typography>
        <Grid container spacing={10}>
          <Grid item xs={12}>
              <Tinymce />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
