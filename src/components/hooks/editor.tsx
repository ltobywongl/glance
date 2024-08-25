import { useEffect, useRef, useState } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import { EditorConfig } from "@editorjs/editorjs/types/configs";
import { EDITOR_JS_TOOLS } from "../common/editor/tools";

const useEditor = (config: EditorConfig, callback?: (data: OutputData) => void) => {
	const [isEditorReady, setIsEditorReady] = useState(false);
	const editorInstance = useRef<EditorJS>();

	useEffect(() => {
		if (!editorInstance.current) {
			editorInstance.current = new EditorJS({
				...config,
                holder: config.holder ?? "editorjs",
                tools: EDITOR_JS_TOOLS,
				onReady: () => {
					setIsEditorReady(true);
					config.onReady?.();
				},
                onChange: async () => {
                    const content = await editorInstance.current?.saver.save()
					if (content) {
						callback?.(content);
					}
                },
			});
		}
		return () => {
			if (editorInstance.current && editorInstance.current.destroy) {
				editorInstance.current.destroy();
				editorInstance.current = undefined;
			}
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		isEditorReady,
		editor: editorInstance.current,
	};
};

export default useEditor;