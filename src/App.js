import './App.css';
import React, {useState } from 'react'
import {
    ChakraProvider,
    Select,
    FormControl,
    FormLabel,
    Button
} from "@chakra-ui/react"
import ItemImage1 from './components/images/1.jpg'
import ItemImage2 from './components/images/2.jpg'
import ItemImage3 from './components/images/3.jpg'
import ItemImage4 from './components/images/4.jpg'
import ItemImage5 from './components/images/5.jpg'
import ItemImage6 from './components/images/6.jpg'
import ItemImage7 from './components/images/7.jpg'
import ItemImage8 from './components/images/8.jpg'
import ItemImage9 from './components/images/9.jpg'
import ItemImage10 from './components/images/10.jpg'
import ItemImage11 from './components/images/11.jpg'
import ItemImage12 from './components/images/12.jpg'
import ShopItem from "./components/ShopItem";


function App() {
    const ItemData = [
        {
            "name": "Classic - Chopped Walnuts",
            "price": 35,
            "mainIngredient": "Walnut",
            "dietaryRestriction": "Vegetarian",
            "description": "Chopped walnuts layered between crispy phyllo dough, dusted with crushed pistachios.",
            "image": ItemImage1
        },
        {
            "name": "Classic - Chopped Pistachios",
            "price": 45,
            "mainIngredient": "Pistachio",
            "dietaryRestriction": "Vegetarian",
            "description": "Chopped pistachios layered between crispy phyllo dough, dusted with crushed pistachios.",
            "image": ItemImage2
        },
        {
            "name": "Chocolate Classic Pistachios",
            "price": 45,
            "mainIngredient": "Pistachio",
            "dietaryRestriction": "Vegetarian",
            "description": "Chopped pistachios layered between crispy phyllo dough and chocolate, dusted with crushed pistachios.",
            "image": ItemImage3
        },
        {
            "name": "Lady Fingers - Crushed Pistachio",
            "price": 45,
            "mainIngredient": "Pistachio",
            "dietaryRestriction": "Vegetarian",
            "description": "Crushed pistachios rolled in layers of crispy phyllo dough, lightly drizzled with simple syrup.",
            "image": ItemImage4
        },
        {
            "name": "Lady Fingers - Whole Pistachios",
            "price": 50,
            "mainIngredient": "Pistachio",
            "dietaryRestriction": "Vegetarian",
            "description": "Whole pistachios rolled in layers of crispy phyllo dough, dusted with crushed pistachios.",
            "image": ItemImage5
        },
        {
            "name": "Bride’s Bracelet - Whole Pistachios",
            "price": 45,
            "mainIngredient": "Pistachio",
            "dietaryRestriction": "Vegetarian",
            "description": "Whole pistachios are nestled into crispy phyllo dough, rolled, rushed and looped to create a bracelet.",
            "image": ItemImage6
        },
        {
            "name": "Purse - Whole Pistachios",
            "price": 50,
            "mainIngredient": "Pistachio",
            "dietaryRestriction": "Vegetarian",
            "description": "Whole pistachios are held in an open phyllo ‘purse’ with cinched sides.",
            "image": ItemImage7
        },
        {
            "name": "Stuffed - Whole Pistachios",
            "price": 50,
            "mainIngredient": "Pistachio",
            "dietaryRestriction": "Vegetarian",
            "description": "Whole stuffed pistachios.",
            "image": ItemImage8
        },
        {
            "name": "Harisa - Syrian Cake",
            "price": 40,
            "mainIngredient": "Semolina",
            "dietaryRestriction": "Vegetarian",
            "description": "Made with Semolina, vanilla, cinnamon, pistachios, sugar, ghee, and baking soda",
            "image": ItemImage9
        },
        {
            "name": "Sweet Cheese - Sweet Mozzarella Cheese",
            "price": 40,
            "mainIngredient": "Cheese",
            "dietaryRestriction": "Vegetarian",
            "description": "Cheese, sugar, milk, pistachios and blossom water.",
            "image": ItemImage10
        },
        {
            "name": "Vegan - Pistachios",
            "price": 35,
            "mainIngredient": "Pistachio",
            "dietaryRestriction": "Vegan",
            "description": "Chopped pistachios layered between crispy vegan dough.",
            "image": ItemImage11
        },
        {
            "name": "Vegan - Walnuts",
            "price": 35,
            "mainIngredient": "Walnut",
            "dietaryRestriction": "Vegan",
            "description": "Chopped walnuts layered between crispy vegan dough.",
            "image": ItemImage12
        },
    ]

    const [type1, setType1] = useState("None");
    const [type2, setType2] = useState("All");
    const [sortType, setSortType] = useState("Any");
    const [cartList, setCartList] = useState([]);

    function matchesFilter1Type(item){
        // all items should be shown when no filter is selected
        if(type1 === "None") {
            return true
        } else return type1 === item.dietaryRestriction;
    }

    function matchesFilter2Type(item){
        // all items should be shown when no filter is selected
        if(type2 === "All") {
            return true
        } else return type2 === item.mainIngredient;
    }

    const filter1Types = () => {
        let options = []
        options.push("None")
        options.push("Vegan")
        options.push("Vegetarian")
        return (options)
    }

    const filter2Types = () => {
        let options = []
        options.push("All")
        options.push("Walnut")
        options.push("Pistachio")
        options.push("Semolina")
        options.push("Cheese")
        return (options)
    }

    const sortTypes = () => {
        let options = []
        options.push("Any")
        options.push("Highest to Lowest Prices")
        options.push("Lowest to Highest Prices")
        return (options)
    }

    const filter1Data = ItemData.filter((item) => {
        return matchesFilter1Type(item);
    })

    const filter2Data = filter1Data.filter((item) => {
        return matchesFilter2Type(item);
    })

    function resetHandler() {
        setType1("None");
        setType2("All");
        setSortType("Any");
    }

    function clearCart() {
        setCartList([]);
    }

    const sortData = () => {
        if(sortType === "Any") {
            return filter2Data
        } else if(sortType === "Highest to Lowest Prices"){
            return filter2Data.sort((a, b) => {
                return b.price - a.price;
            })

        } else if(sortType === "Lowest to Highest Prices"){
            return filter2Data.sort((a, b) => {
                return a.price - b.price;
            })
        }
    }
    const sortData1 = sortData(filter2Data);

    function alreadyInCart(name){
        for (let i = 0; i <= cartList.length-1; i++) {
            if (name === cartList[i][0]) {
                return true;
            }
        }
        return false;
    }
    function addToCart(item) {
        // make deep copy of old list; add the item
        const newList = [...cartList, item]
        // set the state of the list to the updated copy
        setCartList(newList);
    }

    function removeFromCart(item) {
        let newCartList = [];

        for (let i = 0; i <= cartList.length-1; i++) {
            if (cartList[i][0] === item[0]) {
                continue;
            } else {
                newCartList = [...newCartList, cartList[i]];
            }
        }
        setCartList(newCartList);
    }

    const calculateTotalCost = () => {
        let sum = 0;
        for (let i = 0; i <= cartList.length-1; i++) {
            sum = sum + cartList[i][1];
        }
        return sum;
    }

    return (
        <ChakraProvider>
            <div className="wrapper">

                <div className="header-wrapper">
                    <h1 className="header">Baklava Shop</h1>
                    <h2 className="header2">We are a simple experiential cafe offering counter service, you may not even remember you’re in Providence!</h2>
                    <h2 className="header2"><em>*We have limited supply so you may only purchase one of each box at a time.*</em></h2>
                    <br/>
                </div>

                <br/>
                <div className="filter-wrapper">

                    <FormControl className="filterwidth" >
                        <FormLabel>Dietary Restriction</FormLabel>
                        <Select id={"dropdownFilter1"} onChange = {(event) =>
                            setType1(event.target.value)}>
                                {filter1Types().map(parameter =>
                                <option value={parameter} key={parameter}>{parameter}</option>)}
                        </Select>
                    </FormControl>

                    <FormControl className="filterwidth" >
                        <FormLabel>Main Ingredient</FormLabel>
                            <Select id={"dropdownFilter2"} onChange = {(event) =>
                                setType2(event.target.value)}>
                                {filter2Types().map(parameter =>
                                <option value={parameter} key={parameter}>{parameter}</option>)}
                            </Select>
                    </FormControl>


                    <FormControl >
                        <FormLabel>Sort By</FormLabel>
                        <Select id={"dropdownFilter3"} onChange = {(event) =>
                            setSortType(event.target.value)}>
                            {sortTypes().map(parameter =>
                                <option value={parameter} key={parameter}>{parameter}</option>)}
                        </Select>
                    </FormControl>

                </div>
                <br/>

                <Button id={"resetButton"}  width = "200" colorScheme='blue' variant='solid' onClick={resetHandler}>Reset</Button>

                <div className="top">
                    <div className="under left">

                        {sortData1.map((item) => {
                            return (
                                <ShopItem
                                    item= {[item.name, item.price, item.mainIngredient, item.dietaryRestriction, item.description, item.image]}
                                    alreadyInCart = {alreadyInCart(item.name)}
                                    addToCart={addToCart}
                                    removeFromCart={removeFromCart}
                                />)
                        })}

                    </div>
                    <div className="under right">
                        <h3 className="cart" style={{textAlign:'center'}}>Cart:</h3>
                        <h5 className="itemPrice">Total: ${calculateTotalCost()}</h5>
                        <br/>

                        {cartList.map((item) => {
                            return (
                                <p className="cartItem"> 1 x {item[0]} -- ${item[1]}</p>
                            )
                        })}

                        <br/>

                        <Button width = "200" colorScheme='blue' variant='solid' onClick={clearCart}>Clear Cart</Button>
                        <br/>

                    </div>
                </div>

            </div>
        </ChakraProvider>

    );
}

export default App;
