import Editor from '@monaco-editor/react';
import { useEffect, useRef } from 'react';
import { useApp } from '../src/context/state';

import Split from 'react-split';

export default function EditorJS({ index, direction }) {
    const { ChangeTextEditor, ChangeTextConsole, Tabs, IndexTabActive } =
        useApp();
    const { textEditor, textConsole } = Tabs[IndexTabActive];
    const editorRef = useRef(null);
    function handleEditorDidMount(editor, monaco) {
        editor.setValue(textConsole);
        editorRef.current = editor;
    }
    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.setValue(textConsole);
        }
    }, [textConsole]);

    useEffect(() => {
        console.stdlog = console.log.bind(console);
        console.log = function () {
            console.logs.push(Array.from(arguments));
            ChangeTextConsole(value, IndexTabActive);
            const value = console.logs.map((log) => log.join(' ')).join('\n');
            editorRef.current.setValue(value);
        };
    }, [ChangeTextConsole, IndexTabActive]);

    return (
        <>
            <Split
                className={
                    direction
                        ? ' split min-h-screen w-screen bg-secondary '
                        : '  min-h-screen w-screen bg-secondary '
                }
                direction={direction ? 'horizontal' : 'vertical'}
            >
                <Editor
                    className="h-full "
                    theme="vs-dark"
                    defaultLanguage="javascript"
                    defaultValue={textEditor}
                    options={{
                        fontSize: 20,
                        padding: {
                            top: 20
                        },
                        minimap: {
                            enabled: false
                        },
                        automaticLayout: true
                    }}
                    onChange={async (value) => {
                        await ChangeTextEditor(index, value);
                        try {
                            console.logs = [];
                            const x = `try{${value}}catch(e){console.log(e)}`;
                            const script = document.createElement('script');
                            script.textContent = x;
                            script.type = 'text/javascript';
                            new Function(x)();
                            script.remove();
                        } catch (e) {
                            console.log(e);
                        }
                    }}
                />

                <Editor
                    options={{
                        readOnly: true,
                        fontSize: 20,
                        lineNumbers: 'off',
                        padding: {
                            top: 20
                        },
                        automaticLayout: true,
                        minimap: {
                            enabled: false
                        }
                    }}
                    theme="vs-dark"
                    defaultLanguage="javascript"
                    onMount={handleEditorDidMount}
                    onChange={async (value) => {
                        await ChangeTextConsole(index, value);
                    }}
                    defaultValue={textConsole}
                ></Editor>
            </Split>
        </>
    );
}
