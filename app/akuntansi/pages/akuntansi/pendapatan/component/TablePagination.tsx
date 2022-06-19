import { ReactNode, FC, useState, useEffect } from "react"
import ReactPaginate from "react-paginate"

type TablePaginationProps = {
  itemsPerPage: number
  items: Array<object>
  setCurrentItems: Function
}

const TablePagination: FC<TablePaginationProps> = ({ itemsPerPage, items, setCurrentItems }) => {
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(items.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(items.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, items, setCurrentItems])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    setItemOffset(newOffset)
  }

  return (
    <ReactPaginate
      activeClassName="bg-blue-200"
      marginPagesDisplayed={1}
      className="divide-x grid grid-flow-col border mt-5 py-3 text-center border-gray-100 rounded"
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel="< previous"
    />
  )
}

export default TablePagination
