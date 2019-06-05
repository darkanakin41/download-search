import User from "../../Entity/User";

export interface SecurityState {
    user: User | null;
    error: String | null;
    loading: Boolean;
}
