import { getAllQuestions, getByUniqueQuestion, getByQuestionId, insertIQuestionAnswer, insertQuestion } from "../repositories/questionRepository";
import { IQuestion } from "../types/questionTypes";
import { IAnswer } from "../types/answerTypes";

export async function createQuestionUser(question: IQuestion) {
    await insertQuestion(question)
}

export async function validateUserId(questionId: number) {
    const question = await getByQuestionId(questionId)
    if (!question) {
        throw { type: "not_found" }
    }
}

export async function createAnswerUser(answer: IAnswer, questionId: number) {
    await insertIQuestionAnswer(answer, questionId)
}

export async function getQuestions() {
    return await getAllQuestions()
}

export async function getQuestion(questionId: number) {
    const uniqueQuestion = await getByUniqueQuestion(questionId)
    if (!uniqueQuestion) {
        throw { type: "not_found" }
    }
    return uniqueQuestion
}