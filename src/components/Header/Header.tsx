import * as React from "react";
import {RowLayout} from "../UI/Layout/RowLayout";
import header from "./Header.module.scss";
import tw from "../../assets/css/tailwind.module.css"
import {Cell} from "../UI/Layout/Cell";
import {Link} from "react-router-dom";
import home from '../../assets/images/house.svg'
import XOG from '../../assets/images/XOG.svg'

export default () => (
    <header className={header['border-bottom-gray']}>
        <RowLayout className={[tw.flex, tw['py-3'], tw['px-12'], tw['items-center']]}>
            <Cell>
                <Link to="/">
                    <img className={header.img_size} src={home} alt='home'/>
                </Link>
            </Cell>
            <Cell right>
                <Link to="/XOGame">
                    <img className={header.img_size} src={XOG} alt='XOGame'/>
                </Link>
            </Cell>
        </RowLayout>
    </header>
)