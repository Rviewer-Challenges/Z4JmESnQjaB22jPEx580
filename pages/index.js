import { AnimationText } from '../components/animation-text';
import Card from '../components/card';
import JSeint from '../components/logos/JSeint';
import Js from '../components/logos/JavaScript';
import Zon from '../components/logos/Zon';
import NavBar from '../components/nav-bar';
import RainIcon from '../components/rain-icons';

export default function Home() {
    return (
        <div>
            <RainIcon />
            <div className=" bg-fifth min-h-full grid  lg:grid-cols-3 place-content-stretch place-items-stretch ">
                <Card
                    title="ExecuteJS"
                    body="Ejecuta código JavaScript en tu navegador, sin necesidad de instalar nada. ¡Es gratis!, sin limitaciones ni publicidad. puedes guardar mas de una hoja para ejecutar código en ellas."
                    Svg={Js}
                />
                <Card
                    title="JSeint"
                    body="JSeint es un lenguaje de programación basado en JavaScript, que permite crear programas de forma sencilla y divertida. Una inspiracion de PSeint peroo basado en el Mejor Lenguaje del word (JavaScript)"
                    Svg={JSeint}
                />
                <Card
                    title="By → Kevin Jacque"
                    body="Creado cono mucho cariño a la comunidad, inspirado en mi constumbre de probar codigo JS en consola de Chrome, y en mi amor por la programacion."
                    Svg={Zon}
                />
            </div>
        </div>
    );
}
