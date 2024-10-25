import './App.css'
import React from 'react'
import { Particle } from './components/particles/Particles'
import { Container } from './components/styles-components/container/Container'
import { Footer } from './layout/footer/Footer'
import { Header } from './layout/header/Header'
import { Hero } from './layout/sections/hero/Hero'
import { Questions } from './layout/sections/questions/Questions'
import { Skills } from './layout/sections/skills/Skills'
import { Works } from './layout/sections/works/Works'
import { GlobalStyled } from './styles/Global.styled'


function App() {
	return (
		<div className='App'>
			<Particle/>
			<GlobalStyled/>
			<Container>
				<Header />
				<Hero />
				<Skills />
				<Works/>
				<Questions/>
				<Footer/>
			</Container>
		</div>
	)
}

export default App



