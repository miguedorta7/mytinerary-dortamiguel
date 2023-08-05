import NavBar from "../components/NavBar"


export default function MainLayout({children}) {
  return (
      <div>
        <NavBar />

        {children}

      </div>
  )
}
