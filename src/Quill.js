
import ReactQuill from "react-quill";
import {useState} from "react";
import 'react-quill/dist/quill.snow.css';

function Quill() {
    const modules = {
        toolbar: [
            //[{ 'font': [] }],
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
            <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                modules={modules}
                style={{height: "600px", width:" 800px"}}
            />
            {value}
        </>
    )
}

export default Quill;
