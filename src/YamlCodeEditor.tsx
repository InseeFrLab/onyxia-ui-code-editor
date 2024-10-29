import { yaml } from "./vendor/yaml";
import { GenericCodeEditor } from "./GenericCodeEditor";

export type Props = Omit<GenericCodeEditor.Props, "extensions">;

export default function YamlCodeEditor(props: Props) {
    return <GenericCodeEditor {...props} extensions={[yaml()]} />;
}
