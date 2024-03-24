import React from 'react'

const Price = ({ price }) => {
    // console.log('Price render')
    return <p>
        {new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        }).format(price)}
    </p>
}

// export default React.memo(Price)
export default Price