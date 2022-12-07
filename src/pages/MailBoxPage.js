import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import {Grid, Container, Typography, Button} from '@mui/material';

import {useState} from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import Iconify from "../components/iconify";

// ----------------------------------------------------------------------

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


    return (
    <>
      <Helmet>
        <title> Mail | Minimal UI </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome MailBox
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
      </Container>
    </>
  );
}
