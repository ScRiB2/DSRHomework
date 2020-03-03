import * as React from "react";
import {FormLayout} from "../../components/UI/Layout/FormLayout";
import tw from "../../assets/css/tailwind.module.css";
import css from './XOGame.module.scss'
import Field from "./components/Field/Field";
import * as _ from "lodash";
import {RowLayout} from "../../components/UI/Layout/RowLayout";
import {Cell} from "../../components/UI/Layout/Cell";
import {checkWinner} from "../../utils/utils";

interface IProps {
    value: string;
    onClickHandler: (e: any) => void
}

interface IState {
    field: string[];
    currentSymbol: 'X' | 'O';
    winner: null | 'X' | 'O';
}

const buildState = (): IState => ({
    field: ['', '', '', '', '', '', '', '', ''],
    currentSymbol: 'X',
    winner: null
});

export default class XOGame extends React.Component<IProps, IState> {

    state: IState = {...buildState()};

    changeSymbol = () => {
        this.setState(prevState => ({
            currentSymbol: prevState.currentSymbol === 'X' ? 'O' : 'X'
        }))
    };

    onClickHandler = (i: number) => {
        if (this.state.winner || this.state.field[i] !== '') return;
        const field = _.clone(this.state.field);
        field[i] = this.state.currentSymbol;
        this.setState({field}, () => {
            if (!this.isGameEnd())
                this.changeSymbol();
        });
    };

    startNewGame = () => {
        this.setState({...buildState()})
    };

    getHelp = () => {
        if (this.state.winner) return;
        const field = _.clone(this.state.field);
        let i = -1;
        if ((i = field.indexOf('')) !== -1) {
            field[i] = this.state.currentSymbol;
            this.setState({field}, () => {
                if (!this.isGameEnd())
                    this.changeSymbol();
            })
        }
    };

    isGameEnd = (): boolean => {
        if (checkWinner(this.state.field)) {
            this.setState(prevState => ({winner: prevState.currentSymbol}));
            return true
        }
        return false;
    };

    render() {
        return (
            <FormLayout className={[tw.flex, tw['flex-row'], tw['mt-8'], tw['text-2xl'], css.XOGame]}>
                <RowLayout>
                    <Cell className={tw['w-1/5']}>
                        <RowLayout>
                            <Cell paddingRight={0}>
                                <p>Текущий ход: <b>{this.state.currentSymbol}</b></p>
                            </Cell>
                        </RowLayout>
                        <RowLayout>
                            <Cell paddingRight={0}>
                                {
                                    this.state.winner
                                        ? <p>Победитель: <b>{this.state.winner}</b></p>
                                        : !this.state.field.includes('')
                                        ? <p>Ничья!</p>
                                        : null
                                }
                            </Cell>
                        </RowLayout>
                    </Cell>
                    <Cell className={[tw['flex-col'], tw['ml-5']]}>
                        <Field field={this.state.field} onClickHandler={this.onClickHandler}/>
                    </Cell>
                    <Cell className={tw['w-4/12']} right>
                        <RowLayout>
                            <Cell>
                                <button className={[css.btn, css.lined, css.wave].join(' ')}
                                        onClick={this.startNewGame}>Начать новую игру
                                </button>
                            </Cell>
                        </RowLayout>
                        <RowLayout>
                            <Cell>
                                <button className={[css.btn, css.lined, css.wave].join(' ')} onClick={this.getHelp}
                                        disabled={!this.state.field.includes('')}>Подсказка
                                </button>
                            </Cell>
                        </RowLayout>
                    </Cell>
                </RowLayout>
            </FormLayout>
        )
    }
}