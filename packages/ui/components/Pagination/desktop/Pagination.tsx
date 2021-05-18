import React, { FC, memo, useCallback, useMemo } from 'react'
import Link from 'next/link'
import { ConditionalWrapper } from '@rabota/utils/helpers/components'
import { getFullRouterPath, getFullQueryString } from '@rabota/utils/helpers/router'
import SC from '../base/Pagination.styles'
import { IPaginationProps } from '../types'
import { Button } from '../../Button/desktop'
import { ButtonGroup } from '../../ButtonGroup/desktop'
import TriangleArrowLeftIcon from '../../../icons/icon__triangle-arrow_left.svg'
import TriangleArrowRightIcon from '../../../icons/icon__triangle-arrow_right.svg'

const { Block, Dots } = SC

/** Пагинация */
const Pagination: FC<IPaginationProps> = (props) => {
  const { currentPage, totalPages, changePageHandler, router } = props
  const hrefAsWithPage = useCallback(
    (page) => {
      const fullQueryString = getFullQueryString(router, { page }, ['id'])

      return getFullRouterPath(router, fullQueryString)
    },
    [router]
  )

  const getItems = useCallback(
    (startNumber: number, endNumber: number): any => {
      const targetItems: JSX.Element[] = []

      for (let number = startNumber; number <= endNumber; number++) {
        targetItems.push(
          <Link key={number} href={hrefAsWithPage(number)} passHref shallow={false}>
            <Button
              color={number === currentPage ? 'blue' : 'gray25'}
              icon
              view='outline'
              size='small'
              onClick={(): void => changePageHandler(number)}
            >
              {number}
            </Button>
          </Link>
        )
      }

      return targetItems
    },
    [changePageHandler, currentPage, hrefAsWithPage]
  )

  const itemsPagination = useMemo(() => {
    let items: JSX.Element[] = []

    if (totalPages <= 6) {
      items = getItems(1, totalPages)
    } else if (currentPage <= 3) {
      items = getItems(1, 4)
      items.push(<Dots key='dots-1'>...</Dots>)
      items = items.concat(getItems(totalPages, totalPages))
    } else if (currentPage > 3 && currentPage < totalPages - 3) {
      items = getItems(1, 1)
      items.push(<Dots key='dots-2'>...</Dots>)
      items = items.concat(getItems(currentPage - 1, currentPage - 1))
      items = items.concat(getItems(currentPage, currentPage))
      items = items.concat(getItems(currentPage + 1, currentPage + 1))
      items.push(<Dots key='dots-3'>...</Dots>)
      items = items.concat(getItems(totalPages, totalPages))
    } else {
      items = getItems(1, 1)
      items.push(<Dots key='dots-5'>...</Dots>)
      items = items.concat(getItems(totalPages - 3, totalPages))
    }

    return items
  }, [currentPage, getItems, totalPages])

  return (
    <Block>
      <ButtonGroup spacing='small'>
        <ConditionalWrapper
          condition={currentPage !== 1}
          wrapper={(children): JSX.Element => (
            <Link href={hrefAsWithPage(currentPage - 1)} passHref>
              {children}
            </Link>
          )}
        >
          <Button
            color='blue'
            icon
            size='small'
            onClick={(): void => changePageHandler(currentPage - 1)}
            disabled={currentPage === 1}
            title='Предыдущая страница'
          >
            <TriangleArrowLeftIcon />
          </Button>
        </ConditionalWrapper>

        {itemsPagination}

        <ConditionalWrapper
          condition={currentPage !== totalPages}
          wrapper={(children): JSX.Element => (
            <Link href={hrefAsWithPage(currentPage + 1)} passHref>
              {children}
            </Link>
          )}
        >
          <Button
            color='blue'
            icon
            size='small'
            onClick={(): void => changePageHandler(currentPage + 1)}
            disabled={currentPage === totalPages}
            title='Следующая страница'
          >
            <TriangleArrowRightIcon />
          </Button>
        </ConditionalWrapper>
      </ButtonGroup>
    </Block>
  )
}

export { Pagination }
export default memo(Pagination)
