import { Answers } from "@prisma/client";

export type IAnswer = Omit<Answers, "id" | "questionId">