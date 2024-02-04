"use client";
import React from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";

// Define the initial configuration for the editor
const editorConfig = {
  namespace: "MyEditor",
  theme: {},
  onError(error: any) {
    console.error(error);
  },
};

function Editor() {
  // Handle editor change events
  const onChange = (editorState: { read: (arg0: () => void) => void }) => {
    editorState.read(() => {
      // Perform actions when the editor state changes
      // For example, saving content to local state or backend
    });
  };

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <HistoryPlugin />
      <LinkPlugin />
      <OnChangePlugin onChange={onChange} />
      <div
        style={{
          border: "1px solid black",
          minHeight: "150px",
          padding: "10px",
        }}
      >
        <ContentEditable />
      </div>
    </LexicalComposer>
  );
}

export default Editor;
