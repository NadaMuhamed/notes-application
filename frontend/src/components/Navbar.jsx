import React from 'react'
import { Link } from 'react-router-dom'
import { PlusIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
        <div className="max-auto max-w-6xl p-4">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-pretty font-mono tracking-tighter">Notes</h1>
                <div className="flex items-center">
                    <Link to={"/create"} className="btn btn-primary">
                    <PlusIcon className="size-5" /> <span>Create</span></Link>
                </div>

            </div>
        </div>
    </header>
  )
}
export default Navbar
