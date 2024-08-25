import { Button } from "@nextui-org/react";
import ProfileCard from "../components/pages/card";
import { useState } from "react";
import { OutputData } from "@editorjs/editorjs/types/data-formats/output-data";
import useEditor from "../components/hooks/editor";

export default function Page() {
    const [editorData, setEditorData] = useState<OutputData>();
    useEditor({ holder: "editor" }, setEditorData);
    useEditor({ holder: "editor-read", readOnly: true, data: editorData });
    console.log(editorData);

    return (
        <main className="md:mx-8 lg:mx-[10%]">
            <section className="lg:flex lg:justify-between gap-4 py-12">
                <div className="flex flex-col gap-4 w-full lg:w-1/2">
                    <div className="text-xl md:text-4xl font-bold">
                        Your <strong className="text-fuchsia-500">Personal Statement</strong> Builder and Host.
                    </div>
                    <ul className="list-none text-gray-500 font-medium">
                        <li>Easy,</li>
                        <li>Modern,</li>
                    </ul>
                    <div>
                        <Button radius="full" variant="solid" color="primary">Get Started</Button>
                    </div>
                </div>
                <div className="mt-4 lg:w-1/2 lg:mt-0">
                    <ProfileCard />
                </div>
            </section>
            <section>
                <div className="text-center">Try the editor</div>
                <div className="flex flex-row">
                    <div className="w-1/2 p-2 border">
                        <div className="font-semibold">Input</div>
                        <div id="editor" />
                    </div>
                    <div className="w-1/2 p-2 border">
                        <div className="font-semibold">Output</div>
                        <div id="editor-read" />
                    </div>
                </div>
            </section>
        </main>
    );
}