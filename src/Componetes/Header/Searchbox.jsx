import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { debounce } from "lodash";
import './SearchBoxForm.css'

function Search() {
  const navigate = useNavigate()
  const [search, setSearch] = useState("")
  const [suggition, setsuggition] = useState([])
  const [loading, setLoading] = useState(false)

  const handSearch = (e) => {
    e.preventDefault()
    if (search.trim()) {
      navigate(`/Search?query=${encodeURIComponent(search.trim())}`)
    }
  }

  const handleChange = debounce((value) => {
    setSearch(value)
    if (!value.trim()) {
      setsuggition([])
      return
    }
  }, 500)

  useEffect(() => {
    if (!search.trim()) {
      setsuggition([])
      return
    }
    setLoading(true)
    fetch(`https://dummyjson.com/products/search?q=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setsuggition(data.products || [])
      })
      .catch((error) => {
        console.log("the error is", error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [search])

  return (
    <div className='Search'>
      <form onSubmit={handSearch} className="search flex items-center gap-2">
        <input
          placeholder="Search..."
          className="input shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-56 transition-all focus:w-64 outline-none"
          name="search"
          type="search"
          onChange={(e) => handleChange(e.target.value)}
        />
        <button type="submit" className="p-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition">
          <FaSearch />
        </button>
      </form>

      {loading && <div className="mt-3 text-gray-500">Loading...</div>}

      {!loading && suggition.length > 0 && (
        <ul className='suggition_List mt-3 bg-white shadow-lg rounded-xl overflow-hidden'>
          {suggition.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer transition"
            >
              <Link to={`/products/${item.id}`} onClick={() => setsuggition([])}>
                <div className="flex items-center gap-3">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <span className="font-semibold">{item.title}</span>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Search
