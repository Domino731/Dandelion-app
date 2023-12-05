export enum ACTION_STATUS {
    PENDING = "PENDING",
    ERROR = "ERROR",
    SUCCESS = "SUCCESS",
    IDLE = "IDLE"
}

export type ActionTypeUnion = keyof typeof ACTION_STATUS;