import cappuccino from '../images/cappuccino.png'
import choco from '../images/choco.png'
import coffee from '../images/coffee.png'
import nescafe from '../images/nescafe.png'
import tea from '../images/tea.png'
export const hotDrinks = [
    {
        id: 1,
        name: 'مشروبات ساخنة',
        prices:{
            m:2,
            l:3
        },
        flavours:[
            {
                id: 1,
                name: 'نسكافيه',
                image: nescafe,
                isAvailable: 1
            },
            {
                id: 2,
                name: 'قهوة عربية',
                image: coffee,
                isAvailable: 1
            },
            {
                id: 3,
                name: 'شاي',
                image: tea,
                isAvailable: 1
            },
            {
                id: 4,
                name: 'شوكو',
                image: choco,
                isAvailable: 1
            },
            {
                id: 5,
                name: 'كابتشينو',
                image: cappuccino,
                isAvailable: 1
            }
        ]
    }
]