import React from 'react'

export default function CustomValue({ onSubmit }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
          <input
            type="number"
            className="mt-5 p-2 w-3/4 text-white font-semibold bg-black rounded focus:outline-0"
            name="name"
            placeholder="Set custom value..."
          />
          <button
            type="submit"
            className="bg-orange-500 px-4 py-2 rounded font-semibold text-white ml-2"
          >
            Enter
          </button>
        </form>
    </div>
  )
}
