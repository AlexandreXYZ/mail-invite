// components/HtmlEditor.js
import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-monokai';


export default function HtmlEditor({ value, onChange }: any) {


    return (
        <div className='flex gap-4 justify-center w-full' >
            <AceEditor
                mode="html"
                theme="light"
                value={value}
                onChange={onChange}
                name="html_editor"
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 4,
                }}
            />
            <div className='w-1/2 border-black border'>
                <h2>Preview</h2>
                <div dangerouslySetInnerHTML={{ __html: `${value}` }} />
            </div>
        </div>
    );
}
