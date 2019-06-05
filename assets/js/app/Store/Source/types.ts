import Source from "../../Entity/Source";

export interface SourceState {
    sources: Array<Source>;
    error: String | null;
    loading: Boolean;
    loaded: Boolean;
}
