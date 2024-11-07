import {Button} from "@/components/ui/button";
import {Card, CardContent, CardFooter, CardTitle} from "@/components/ui/card";

const ScenariosScreen = () => {
    return (
        <div className="w-full h-full p-8">
            <div className="flex justify-end items-center h-full">
                <Button variant={"secondary"}>Créer un scénario</Button>
            </div>
            <div className="flex justify-center items-center h-full">
                <Card >
                  <CardTitle>Scénario 1</CardTitle>
                  <CardContent>
                    <p>Un scénario est une suite d'étapes qui permet de simuler un parcours utilisateur.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant={"outline"}>Modifier</Button>
                    <Button variant={"destructive"}>Supprimer</Button>
                  </CardFooter>
                </Card>
            </div>
        </div>
    );
}

export default ScenariosScreen;
