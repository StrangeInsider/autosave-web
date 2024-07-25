import React from 'react'
import {Button, Pane} from "evergreen-ui"
import Header from '../../components/common/header'
import './index.css'

const home = () => {
  return (
    <Pane>
      <Pane className="h-screen">
        <Pane><Header /></Pane>
        <Pane className="welcomePage">
          <Pane className="flex flex-col gap-5">
            <Pane className="font-bold text-5xl font-bpg">აუტოსერვისი</Pane>
            <Pane className='font-fira'>ავტოსეივი არის წამყვანი კომპანია, რომელიც სპეციალიზებულია მანქანის შუშების დაბურვაში. ჩვენი მიზანია, თქვენს ავტომობილს მივცეთ როგორც ესთეტიკური, ასევე ფუნქციონალური გაუმჯობესება. ჩვენ ვიყენებთ მხოლოდ უმაღლესი ხარისხის მასალებს და ვთავაზობთ მომსახურების სრულ გარანტიას, რათა თქვენი კომფორტი და უსაფრთხოება მუდამ დაცული იყოს. ჩვენი პროფესიონალი გუნდი უზრუნველყოფს თითოეული დეტალის მაღალ დონეზე შესრულებას, რაც გვეხმარება ვიყოთ თქვენი სანდო პარტნიორი ავტომობილის შუშების დაბურვაში.</Pane>
            <Pane className="w-min"><Pane className=" select-none cursor-pointer font-bpg bg-black rounded-xl text-white flex w-[299px] h-[72px] text-xl font-light flex justify-center items-center">დაჯავშნე ვიზიტი</Pane></Pane>
          </Pane>
          <Pane>2</Pane>
        </Pane>
      </Pane>
      <Pane className="h-screen">2</Pane>
    </Pane>
  )
}

export default home