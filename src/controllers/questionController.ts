import { Request, Response } from 'express';
import { createAnswerUser, createQuestionUser, getQuestion, getQuestions, validateUserId } from '../services/questionService';

export async function createQuestion(req: Request, res: Response) {
  const body = req.body
  await createQuestionUser(body)
  res.sendStatus(201)
}

export async function createAnswer(req: Request, res: Response) {
  const body = req.body
  const questionId = Number(req.params.id)

  await validateUserId(questionId)

  await createAnswerUser(body, questionId)
  res.sendStatus(201)
}

export async function get(req: Request, res: Response) {
  const allQuestions = await getQuestions()
  res.status(200).send(allQuestions)
}

export async function getById(req: Request, res: Response) {
  const questionId = +req.params.id
  const getUniqueQuestion = await getQuestion(questionId)
  res.status(200).send(getUniqueQuestion)
}
