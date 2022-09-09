import { Questions } from "@prisma/client"


export type IQuestion = Omit<Questions, "id">