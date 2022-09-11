import Editor, { useMonaco } from '@monaco-editor/react';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import EditorJS from '../../components/editor-js';
import SvgJS from '../../components/svg-js';
import { motion, Reorder } from 'framer-motion';
import { useApp } from '../../src/context/state';

console.logs = [];

const classTabActive =
    'border-2  border-fifth w-full lg:w-30 border-b-primary lg:h-full border-l-secondary border-r-secondary h-auto  pl-2 pr-2 bg-fifth text-primary flex items-center justify-between';
const classTabInactive =
    'border-2  border-fifth w-full lg:w-30 h-auto lg:h-full pl-2 pr-2 bg-tertiary text-slate-500 flex items-center justify-between';

export default function ExecuteJs() {
    const { Tabs, ReorderTabs, IndexTabActive, ChangeTabActive, AddTab } =
        useApp();

    const setTabs = async (tabs) => {
        await ReorderTabs(tabs);
    };

    const setTabActive = async (index) => {
        await ChangeTabActive(index);
    };

    return (
        <>
            <div className="  bg-fifth hidden lg:grid">
                <Reorder.Group
                    as="div"
                    className="h-10 flex"
                    axis="x"
                    values={Tabs}
                    onReorder={setTabs}
                >
                    {Tabs.map((tab, index) => (
                        <Reorder.Item as="div" key={tab.name} value={tab}>
                            <motion.div
                                className={
                                    (index === IndexTabActive
                                        ? classTabActive
                                        : classTabInactive) + ' '
                                }
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                layoutId={index}
                                variants={{
                                    hidden: {
                                        opacity: 0
                                    },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            duration: 0.5
                                        }
                                    }
                                }}
                            >
                                <div
                                    onClick={() => {
                                        setTabActive(index);
                                    }}
                                    className="flex items-center md:w-full"
                                >
                                    <div className=" hidden mr-1 lg:block">
                                        <SvgJS width={20} />
                                    </div>
                                    {tab.name}
                                </div>
                                <button
                                    className="ml-2"
                                    onClick={() => {
                                        if (Tabs.length === 1) {
                                            return;
                                        }
                                        const newTabs = Tabs.filter(
                                            (tab, i) => i !== index
                                        );
                                        if (index === IndexTabActive) {
                                            setTabActive(0);
                                        }
                                        setTabs(newTabs);
                                    }}
                                >
                                    ⚔
                                </button>
                            </motion.div>
                        </Reorder.Item>
                    ))}

                    <motion.button
                        key={'+'}
                        layoutId={'+'}
                        disabled={Tabs.length >= 5}
                        onClick={() => {
                            if (Tabs.length < 5) {
                                AddTab();
                            }
                        }}
                        className={
                            Tabs.length >= 5
                                ? 'hidden'
                                : ' border-2 aspect-square rounded-md w-min border-fifth h-full pl-2 pr-2 bg-tertiary text-slate-500 hover:text-fourth hover:bg-slate-500'
                        }
                    >
                        +
                    </motion.button>
                </Reorder.Group>
                {
                    <EditorJS
                        key={IndexTabActive}
                        index={IndexTabActive}
                        direction={true}
                    />
                }
            </div>

            <div className="lg:hidden min-h-screen flex bg-fifth">
                <Reorder.Group
                    className="hidden sm:block"
                    axis="y"
                    values={Tabs}
                    onReorder={setTabs}
                >
                    <AnimatePresence className="flex-col">
                        {Tabs.map((tab, index) => (
                            <Reorder.Item
                                value={tab}
                                key={tab.name}
                                layoutId={index}
                                className={
                                    (index === IndexTabActive
                                        ? classTabActive
                                        : classTabInactive) + ' pt-5 pb-5 '
                                }
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                layout
                                variants={{
                                    hidden: {
                                        opacity: 0
                                    },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            duration: 0.5
                                        }
                                    }
                                }}
                            >
                                <div
                                    onClick={() => {
                                        setTabActive(index);
                                    }}
                                    className="flex items-center md:w-full mr-4 lg:mr-0"
                                >
                                    <div className=" hidden mr-1 lg:block">
                                        <SvgJS width={20} />
                                    </div>
                                    {tab.name}
                                </div>
                                <button
                                    onClick={() => {
                                        if (Tabs.length === 1) {
                                            return;
                                        }
                                        const newTabs = Tabs.filter(
                                            (tab, i) => i !== index
                                        );
                                        if (index === IndexTabActive) {
                                            setTabActive(0);
                                        }
                                        setTabs(newTabs);
                                    }}
                                >
                                    ⚔
                                </button>
                            </Reorder.Item>
                        ))}
                        <motion.button
                            key={'+-sm'}
                            layoutId={'+-sm'}
                            disabled={Tabs.length >= 5}
                            onClick={() => {
                                if (Tabs.length < 5) {
                                    AddTab();
                                }
                            }}
                            className={
                                Tabs.length >= 5
                                    ? 'hidden'
                                    : ' border-2 rounded-md w-full border-fifth aspect-square pl-2 pr-2 bg-tertiary text-slate-500 hover:text-fourth hover:bg-slate-500'
                            }
                        >
                            +
                        </motion.button>
                    </AnimatePresence>
                </Reorder.Group>

                {
                    <EditorJS
                        key={IndexTabActive}
                        index={IndexTabActive}
                        direction={false}
                    />
                }
            </div>
        </>
    );
}
