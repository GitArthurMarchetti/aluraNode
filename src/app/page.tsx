"use client"

import Image from "next/image";
import TestButton from "./components/testButton";

import { useState } from "react";

export default function Home() {
  const [state, setState] = useState(["","","","x","","","","","",])

  function play(position){
    state[position] = "x" 
    setState([...state])
    console.log(state)
  }

  return (
    <table className="m-auto mt-10 shadow-lg">
      <tbody>
        <tr>
          <td onClick={() => play(0)} className="w-16 h-16 text-center border hover:bg-slate-50">{state[0]}</td>
          <td onClick={() => play(1)} className="w-16 h-16 text-center border hover:bg-slate-50">{state[1]}</td>
          <td onClick={() => play(2)} className="w-16 h-16 text-center border hover:bg-slate-50">{state[2]}</td>
        </tr>
        <tr>
          <td onClick={() => play(3)} className="w-16 h-16 text-center border hover:bg-slate-50">{state[3]}</td>
          <td onClick={() => play(4)} className="w-16 h-16 text-center border hover:bg-slate-50">{state[4]}</td>
          <td onClick={() => play(5)} className="w-16 h-16 text-center border hover:bg-slate-50">{state[5]}</td>
        </tr>
        <tr>
          <td onClick={() => play(6)} className="w-16 h-16 text-center border hover:bg-slate-50">{state[6]}</td>
          <td onClick={() => play(7)} className="w-16 h-16 text-center border hover:bg-slate-50">{state[7]}</td>
          <td onClick={() => play(8)} className="w-16 h-16 text-center border hover:bg-slate-50">{state[8]}</td>
        </tr>
      </tbody>
    </table>
  )
}
