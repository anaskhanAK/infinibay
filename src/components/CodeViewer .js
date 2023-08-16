import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-monokai';

const CodeViewer = ({ code }) => {
    return (
        <AceEditor
            mode="javascript"
            theme="monokai"
            value={code}
            readOnly={true}
            editorProps={{ $blockScrolling: Infinity }}
            style={{ width: '100%', height: '300px' }}
        />
    );
};

export default CodeViewer;
