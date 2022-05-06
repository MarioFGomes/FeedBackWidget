import { MailService, SendMailData } from "../mail-service";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e6ff8da48545bf",
      pass: "465471aa1348c7"
    }
  });

export class NodemailerMailService implements MailService{
    async sendMail ({subject, body}:SendMailData){
        
          await transport.sendMail({

        from:'Equipe Feedget <oifeedget.com>',
        to:'Mário Gomes <marioferreiragomes333@gmail.com>',
        subject:subject,
        html:body
    } );
    }
}