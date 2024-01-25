"use client"

export default function TestButton() {
  function berra() {
    console.log("aaa")
  }
  return (
    <button onClick={berra} className="border rounded-lg bg-green-500 px-6 py-1">Test</button>
  )
}