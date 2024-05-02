import { Employee } from "./employee"
import { Stato } from "./stato"

export interface Ticket{
    taskId: number
    taskName: string
    taskDesc: string
    assegnatario: Employee
    dataCreazione: Date
    stato: Stato
}