
import express from 'express'
import { SubmitFeedbackUseCase } from './repositories/use-cases/submit-feedback-use-case';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repositories';
import { NodemailerMailService } from './Service/nodemail/nodemail-mail-service';

export const routes =express.Router();


  routes.post('/feedback',async(req, res) => {

    const {type,comments,screenshot}=req.body;

    const prismaFeedbacksRepository=new PrismaFeedbacksRepository()

    const nodemailerMailService=new NodemailerMailService();
   const submitfeedbackusecase= new SubmitFeedbackUseCase(prismaFeedbacksRepository,nodemailerMailService)

       
   await submitfeedbackusecase.execute({
       type,
       comments,
       screenshot
   })

    res.status(201).send();
});