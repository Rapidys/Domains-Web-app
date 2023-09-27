'use client'
import React, {useState} from 'react';
import s from './index.module.scss'
import cart_white from 'src/assets/images/cart_white.png'
import success from 'src/assets/images/success.png'
import arrow from 'src/assets/images/arrow.svg'
import Image from "next/image";
import {useCart} from "src/context/cartContext/CartContextProvider";

interface IProductItem {
    title: string,
    price: number,
    startDate: string,
    endDate: string,
    id: number,
    item: any,
}

const ProductItem = ({title, price, startDate, endDate, item, id}: IProductItem) => {


    const [isHovered, setHovered] = useState(false)
    const [openMore, setOpenMore] = useState(false)

    const {handleUpdateCart, cart} = useCart()

    const handleMouseEnter = () => {
        setHovered(true)
    }

    const handleOpenMore = () => {
        setOpenMore(!openMore)
    }

    const isIncludeCart = cart.some((element:any) => element.id === id)


    return (
        <div
            className={['w-full flex-col justify_between items_center', s.product_Item, openMore ? s.active : ''].join(' ')}>
            <div className={'w-full flex justify_between items_center'}
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={() => setHovered(false)}
            >
                <div className={'flex items_center cursor_pointer'}
                     onClick={handleOpenMore}
                >
                    {/*<span>{id}</span>*/}
                    <div className={[s.product_item_toggler, openMore ? s.active : ''].join(' ')}>
                        <Image src={arrow} alt={'#'}/>
                    </div>

                    <div className={s.title}>
                        {title}
                    </div>
                </div>

                <div className={'flex items_center'}>
                    <div className={s.prices}>
                        <div className={s.priceGel}>{price}₾</div>
                        <div className={s.priceDollar}>{price / 2}$</div>
                    </div>

                    <div className={[s.buy, isHovered && !openMore ? s.hovered : '' , isIncludeCart ? s.inCart : ''].join(' ')}
                         onClick={() => handleUpdateCart(item)}>
                        {isHovered && !openMore && !isIncludeCart && (
                            <div>
                                დამატება
                            </div>
                        )}

                        {isIncludeCart && (
                            <div className={'w-full flex items_center justify_between'}>
                                <Image src={success} alt={"#"} width={18} height={18} style = {{marginRight:5}}/>
                                <div>
                                    კალათაშია
                                </div>
                            </div>

                        )}
                        { !isIncludeCart && (
                            <Image src={cart_white} alt={"#"}/>
                        )}

                    </div>
                </div>
            </div>
            {openMore && (
                <div className={s.more}>
                    <div>
                        <span className={s.more_title}>
                        რეგისტრაციის თარიღი:
                        </span>
                        <div className={s.value}>
                            {startDate}
                        </div>
                    </div>
                    <div>
                        <span className={s.more_title}>
                        გათიშვის თარიღი:
                        </span>
                        <div className={s.value}>
                            {endDate}
                        </div>
                    </div>
                    <div>
                        <span className={s.more_title}>
                        NS ჩანაწერები:
                        </span>
                        <div className={s.value}>
                            ns1.timeweb.ru
                        </div>
                        <div className={s.value}>
                            ns2.timeweb.ru
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default ProductItem;