import slash1 from '../images/slash1.webp'
import berry from '../images/berry.png'
// import watermelon from '../images/watermelon.png'
import mango from '../images/mango.png'
// import kiwi from '../images/kiwi.png'
// import mastik from '../images/mastik.png'
import purple from '../images/purple.png'
import lemonmint from '../images/lemonmint.png'
import lemonade from '../images/lemonade.png'
import icedcoffee from '../images/icedcoffee.png'
import passiflora from '../images/passiflora.png'

export const coldDrinks = [
    {
        id: 1,
        name: 'سلاش',
        prices:{
            s: 2.5,
            m: 4,
            l: 6
        },
        flavours:[
            {
                id: 1,
                name: 'علكة + بلوبيري',
                image: purple,
                isAvailable: 1
            },
            {
                id: 2,
                name: 'مانجو + خوخ',
                image: mango,
                isAvailable: 1
            },
            {
                id: 3,
                name: 'توت مشكل + بطيخ',
                image: berry,
                isAvailable: 1
            }
        ]
    },
    {
        id: 2,
        name: 'آيس كوفي',
        prices:{
            s: 5,
            m: 7,
            l: 9
        },
        flavours:[
            {
                id: 1,
                name: 'آيس كوفي',
                image: icedcoffee,
                isAvailable: 1
            }
        ]
    },
    {
        id: 3,
        name: 'بسفلورا',
        prices:{
            s: 5,
            m: 7,
            l: 9
        },
        flavours:[
            {
                id: 1,
                name: 'بسفلورا',
                image: passiflora,
                isAvailable: 1
            }
        ]
    },
    {
        id: 4,
        name: 'عصائر طبيعية',
        prices:{
            s: 5,
            m: 7,
            l: 9
        },
        flavours:[
            {
                id: 1,
                name: 'ليمون وجرجير',
                image: lemonade,
                isAvailable: 1
            },
            {
                id: 2,
                name: 'ليمون ونعنع',
                image: lemonmint,
                isAvailable: 0
            }
        ]
    }
]