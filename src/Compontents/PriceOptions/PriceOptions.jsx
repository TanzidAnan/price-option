import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const [priceOption, setPriceOption] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setPriceOption(data))
    }, [])

    return (
        <div className="w-10/12 mx-auto">
            <h1>Pirce</h1>
            <div className="grid grid-cols-3 gap-2.5">
                {
                    priceOption.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;