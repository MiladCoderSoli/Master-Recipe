import dessertImg from '../assets/images/desert.jpg'

import { BsEmojiHeartEyes } from 'react-icons/bs';

const Dessert = () => {

    return (
        <div>
            <div className='Header'>
                <div className="picture">
                    <img src={dessertImg} width='700px'  className='dessertImage' alt='dessert' />
                </div>
                <div className="details">
                    <h2>  dessert </h2>
                    <h4> Cook Time :    0.5 hours </h4>
                    <ul>
                        <li> Lorem ipsum dolor sit amet. </li>
                        <li> Lorem ipsum dolor sit amet. </li>
                        <li> Lorem ipsum dolor sit amet. </li>
                        <li> Lorem ipsum dolor sit amet. </li>
                        <li> Lorem ipsum dolor sit amet. </li>
                        <li> Lorem ipsum dolor sit amet. </li>
                        <li> Lorem ipsum dolor sit amet. </li>
                        <li> Lorem ipsum dolor sit amet. </li>
                        <li> Lorem ipsum dolor sit amet. </li>
                        <li> Lorem ipsum dolor sit amet. </li>
                        <li> Lorem ipsum dolor sit amet. </li>
                    </ul>
                </div>
            </div>
            <div className="How-to-cook">
                <h4> Step 1 </h4>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti libero natus eveniet magnam sint ratione ea sequi<br /> eius amet distinctio esse recusandae repellat. Sunt quod fuga atque, alias explicabo cupiditate! </p>
                <br /><h4> step 2 </h4>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti libero natus eveniet magnam sint ratione ea sequi<br /> eius amet distinctio esse recusandae repellat. Sunt quod fuga atque, alias explicabo cupiditate! </p>
                <br /><h4> Step 3 </h4>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti libero natus eveniet magnam sint ratione ea sequi<br /> eius amet distinctio esse recusandae repellat. Sunt quod fuga atque, alias explicabo cupiditate! </p>
                <br /><h4> Step 4 </h4>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti libero natus eveniet magnam sint ratione ea sequi<br /> eius amet distinctio esse recusandae repellat. Sunt quod fuga atque, alias explicabo cupiditate! </p>
                <br /><h4> Step 5 </h4>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti libero natus eveniet magnam sint ratione ea sequi<br /> eius amet distinctio esse recusandae repellat. Sunt quod fuga atque, alias explicabo cupiditate! </p>
                <h1> Now, can eat <BsEmojiHeartEyes /> </h1>
            </div>
        </div>
        
    )
}

export default Dessert;