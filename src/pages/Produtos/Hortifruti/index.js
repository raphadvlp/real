import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchArea, PageArea } from './styled';
//import useApi from '../../helpers/RealAPI';

import {PageContainer} from '../../../components/MainComponents';

const Page = () => {
    //const api = useApi ();

    return (
        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input type="text" name="q" placeholder="O que você procura?" />
                            <select name="state">

                            </select>
                            <button>
                                Pesquisar
                            </button>
                        </form>
                    </div>
                    <div className="categorylist">
                        
                    </div>
                </PageContainer>
            </SearchArea>


            <PageContainer>
                <PageArea>
                    <div className="title">
                        <h1>Hortifruti</h1>
                    </div>
                    <div className="produtos">
                        <div className="item">
                            <div className="item-p" >
                                <div className="row">
                                    <div className="col imagem acougue"></div>
                                    <div className="col text">
                                        <div className="align-vertical">
                                            <div className="price">
                                                R$ 00,00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-p" >
                                <div className="row">
                                    <div className="col imagem acougue"></div>
                                    <div className="col text">
                                        <div className="align-vertical">
                                            <div className="price">
                                                R$ 00,00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-p" >
                                <div className="row">
                                    <div className="col imagem acougue"></div>
                                    <div className="col text">
                                        <div className="align-vertical">
                                            <div className="price">
                                                R$ 00,00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-p" >
                                <div className="row">
                                    <div className="col imagem acougue"></div>
                                    <div className="col text">
                                        <div className="align-vertical">
                                            <div className="price">
                                                R$ 00,00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-p" >
                                <div className="row">
                                    <div className="col imagem acougue"></div>
                                    <div className="col text">
                                        <div className="align-vertical">
                                            <div className="price">
                                                R$ 00,00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-p" >
                                <div className="row">
                                    <div className="col imagem acougue"></div>
                                    <div className="col text">
                                        <div className="align-vertical">
                                            <div className="price">
                                                R$ 00,00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-p" >
                                <div className="row">
                                    <div className="col imagem acougue"></div>
                                    <div className="col text">
                                        <div className="align-vertical">
                                            <div className="price">
                                                R$ 00,00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-p" >
                                <div className="row">
                                    <div className="col imagem acougue"></div>
                                    <div className="col text">
                                        <div className="align-vertical">
                                            <div className="price">
                                                R$ 00,00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-p" >
                                <div className="row">
                                    <div className="col imagem acougue"></div>
                                    <div className="col text">
                                        <div className="align-vertical">
                                            <div className="price">
                                                R$ 00,00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </PageArea>
            </PageContainer>
        </>
    );
}

export default Page;