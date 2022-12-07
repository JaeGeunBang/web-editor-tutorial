
import {useEffect, useRef, useState} from "react";
import {EditorState, convertToRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import styled from 'styled-components';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';

const MyBlock = styled.div`
    .wrapper-class{
        width: 800px;
        margin: 0 auto;
        margin-bottom: 4rem;
    }
  .editor {
    height: 500px !important;
    width: 800px !important;
    border: 1px solid #f1f1f1 !important;
    padding: 5px !important;
    border-radius: 2px !important;
  }
`;

function DraftJs() {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    };

    return (
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
    );
}

export default DraftJs;
