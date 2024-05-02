import { Stato } from "./stato"

export interface Storico {
    storicoId: number,
    taskId:number,
    taskName:string,
    taskDesc:string,
    stato:Stato,
    dataModifica:string
}
