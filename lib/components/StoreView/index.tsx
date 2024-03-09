/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useBearStore } from "../../stores/counterStore"

export const StoreView = () => {
    const increasePopulation = useBearStore((state: any) => state.increasePopulation)

    return <div><button onClick={increasePopulation}>one up</button></div>
}