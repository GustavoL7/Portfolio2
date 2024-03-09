import "./styles/components/app.sass"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="portfolio">
      <h1>Gustavo Lucas</h1>
      <Sidebar /> 
      <MainContent />
    </div>
  )
}

export default App
