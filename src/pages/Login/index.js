import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Api from '../../Api';

import { AreaLogin } from './styled';

import { BtnDefaultIcons, BtnDefault } from '../../components/Styled';

import FacebookIcon from '@material-ui/icons/Facebook';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default ({onReceiveGoogle}) => {

    const actionLoginGoogle = async () => {
        let result = await Api.googleLogar();

        if(result){
            onReceiveGoogle(result.user);
        }else{
            alert('Error');
        }
    }

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/registrar">
                    <AreaLogin>
                        <h1 className="organize">
                            <Link to="/"><ArrowBackIcon /></Link>
                            Crie sua conta
                        </h1>

                        <p>Crie sua conta é grátis</p>

                        <form>
                        <div className="form-input">
                            <label>Nome</label>
                            <input type="text" />
                        </div>

                        <div className="form-input">
                            <label>E-mail</label>
                            <input type="email" />
                        </div>
                    </form>

                    <form>
                        <div className="form-input">
                            <label>Senha</label>
                            <input type="password" />
                        </div>

                        <BtnDefault>
                            Comece Agora!
                        </BtnDefault>

                        <div className="footerlogin">
                            Ja tem uma conta?
                            <Link to="/">Fazer Login</Link>
                        </div>
                    </form>
                    </AreaLogin>
                </Route>

                <Route exact path="*">
                    <AreaLogin>
                    <h1>Faça login em sua conta</h1>

                    <BtnDefaultIcons>
                        <FacebookIcon />
                        <div className="center">Fazer login com o Facebook</div>
                    </BtnDefaultIcons>

                    <BtnDefaultIcons onClick={actionLoginGoogle}>
                        <FacebookIcon />
                        <div className="center">Fazer login com o Google</div>
                    </BtnDefaultIcons>

                    <p>OU</p>

                    <form>
                        <div className="form-input">
                            <label>E-mail</label>
                            <input type="email" />
                        </div>
                    </form>

                    <form>
                        <div className="form-input">
                            <label>Senha</label>
                            <input type="password" />
                        </div>

                        <BtnDefault>
                            Entrar
                        </BtnDefault>

                        <div className="footerlogin">
                            Não tem uma conta?
                            <Link to="/registrar">Registre-se</Link>
                        </div>
                    </form>


                    </AreaLogin>
                </Route>
            </Switch>
                
        </BrowserRouter>
    );
}
