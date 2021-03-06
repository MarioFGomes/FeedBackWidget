import { NodemailerMailService } from "../../Service/nodemail/nodemail-mail-service";
import { FeedbackRepository } from "../feedback-repositories";

export interface SubmitFeedbackUseCaseRequest{
    type:string;
    comments:string;
    screenshot?:string;
}

export class SubmitFeedbackUseCase{

    constructor(
        private feedbackRepository:FeedbackRepository,
        private mailservices:NodemailerMailService,
    ){}

    async execute(request:SubmitFeedbackUseCaseRequest) {
        const {type,comments,screenshot}=request


        if(!type){
            throw new Error('Types is required');
        }

        if(!comments){
            throw new Error('Coments is required');
        }

        if(screenshot && !screenshot.startsWith('data:image/png;base64')){
            throw new Error('Invalid screenshot format');
        }

        await this.feedbackRepository.create({
            
        type,
        comments,
        screenshot
            
        })

        await this.mailservices.sendMail({
            subject:'Novo Feed Back',
            body:[
                `<div style="font-family:sans-serif; font-size:16px; color:#111;">`,
                `<p>Tipo do feedback:${type}</p>`,
                `<p>Comentário:${comments}</p>`,
                `</div>`
            ].join('\n')
        })
    }
}