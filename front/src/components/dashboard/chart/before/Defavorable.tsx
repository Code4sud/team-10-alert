import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const DefavorableResponse = () => {
  return (
    <div className='col-span-6 rounded-md text-black'>
      <p className='text-center font-bold mt-2'>
        {' '}
        Réponse défavorables de la To Do List aprés l'alerte
      </p>
      <div className='grid grid-cols-10 gap-2 p-6 h-[450px] overflow-scroll'>
        <div className='border-1 border-gray-900 border rounded-md col-span-5 space-y-2 bg-white h-[200px] overflow-scroll'>
          <p className='px-3'>Réponse de l'user : Fethi</p>
          <Textarea
            rows={5}
            placeholder="Je sais pas trop... Je dors presque plus et je veux plus sortir de ma chambre. De toute façon ça sert à rien, ça peut recommencer n'importe quand."
          />
          <Textarea
            rows={5}
            placeholder="J'y pense tout le temps, j'arrive pas à me concentrer en cours. La nuit je fais que des cauchemars et dès qu'il y a un bruit je panique. Je veux plus en parler, ça sert à rien."
          />
          <Textarea
            rows={5}
            placeholder="1... Je me sens vide. J'ai même pensé que ce serait plus simple si j'avais pas survécu. Au moins je stresserais plus."
          />
          <div className='flex flex-col justify-center items-center'>
            <Button className='w-[90%] bg-blue-600 mb-2'>
              Préparer un accompagnement
            </Button>
            <Button className='w-[90%] bg-green-400 mb-2'>
              Basculer en favorable
            </Button>
          </div>
        </div>
        <div className='border-1 border-gray-900 border rounded-md col-span-5 space-y-2 bg-white h-[200px] overflow-scroll'>
          <p className='px-3'> Réponse de l'user : Alex</p>
          <Textarea
            rows={5}
            placeholder="Pas terrible... J'ai plus vraiment envie de voir mes amis et je mange pas beaucoup. Mes parents s'inquiètent mais je leur dis que ça va."
          />
          <Textarea
            rows={5}
            placeholder="Oui, j'y pense beaucoup trop. En classe je perds le fil, je sursaute pour rien. J'aimerais pouvoir oublier mais j'y arrive pas."
          />
          <Textarea
            rows={5}
            placeholder="2... Je me sens vraiment pas bien quand j'y repense. J'ai l'impression que ça va jamais s'arrêter."
          />
          <div className='flex flex-col justify-center items-center'>
            <Button className='w-[90%] bg-blue-600 mb-2'>
              Préparer un accompagnement
            </Button>
            <Button className='w-[90%] bg-green-400 mb-2'>
              Basculer en favorable
            </Button>
          </div>
        </div>
        <div className='border-1 border-gray-900 border rounded-md col-span-5 space-y-2 bg-white h-[200px] overflow-scroll'>
          <p className='px-3'>Réponse de l'user : Steevy</p>
          <Textarea
            rows={5}
            placeholder="Je sais pas trop... Mes notes ont beaucoup baissé et j'arrive plus à me motiver pour aller en cours. Je dis à mes parents que c'est rien mais..."
          />
          <Textarea
            rows={5}
            placeholder='Ça me revient surtout quand je suis sur mon téléphone. Je passe des heures à regarder des vidéos dessus pour pas dormir, parce que sinon je fais des cauchemars.'
          />
          <Textarea
            rows={5}
            placeholder="2... Des fois je me sens bizarre, comme si j'étais dans une bulle. Les autres parlent mais j'ai l'impression d'être loin."
          />
          <div className='flex flex-col justify-center items-center'>
            <Button className='w-[90%] bg-blue-600 mb-2'>
              Préparer un accompagnement
            </Button>
            <Button className='w-[90%] bg-green-400 mb-2'>
              Basculer en favorable
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DefavorableResponse;
