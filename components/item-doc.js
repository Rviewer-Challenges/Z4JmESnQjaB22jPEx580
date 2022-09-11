import Highlight, { defaultProps } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula';

const ItemDoc = ({ title, body, code }) => {
    return (
        <div id={title}>
            <h1 className="text-5xl font-serif text-center  pt-5">{title}</h1>
            <p className=" text-justify text-xl p-10">{body}</p>
            <div className="p-2 ">
                <Highlight
                    {...defaultProps}
                    code={code}
                    language="js"
                    theme={dracula}
                >
                    {({
                        className,
                        style,
                        tokens,
                        getLineProps,
                        getTokenProps
                    }) => (
                        <pre className="pl-5  rounded-xl" style={style}>
                            {tokens.map((line, i) => (
                                <div
                                    key={i}
                                    {...getLineProps({ line, key: i })}
                                >
                                    {line.map((token, key) => (
                                        <span
                                            key={key + i}
                                            {...getTokenProps({
                                                token,
                                                key
                                            })}
                                        />
                                    ))}
                                </div>
                            ))}
                        </pre>
                    )}
                </Highlight>
            </div>
        </div>
    );
};

export default ItemDoc;
