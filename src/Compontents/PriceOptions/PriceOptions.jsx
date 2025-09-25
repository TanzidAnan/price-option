import { useState } from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = ({option}) => {
    const [priceOption,setPriceOption] =useState([])

    return (
        <div>
            {
                priceOption.map(option =><PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;