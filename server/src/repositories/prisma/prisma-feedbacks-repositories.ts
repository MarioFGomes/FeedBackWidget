import {FeedbackRepository,FeedbackCreateData} from '../feedback-repositories'
import {prisma} from '../../prisma'

export class PrismaFeedbacksRepository implements FeedbackRepository{
   async create({type,comments,screenshot}: FeedbackCreateData){

        await prisma.feedback.create({
            data:{
                type,
                comments,
                screenshot
            }
        })
    };
} 