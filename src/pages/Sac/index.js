import React from 'react';
import { Saccontato, Container, Contato } from './styled';

const Page = () => {
    return (
        <>
        <Saccontato>
            <Contato>
                <h1>Fale Conosco</h1>
                <div className="title">SAC</div>
                <div className="telefone">(21) 99999-9999</div>
                <div className="info">Para sugestões ou dúvidas, escreva para</div>
                <div className="info">real@real.com.br</div>
                <div className="info">ou preencha o formulário abaixo.</div>
            </Contato>
        </Saccontato>

        <Container>
                <form className="form--sac">
                    <label className="area">
                        <div className="area--title">Nome</div>
                        <div className="area--input">
                            <input type="text" />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input type="email" />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Setor</div>
                        <select>
                            <option>Comercial</option>
                            <option>Controle de Qualidade</option>
                            <option>Financeiro</option>
                            <option>Logística</option>
                            <option>Marketing</option>
                            <option>SAC</option>
                        </select>
                    </label>
                    <label className="area">
                        <div className="area--title">Assunto</div>
                        <select>
                            <option>Elogios</option>
                            <option>Informações</option>
                            <option>Reclamações</option>
                            <option>Solicitações</option>
                        </select>
                    </label>
                    <label class="area">
                        <div className="area--title">Mensagem</div>
                        <div className="area--input">
                            <textarea id="text--area" name="" rows="" cols=""></textarea>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button>Enviar</button>
                        </div>
                    </label>
                </form>
            </Container>
        </>
    );
}

export default Page;