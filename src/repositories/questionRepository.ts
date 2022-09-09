import { IQuestion } from "../types/questionTypes";
import { IAnswer } from "../types/answerTypes";
import { prisma } from "../config/database";

export async function insertQuestion(questions: IQuestion) {
    await prisma.questions.create({
        data: {
            askedBy: questions.askedBy,
            question: questions.question,
        },
    })
}

export async function getByQuestionId(questionId: number) {
    const question = await prisma.questions.findUnique({ where: { id: questionId } })
    return question
}


export async function insertIQuestionAnswer(answerUser: IAnswer, questionId: number) {
    await prisma.answers.create({
        data: {
            answeredBy: answerUser.answeredBy,
            answer: answerUser.answer,
            questionId
        },
    })
}

export async function getAllQuestions() {
    const allQuestions = await prisma.questions.findMany({
        select: {
            askedBy: true,
            question: true,
        }
    })
    return allQuestions
}

export async function getByUniqueQuestion(questionId: number) {
    const uniqueQuestion = await prisma.questions.findUnique({
        where: { id: questionId },
        select: {
            id: true,
            askedBy: true,
            question: true,
            answers: {}
        }
    })
    return uniqueQuestion
}