import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const FavorableResponse = () => {
  return (
    <div className='col-span-6 bg-white rounded-md text-black'>
      <p className='text-center font-bold mt-2'>
        {' '}
        Réponse favorables de la To Do List aprés l'alerte
      </p>
      <div className='grid grid-cols-10 gap-2 p-6 h-[450px] overflow-scroll'>
        <div className='border-1 border-gray-900 border rounded-md col-span-5 space-y-2 bg-white h-[200px] overflow-scroll'>
          <p className='px-3'>Réponse de l'user : Fethi</p>
          <Textarea rows={5} placeholder="Ça va plutôt bien ! Au début c'était dur mais maintenant je recommence à faire du sport et à voir mes amis. Ma famille et moi on s'est beaucoup rapprochés depuis." />
          <Textarea rows={5} placeholder="Oui, j'y pense parfois quand il y a des reportages à la télé, mais ça ne m'empêche pas de dormir. J'en parle souvent avec mes amis, ça nous aide à comprendre ce qui s'est passé." />
          <Textarea rows={5} placeholder="Je dirais 4. Au début c'était plus difficile mais maintenant je me sens plus fort(e) d'avoir surmonté ça." />
          <div className='flex justify-center'>
            <Button className='w-[90%] bg-red-600 mb-2'>
              Basculer en défavorable
            </Button>
          </div>
        </div>
        <div className='border-1 border-gray-900 border rounded-md col-span-5  space-y-2 bg-white h-[200px] overflow-scroll'>
          <p className='px-3'> Réponse de l'user : Alex</p>
          <Textarea rows={5} placeholder="Je vais mieux ! Je me suis remis(e) à jouer au foot avec mes potes et ça fait du bien de rigoler avec eux. Mes parents sont fiers de comment je gère." />
          <Textarea rows={5} placeholder="Parfois j'y repense, mais c'est plus comme avant. On en discute en famille au dîner et ça aide à comprendre. Je sais qu'on est en sécurité maintenant." />
          <Textarea rows={5} placeholder="4 ! J'ai appris que je suis plus fort(e) que je pensais. Même si c'était flippant, je sais qu'on peut surmonter beaucoup de choses." />
          <div className='flex justify-center'>
            <Button className='w-[90%] bg-red-600 mb-2'>
              Basculer en défavorable
            </Button>
          </div>
        </div>
        <div className='border-1 border-gray-900 border rounded-md col-span-5  space-y-2 bg-white h-[200px] overflow-scroll'>
          <p className='px-3'>Réponse de l'user : Steevy</p>
          <Textarea rows={5} placeholder= "Je vais bien ! Le sport m'aide beaucoup, je me suis inscrit(e) au club de basket. L'esprit d'équipe, ça change tout !" />
          <Textarea rows={5} placeholder="Quand j'y repense, je me dis qu'on a été forts tous ensemble. Avec ma famille on en parle ouvertement et ça nous a même rapprochés." />
          <Textarea rows={5} placeholder="4 ! Je me surprends moi-même. Je pensais pas que je pourrais être aussi résilient(e)." />
          <div className='flex justify-center'>
            <Button className='w-[90%] bg-red-600 mb-2'>
              Basculer en défavorable
            </Button>
          </div>
        </div>
        <div className='border-1 border-gray-900 border rounded-md col-span-5  space-y-2 bg-white h-[200px] overflow-scroll '>
          <p className='px-3'> Réponse de l'user : Franck</p>
          <Textarea rows={5} placeholder="Nickel ! J'ai rejoint le club journal du collège, on écrit des articles sur la reconstruction. C'est cool de participer à quelque chose de positif." />
          <Textarea rows={5} placeholder="Oui, mais maintenant c'est comme une expérience qui m'a rendu(e) plus fort(e). J'aide même les plus jeunes à en parler quand ils en ont besoin." />
          <Textarea rows={5} placeholder="5 ! Je me sens plus responsable, plus mature. J'ai même envie de devenir secouriste plus tard !" />
          <div className='flex justify-center'>
            <Button className='w-[90%] bg-red-600 mb-2'>
              Basculer en défavorable
            </Button>
          </div>
        </div>
        <div className='border-1 border-gray-900 border rounded-md col-span-5  space-y-2 bg-white h-[200px] overflow-scroll'>
          <p className='px-3'> Réponse de l'user : Yann</p>
          <Textarea rows={5} placeholder="Franchement, ça va super ! J'ai découvert la musique, je prends des cours de guitare. Ça me fait trop du bien de créer des trucs." />
          <Textarea rows={5} placeholder="J'en parle naturellement maintenant. Avec mes amis on a même fait un exposé en classe pour expliquer comment être préparé. La prof était impressionnée !" />
          <Textarea rows={5} placeholder= "4 ! Cette expérience m'a appris plein de choses sur moi-même et sur les autres. Je me sens plus confiant(e)." />
          <div className='flex justify-center'>
            <Button className='w-[90%] bg-red-600 mb-2'>
              Basculer en défavorable
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FavorableResponse;
