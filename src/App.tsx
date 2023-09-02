import {Button} from "@/components/ui/button.tsx";

function App() {

   return (
      <div className={'container'}>
         <Button
            className={'text-error'}
            onClick={() => console.log('click')}>Click</Button>
      </div>
   )
}

export default App
