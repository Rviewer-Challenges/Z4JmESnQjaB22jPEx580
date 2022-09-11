import Editor from '@monaco-editor/react';
import transpilar from '../../components/functions/transpilar';
import { useState, useEffect, useRef } from 'react';
import Split from 'react-split';
console.logs = [];

export default function JSeint() {
    const [TextConsole, setTextConsole] = useState('');

    const editorRef = useRef(null);
    const handleEditorDidMount = (editor, monaco) => {
        editorRef.current = editor;
    };
    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.setValue(TextConsole);
        }

        return () => {};
    }, [TextConsole]);

    useEffect(() => {
        console.stdlog = console.log.bind(console);
        console.log = function () {
            console.logs.push(Array.from(arguments));
            const value = console.logs.map((log) => log.join(' ')).join('\n');
            editorRef.current.setValue(value);
            setTextConsole(value);
        };
    }, []);
    const direction = false;
    return (
        <div className=" h-[75vh] flex bg-fifth">
            <Split
                className={
                    direction
                        ? ' split min-h-screen w-screen bg-secondary '
                        : '  h-full w-screen bg-secondary '
                }
                direction={direction ? 'horizontal' : 'vertical'}
            >
                <Editor
                    className="h-full "
                    theme="vs-dark"
                    defaultLanguage="javascript"
                    defaultValue={'//Escribe tu codigo Españolisimo aqui'}
                    options={{
                        fontSize: 20,
                        padding: {
                            top: 20
                        },
                        minimap: {
                            enabled: false
                        },
                        automaticLayout: true,
                        renderValidationDecorations: 'off'
                    }}
                    onChange={async (value) => {
                        try {
                            console.logs = [];
                            const newValue = transpilar(value);
                            const x = `try{${newValue}}catch(e){console.log(e)}`;
                            const script = document.createElement('script');
                            script.textContent = x;
                            script.type = 'text/javascript';
                            new Function(x)();
                            script.remove();
                        } catch (error) {
                            console.log(error);
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
                    onChange={async (value) => {}}
                    defaultValue={'//La funcion Escribir() se imprimira aca'}
                ></Editor>
            </Split>
        </div>
    );
    return (
        <div className="h-[75vh]">
            <Split className="  split flex h-full w-screen bg-secondary ">
                <div>
                    <Editor
                        key={1}
                        width={'100%'}
                        theme="vs-dark"
                        defaultLanguage="javascript"
                        defaultValue={'textEditor'}
                        options={{
                            fontSize: 20,
                            padding: {
                                top: 20
                            },
                            minimap: {
                                enabled: false
                            },
                            automaticLayout: true,
                            renderValidationDecorations: 'off'
                        }}
                        onChange={async (value) => {
                            try {
                                console.logs = [];
                                const newValue = transpilar(value);
                                const x = `try{${newValue}}catch(e){console.log(e)}`;
                                const script = document.createElement('script');
                                script.textContent = x;
                                script.type = 'text/javascript';
                                new Function(x)();
                                script.remove();
                            } catch (error) {
                                console.log(error);
                            }
                        }}
                    />
                </div>

                <div>
                    <Editor
                        key={2}
                        width={'100%'}
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
                        onChange={async (value) => {}}
                        defaultValue={'textConsole'}
                    ></Editor>
                </div>
            </Split>
        </div>
    );
}
