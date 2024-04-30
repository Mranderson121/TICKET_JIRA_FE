import { Employee } from "./employee"
import { Stato } from "./stato"

export interface Ticket{
    taskName: string
    taskDesc: string
    assegnatario: Employee
    dataCreazione: Date
    stato: Stato
}