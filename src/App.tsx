import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PropostaPage } from './pages/PropostaPage'

function Home() {
  return (
    <div style={{ padding: '60px', textAlign: 'center' }}>
      <h1 style={{ color: 'var(--gold)' }}>thiagowessley-propostas</h1>
      <p style={{ color: 'var(--muted)', marginTop: '16px' }}>
        Acesse uma proposta pelo link enviado.
      </p>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/p/:slug" element={<PropostaPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
