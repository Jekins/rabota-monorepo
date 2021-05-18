import React, { FC, Fragment, memo } from 'react'
import Link from 'next/link'
import { ConditionalWrapper } from '@rabota/utils/helpers/components'
import SC from '../base/Heading.styles'
import { IHeadingProps, IModHeadingIconSize } from '../types'
import { Text } from '../../Text/desktop'

const { Block, Icon, H1, H2, H3, H4, H5, H6 } = SC

/** Заголовок */
const Heading: FC<IHeadingProps> = (props) => {
  const {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    as,
    html = true,
    StartIcon,
    href = '',
    hrefAs,
    spa = false,
    spacing,
    color,
    textAlign,
    iconSpacing = 'xxsmall',
    iconBreak,
    wordBreak = 'break-word',
    id,
    ...otherProps
  } = props
  const headersText = [h1, h2, h3, h4, h5, h6]
  const headersTags = [H1, H2, H3, H4, H5, H6]

  const headingContent = (h, index): JSX.Element => (
    <>
      {StartIcon && (
        <Icon
          size={`h${index + 1}` as IModHeadingIconSize['size']}
          iconSpacing={iconSpacing}
        >
          {StartIcon}
        </Icon>
      )}
      <Text wordBreak={wordBreak} as='span' html={html}>
        {h}
      </Text>
    </>
  )

  return (
    <Block
      id={id}
      spacing={spacing}
      color={color}
      textAlign={textAlign}
      iconBreak={iconBreak}
      {...otherProps}
    >
      {headersText.map((h, index) => {
        const ComponentH = headersTags[index]

        return (
          <Fragment key={index}>
            {h && (
              <ComponentH as={as}>
                <ConditionalWrapper
                  condition={spa}
                  wrapper={(children): JSX.Element => (
                    <Link as={hrefAs} href={href}>
                      {children}
                    </Link>
                  )}
                >
                  {href ? (
                    <a href={href}>{headingContent(h, index)}</a>
                  ) : (
                    headingContent(h, index)
                  )}
                </ConditionalWrapper>
              </ComponentH>
            )}
          </Fragment>
        )
      })}
    </Block>
  )
}

export { Heading }
export default memo(Heading)
