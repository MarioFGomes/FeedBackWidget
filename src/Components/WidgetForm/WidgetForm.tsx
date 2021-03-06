import {useState} from 'react';
import {CloseButton} from '../CloseButton';
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import {FeedbackTypeStep} from '../WidgetForm/Steps/FeedbackTypeStep'
import {FeedbackContentStep} from '../WidgetForm/Steps/FeedbackContentStep'
import {FeedbackSuccessStep} from '../WidgetForm/Steps/FeedbackSuccessStep'


export const feedbackTypes={
    BUG:{
        title:"Problema",

        image:{
            source:bugImageUrl,
            alt:'Imagem de um inseto'
        }
    },
    IDEA:{
        title:"Ideia",

        image:{
            source:ideaImageUrl,
            alt:'Imagem de uma lampada'
        }
    },

    OTHER:{
        title:"Outro",

        image:{
            source:thoughtImageUrl,
            alt:'Imagem de uma nuvem de Pensamento'
        }
    }
}
 export type FeedbackType=keyof typeof feedbackTypes

export function WidgetForm(){
    const [feedbackType,setFeedBackType]=useState<FeedbackType | null>(null);
    const [feedbackSent,setfeedbackSent]=useState(false);

    function handleRestartFeedback(){
        setfeedbackSent(false);
        setFeedBackType(null);
    }
    return (
       <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

     {feedbackSent ?
        (
            <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
        ):(
        <>
        {!feedbackType ?
      ( <FeedbackTypeStep onfeedbacktypechang={setFeedBackType}/> )
      
       :(<FeedbackContentStep 
        feedbackChoice={feedbackType}
       onFeedbackRestartRequested={handleRestartFeedback}
       onFeedBackSent={()=>setfeedbackSent(true)}
       />)
       
       }
            </>
        ) 
    }

        <footer className="text-xs text-neutral-400">
        Feito com ♥ pela <a href="https://rocketseat.com.br" className="underline underline-offset-2" target="_blank">Rocketseat</a>
        </footer>

        </div>
        
    );
}