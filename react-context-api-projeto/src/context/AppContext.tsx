/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react'
import { IUsuario, ITransacao } from '../types'
import { criarTransacao, criarUsuario, obterTransacoes, obterUsuario } from '../services';

interface AppContextType {
  usuario: IUsuario | null;
  criaUsuario: (usuario: Omit<IUsuario, "id">) => Promise<void>;
  transacoes: ITransacao[];
  criaTransacao: (novaTransacao: Omit<ITransacao, "id">) => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined)

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [usuario, setUsuario] = useState<IUsuario | null>(null)
  const [transacoes, setTransacoes] = useState<ITransacao[]>([])

  const carregaDadosUsuario = async () => {
    try {
      const usuarios = await obterUsuario();
      const transacoesRes = await obterTransacoes();
      if (usuarios.length > 0) {
        setUsuario(usuarios[0])
        setTransacoes(transacoesRes)
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    carregaDadosUsuario()
  }, [])

  const criaUsuario = async (usuario: Omit<IUsuario, "id">) => {
    try {
      const novoUsuario = await criarUsuario(usuario);
      setUsuario(novoUsuario)
    } catch (err) {
      console.error(err)
    }
  }

  const criaTransacao = async (novaTransacao: Omit<ITransacao, "id">) => {
    try {
      const transacaoCriada = await criarTransacao(novaTransacao);
      setTransacoes((prev) => ([...prev, transacaoCriada]))
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <AppContext.Provider value={{ usuario, criaUsuario, transacoes, criaTransacao }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;

export const useAppContext = () => {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error ("useAppContext deve ser usado dentro de um Provider")
  }

  return context;
}