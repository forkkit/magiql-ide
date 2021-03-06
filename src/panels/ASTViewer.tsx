import React from "react";
import { bw } from "@beamwind/play";
import { useAtom } from "../lib/atom";
import * as ide from "../lib/ide";
import { EditorPanel } from "../components/EditorPanel";
import * as gqlAst from "../ast/atoms";
import { Tree } from "../components/Icons";
import { editorPanelHeader } from "../lib/styles";

export function replacer(key, value) {
  // Filtering out properties
  if (key === "metadata") {
    return undefined;
  }

  if (value?.metadata?.isSelected === false) {
    return undefined;
  }
  return value;
}

export function ASTViewer() {
  const [currentTab] = useAtom(ide.currentTab);
  const [document] = useAtom(gqlAst.getDocument(currentTab));
  const [focused, setFocused] = useAtom(ide.focused);

  return (
    <EditorPanel
      header="Abstract Syntax Tree"
      options={{
        readOnly: true,
        fontSize: 10,
      }}
      onFocus={() => {
        setFocused("ast");
      }}
      onBlur={() => {
        setFocused(null);
      }}
      onChange={() => {}}
      path={`/${currentTab}/ast.json`}
      contents={JSON.stringify(document, true ? replacer : null, 2)}
    >
      <div
        onClick={() => {
          setFocused("ast");
        }}
        className={bw`${editorPanelHeader(focused === "ast")} gap-1`}
      >
        <div className={bw`h-4.0 w-4.0 -mt-1`}>
          <Tree className={bw`h-4.0 w-4.0`} />
        </div>
        <div>Syntax Tree</div>
      </div>
    </EditorPanel>
  );
}
