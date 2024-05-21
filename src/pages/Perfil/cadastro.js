import { Link } from "react-router-dom";
import cadastro from "../../assets/login.png"
import React, { useContext} from "react";
import Header from '../../components/Header'
import {Formik, Form, Field } from 'formik'
import { AuthContext } from "../../context/auth";

export default function Cadastro(){
    const {user, handleInput, handleClick, confirmEmail, confirmPassword, setConfirmEmail, setConfirmPassword} = useContext(AuthContext)

    return(
        <>
        <Header/>
        <section className="bg-blue-950 py-2">
        <div className="block items-center text-center" >
            <h5 className="my-2 text-center text-2xl font-bold text-amber-500">CADASTRO</h5>
                <img alt="cadastro" src={cadastro} className="my-2 mx-auto"/>
                <Formik initialValues={{}} onSubmit={handleClick}>
                    <Form className="block">
                    <div className="flex flex-col justify-center items-center">
                                <span className="text-black text-xl font-bold">Nome Completo *</span>
                                <Field type="text" onChange={handleInput} value={user.name} name="name" placeholder="João Passos da Silva" className="border-2 border-solid border-black p-2 rounded-xl my-2 w-2/3 md:w-1/3" minLength="4"></Field>
                                
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                <span className="text-black text-xl font-bold">E-mail *</span>
                                <Field type="email"  onChange={handleInput} value={user.email} name="email" placeholder="joaosilva@gmail.com" className="border-2 border-solid border-black p-2 rounded-xl my-2 w-2/3 md:w-1/3" required></Field>
                                
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                <span className="text-black text-xl font-bold">Confirmar e-mail *</span>
                                <Field type="email" onChange={(e)=>setConfirmEmail(e.target.value)} value={confirmEmail} name="confirmEmail" placeholder="joaosilva@gmail.com" className="border-2 border-solid border-black p-2 rounded-xl my-2 w-2/3 md:w-1/3" required></Field>
                                
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                <span className="text-black text-xl font-bold">Senha *</span>
                                <Field type="password"  onChange={handleInput} value={user.password} name="password" placeholder="*******" className="border-2 border-solid border-black p-2 rounded-xl my-2 w-2/3 md:w-1/3" required minLength="8"></Field>
                                
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                <span className="text-black text-xl font-bold">Confirmar senha *</span>
                                <Field type="password" onChange={(e)=> setConfirmPassword(e.target.value)} value={confirmPassword} name="confirmPassword" placeholder="*******" className="border-2 border-solid border-black p-2 rounded-xl my-2 w-2/3 md:w-1/3" required minLength="8"></Field>
                                
                                </div>
                                <div className="flex gap-1 m-5 justify-end">
                            <Link to="/"><button type="button" className="border-1 border-solid border-blue-950
                            bg-blue-950 rounded-xl p-3 text-white">Cancelar</button></Link>
                            <button type="submit" className="border-1 border-solid rounded-xl border-amber-500 bg-amber-500 p-3 text-white"
                            onClick={handleClick}>Cadastrar</button>
            
                        </div>
                        <p className="text-end m-3">Já possui conta? <Link to="/perfil/login" className="border-1 border-solid border-white font-bold">Entrar</Link></p>
                    </Form>
                </Formik>
                    
                </div>
             
                
                </section>
        
        </>
    )
}