import { Camera } from 'phosphor-react';
import html2canvas from 'html2canvas';
import {useState} from 'react';
import { Loading } from './Loading';
import {Trash} from 'phosphor-react';

interface ScreenShotButtonProps{
    onScreenshotTook:(screenshot:string | null) => void;
    screenshot:string | null;
}
export function ScreenShotButton({onScreenshotTook,screenshot}:ScreenShotButtonProps){

 const [isTakingScreenshot,setIsTakeScreenshot]=useState(false);

async function handleTakeScreenshot(){
    setIsTakeScreenshot(true)
        

  const canvas=await html2canvas(document.querySelector('html')!);
  const base64image=canvas.toDataURL('image/png');
   onScreenshotTook(base64image);

   setIsTakeScreenshot(false);

    }

    if(screenshot){
        return(
            <button type="button" className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end
            text-zing-400 hover:text-zinc-100 transition-colors"
            onClick={ () => onScreenshotTook(null)}
            style={{

                backgroundImage: `url(${screenshot})`,
                backgroundPosition:'right bottom',
                backgroundSize:180
            }}
            >
       
              <Trash weight="fill"/>
            </button>
        )
    }
    return (
        <button type="button" 
        className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none
        py-2 focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        onClick={handleTakeScreenshot}
       
        >
        {isTakingScreenshot ? <Loading/> : <Camera className="w-6 h-6" />}
        </button>
    )
}