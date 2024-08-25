import { useEffect, useRef } from "react"
import EditorJS, { EditorConfig, OutputData } from "@editorjs/editorjs"
import { EDITOR_JS_TOOLS } from "./tools"

export default function Editor({ id, config, className, callback }: { id: string, config?: EditorConfig, className?: string, callback?: (data: OutputData) => void }) {
    console.log(config);
    const ejInstance = useRef<EditorJS>()

    function initEditor() {
        const editor = new EditorJS({
            ...config,
            holder: id,
            tools: EDITOR_JS_TOOLS,
            onReady: () => {
                ejInstance.current = editor
            },
            onChange: async () => {
                const content = await editor.saver.save()
                callback?.(content);
            },
        })
    }

    useEffect(() => {
        if (ejInstance.current === undefined) {
            initEditor()
        }

        return () => {
            ejInstance?.current?.destroy()
            ejInstance.current = undefined
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div id={id} className={className} />
    )
}
