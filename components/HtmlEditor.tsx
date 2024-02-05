// components/HtmlEditor.js
import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-monokai';


export default function HtmlEditor({ value, onChange }: any) {

    return (
        <div className='flex gap-4 justify-center w-full flex-col' >
            <div className='h-[200px] resize-y overflow-auto pb-2'>
                <AceEditor
                    mode="html"
                    theme="light"
                    width='100%'
                    height='100%'
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
            </div>
            <div>
                <h2>Preview</h2>
                <div className='border-black border'>
                    <div dangerouslySetInnerHTML={{ __html: `${value}` }} />
                </div>
            </div>
        </div>
    );
}
