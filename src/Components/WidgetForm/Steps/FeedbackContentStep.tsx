import { CloseButton } from "../../CloseButton";
import { FeedbackType,feedbackTypes } from "../WidgetForm";
import { ArrowLeft } from 'phosphor-react';
import {ScreenShotButton} from '../ScreenShotButton';
import {useState,FormEvent} from 'react';

interface FeedbackContentProps{
    feedbackChoice:FeedbackType;
    onFeedbackRestartRequested:()=>void;
    onFeedBackSent:()=>void;
}


export function FeedbackContentStep({feedbackChoice,onFeedbackRestartRequested,onFeedBackSent}:FeedbackContentProps){
    const feedbackChoiceInfo =feedbackTypes[feedbackChoice] ;
    const [ScreenShotTake,setScreenShotTake]=useState<string |null>(null);
    const [Comment,setComment]=useState('');

    function handleSubmitFeedback(event:FormEvent){
        event.preventDefault();
        console.log({ScreenShotTake,Comment});

        onFeedBackSent();
    }

    return (
        <>
            <header>
            <button type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100">
            <ArrowLeft weight="bold" className="w-4 h-4" onClick={onFeedbackRestartRequested}/>
            </button>
            <span className="text-xl leading-6 flex items-center gap-2">
            <img src={feedbackChoiceInfo.image.source} alt={feedbackChoiceInfo.image.alt} className="w-6 h-6"/>
            {feedbackChoiceInfo.title}
            </span>
            <CloseButton/>
        </header>
    
           <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
            <textarea className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md
            focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin" 
            placeholder="Conte com detalhes o que está acontecendo..."
            onChange={event =>setComment(event.target.value) }>
             
            </textarea>

            <footer className="flex gap-2 mt-2">
              <ScreenShotButton
              screenshot={ScreenShotTake}
              onScreenshotTook={setScreenShotTake}
              />
                <button type="submit" disabled={Comment.length===0}
                className="bg-brand-500 rounded-md border-transparent flex flex-1 justify-center items-center text-sn hover:bg-brand-300 focus:outline-none
                 focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                >
                    Enviar Feedback
                </button>
            </footer>
           </form>
            </>
        )
}