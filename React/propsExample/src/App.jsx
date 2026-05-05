import './App.css'
import Card from './Component/Card';
import Navbar from './Component/Navbar';
import Parent from './Component/Parent';
import Student from './Component/Student'
import User from './Component/User'

function App() {

  let detail=[
    {
      name:"Demo",
      desc:"kljhgfhjkhg",
      age:45

    },
    {
      name:"Atul",
      desc:"uytrertyuiuytr",
      age:46

    }
  ]


  let navLinks=["Home","About","Service","Contact","Blog"]

  // function Demo(){
  //   alert("This is Demo");
  // }

  // let student={
  //   name:"Atul",
  //   age:10
  // }

  // let{name,age}=student

  // console.log(student.age)
  // console.log(age)

    // let name="Sachin"
    // let age=23
    // let num=[1,2,34]

  return (
    <>
      {/* <User name={name} age={age}/>
      <User name="Amogh"/>
      <User arr={num}/> */}

      {/* <Student name="Atul" age={24} /> */}

      {/* <Student Demo={Demo}/> */}

      {/* <Parent name="Demo"/> */}

      {/* <Navbar navLinks={navLinks}/> */}


<section id='parent'>
       {
        detail.map((s,index)=><Card key={index} data={s}/>)
       }
      </section>
    </>
  )
}

export default App
