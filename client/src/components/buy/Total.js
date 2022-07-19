import { useEffect,useState } from 'react';


const Total = ({item}) => {
  const [price, setPrice] = useState(0);
  

    useEffect(() => {
        totalAmount();
    }, [item]);

    const totalAmount = () => {
        let price = 0
        item.map((items) => {
          
            price += parseFloat(items.price.cost)
            
        });
        const priceFinal = price.toFixed(2)
        setPrice(priceFinal)
    }
    console.log(price)

//gotta edit all backk to string and then see if NaN changes
  return (
    <div className='sub_item'>
        <h3>Subtotal ({item.length} items): <strong style={{ fontWeight: "700", color: "#111" }}>KD {price}</strong></h3>
    </div>
  )
}

export default Total