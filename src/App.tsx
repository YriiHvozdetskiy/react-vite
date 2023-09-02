import {Button} from "@/components/ui/button.tsx";
import {CardDemo} from "@/components/CardDemo.tsx";

function App() {

   return (
      <div className={'container'}>
         <Button
            className={'text-error'}
            onClick={() => console.log('click')}>Click</Button>
         <CardDemo/>
      </div>
   )
}

export default App
