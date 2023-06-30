import React from "react"
import Header from "@/components/Header"
import Body from "@/components/Body"
import Footer from "@/components/Footer"
import Todo from "@/components/Todo"
const home = () => {
  return <>
     <div className="overflow-x-hidden">
     <Header/>
     <Body/>
     <Footer/>
     </div>
     <Todo/>
  </>
}

export default home;