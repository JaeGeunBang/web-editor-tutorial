
import ReactQuill from "react-quill";
import {useState} from "react";
import 'react-quill/dist/quill.snow.css';

function Quill() {
    const [value, setValue] = useState('');

    return (
        <>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
            {value}
        </>
    )
}

export default Quill;
