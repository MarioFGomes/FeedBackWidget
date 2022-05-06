import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createfeedbackSpy=jest.fn(); // verifica se uma função foi chamada
const sendMailSpy=jest.fn();

describe('Submit Feedback',() => {
    it('deve permitir enviar um feed back',async  () =>{
        const submitFeedBack=new SubmitFeedbackUseCase(
            {create:createfeedbackSpy,},
            {sendMail:sendMailSpy}
        )
        await expect(submitFeedBack.execute({
            type:'BUG',
            comments:'example coment',
            screenshot:'data:image/png;base64',
        })).resolves.not.toThrow();

        expect(createfeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    })
})