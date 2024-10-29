import { shell, StreamLanguage } from "./vendor/shell";
import { GenericCodeEditor } from "./GenericCodeEditor";

export type Props = Omit<GenericCodeEditor.Props, "extensions">;

export default function YamlCodeEditor(props: Props) {
    return <GenericCodeEditor {...props} extensions={[StreamLanguage.define(shell)]} />;
}
