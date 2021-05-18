import { useEffect, useMemo, useState } from 'react'
import { NextRouter } from 'next/router'
import { getQueryValueByRouter } from '../helpers/router'

interface IUsePagination {
  (itemList: any[], maxItemsPerPage: number, router: NextRouter): {
    setItemList(newItems: any[]): void
    isPaginating: boolean
    currentPage: number
    setCurrentPage(pageNumber: number): void
    pageItems: number[]
    totalPages: number
  }
}

const displayItem = (currentPage: number, maxPerPage: number, index: number): boolean => {
  const currentPageStart = (currentPage - 1) * maxPerPage + 1
  const currentPageEnd = currentPage * maxPerPage

  return index + 1 >= currentPageStart && index + 1 <= currentPageEnd
}

/** Хук с логикой для пагинации */
export const usePagination: IUsePagination = (itemList, maxItemsPerPage = 10, router) => {
  const [items, setItems] = useState(itemList)
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = useMemo(() => Math.ceil(itemList.length / maxItemsPerPage), [
    itemList.length,
    maxItemsPerPage,
  ])

  const isPaginating = useMemo(() => itemList.length > maxItemsPerPage, [
    itemList.length,
    maxItemsPerPage,
  ])

  const pageItems = items.filter((_, index) => {
    if (!isPaginating) return true

    return displayItem(currentPage, maxItemsPerPage, index)
  })

  const setItemList = (newItems): void => {
    setCurrentPage(1)
    setItems(newItems)
  }

  useEffect(() => {
    setItems(itemList)
  }, [JSON.stringify(itemList)])

  useEffect(() => {
    const queryValue = getQueryValueByRouter(router, 'page')
    const pageNumber = (queryValue && Number(queryValue)) || 1

    setCurrentPage(pageNumber)
  }, [router, router?.events, router?.query?.page, setCurrentPage])

  return {
    setItemList,
    isPaginating,
    currentPage,
    setCurrentPage,
    pageItems,
    totalPages,
  }
}
