// indica as propriedades a serem usadas para a criação de um feedback

export interface FeedbackCreateData{
    type:string;
    comments:string;
    screenshot?:string;
}

export interface FeedbackRepository{
    create:(data:FeedbackCreateData)=>Promise<void>;
}