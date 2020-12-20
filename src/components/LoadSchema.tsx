import React from "react";
import { useMonaco } from "use-monaco";
import { useAtom } from "../lib/atom";
import * as ide from "../lib/ide";
import { loadSchema } from "../lib/schema";

export function LoadSchema() {
  const [currentTab] = useAtom(ide.currentTab);
  const [schemaStatus, setSchemaStatus] = useAtom(ide.schemaStatus);
  const [config, setConfig] = useAtom(ide.getTabSchemaConfig(currentTab));
  const [, setSchema] = useAtom(ide.schemaText);

  const { monaco } = useMonaco();
  console.log(schemaStatus);
  React.useEffect(() => {
    if (monaco) {
      setSchemaStatus("loading");
      monaco.worker.updateOptions("graphql", {
        languageConfig: {
          schemaConfig: config,
        },
      });
      loadSchema(monaco, currentTab)
        .then((schema) => {
          setSchema(schema);
          setSchemaStatus("success");
        })
        .catch((e) => {
          console.error(e);
          setSchema(null);
          setSchemaStatus("error");
        });
    }
  }, [config, monaco, setSchemaStatus]);

  return null;
}