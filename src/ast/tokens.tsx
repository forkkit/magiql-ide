import { bw } from "@beamwind/play";
import React from "react";
import { Check } from "../components/Icons";

export const graphqlNode = `cursor-pointer select-none flex flex-row items-center font-mono text-xs`;

export function FieldName({ children }) {
  return <div className={bw`text-graphql-field`}>{children}</div>;
}
export function Indented({ children }) {
  return <div className={bw`indent`}>{children}</div>;
}
export function Type({ children }) {
  return <div className={bw`text-graphql-typename`}>{children}</div>;
}
export function Keyword({ children }) {
  return <div className={bw`text-graphql-keyword`}>{children}</div>;
}
export function Name({ children }) {
  return <div className={bw`text-graphql-opname`}>{children}</div>;
}
export function Variable({ children }) {
  return <div className={bw`text-graphql-variable`}>${children}</div>;
}
export function ArgumentName({ children }) {
  return <div className={bw`text-graphql-argname`}>{children}</div>;
}
export function Punctuation({ children }) {
  return <div className={bw`text-blueGray-400`}>{children}</div>;
}
export function Qualifier({ children }) {
  return <div className={bw`text-graphql-alias`}>{children}</div>;
}
export function Lines({ children }) {
  return <div className={bw`flex flex-col gap-0.5`}>{children}</div>;
}
export function Tokens({ children, gap = 1.5, className = "", ...props }) {
  return (
    <div
      className={`${bw`${className} ${graphqlNode} ${"gap" + "-" + gap} `}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function Arrow({ isOpen, className, ...props }: any) {
  return (
    <div
      className={bw`p-0.75 ${
        isOpen ? "group-hover:(-rotate-45)" : "group-hover:(rotate-45)"
      } transition-all`}
    >
      <svg
        viewBox="0 0 481.721 481.721"
        fill="currentColor"
        className={`${bw`${{
          "-rotate-90": !isOpen,
        }} w-9px h-9px`} ${className}`}
        {...props}
      >
        <g>
          <g>
            <path d="M10.467,146.589l198.857,252.903c17.418,30.532,45.661,30.532,63.079,0l198.839-252.866 c3.88-5.533,8.072-15.41,8.923-22.118c2.735-21.738,4.908-65.178-21.444-65.178H23.013c-26.353,0-24.192,43.416-21.463,65.147 C2.395,131.185,6.587,141.051,10.467,146.589z" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export function Checkbox(props: any) {
  return (
    <div
      style={{ padding: "1px" }}
      {...props}
      className={`${bw`w-3 h-3 rounded-sm ${
        props.checked
          ? "text-white bg-blue-400 group-hover:(text-white bg-blue-200)"
          : "text-blueGray-300 bg-blueGray-300 group-hover:(text-blueGray-600)"
      }`} ${props.className ?? ""}`}
    >
      <Check />
    </div>
  );
}