import styled, { StyledProps } from 'styled-components'
import { sv } from '@rabota/utils/helpers/styles/variables'
import { sm } from '@rabota/utils/helpers/styles/mixins'
import {
  EModActive,
  EModFocused,
  IModActive,
  IModFocused,
} from '@rabota/utils/helpers/styles/mod.types'

const Input = styled.input<StyledProps<any>>`
  padding: ${sv.spacing.xsmall};
  color: currentColor;
  width: 100%;
  border: 0;
  height: 1.5em;
  margin: 0;
  display: block;
  min-width: 0;
  background: none;
  box-sizing: content-box;
  animation-name: mui-auto-fill-cancel;
  animation-duration: 10ms;
  -webkit-tap-highlight-color: transparent;
  transition: ${sv.duration.fast};
  ${sm.font.medium};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`

const Label = styled.label<StyledProps<IModActive>>`
  color: ${sv.color.gray60};
  display: block;
  transform-origin: top left;
  top: 0;
  left: 0;
  position: absolute;
  transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  z-index: 1;
  transform: translate(12px, ${sv.spacing.small}) scale(1);
  pointer-events: none;
  ${sm.font.medium};
  line-height: 1;

  ${sm.mod(EModActive.true)`
    transform: translate(12px, -6px) scale(0.75);
  `};
`

const Fieldset = styled.fieldset.attrs(() => ({
  'aria-hidden': true,
}))`
  top: -5px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0 7px;
  overflow: hidden;
  position: absolute;
  border-style: solid;
  border-width: 1px;
  border-radius: inherit;
  pointer-events: none;
  border-color: ${sv.color.gray15};
  transition: ${sv.duration.fast};
`

const Legend = styled.legend<StyledProps<IModActive>>`
  width: auto;
  height: 11px;
  display: block;
  padding: 0;
  margin: 0;
  font-size: 0.78em;
  max-width: 0.01px;
  text-align: left;
  transition: max-width 50ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  visibility: hidden;

  ${sm.mod(EModActive.true)`
    max-width: 1000px;
    transition: max-width 100ms cubic-bezier(0, 0, 0.2, 1) 50ms;
    padding-left: ${sv.spacing.usmall};
    padding-right: ${sv.spacing.usmall};
  `};
`

const Inner = styled.div`
  position: relative;
  border-radius: ${sv.radius.medium};
  color: rgba(0, 0, 0, 0.87);
  cursor: text;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  ${sm.font.medium};
`

const Block = styled.div<StyledProps<IModFocused>>`
  border: 0;
  margin: 0;
  padding: 0;
  position: relative;
  min-width: 0;
  flex-direction: column;
  vertical-align: top;
  height: 40px;

  &:hover {
    ${Input},
    ${Label} {
      color: ${sv.color.cobalt};
    }

    ${Fieldset} {
      border-color: ${sv.color.cobalt};
    }
  }

  ${sm.mod(EModFocused.true)`
    &,
    &:hover {
      ${Input} {
        color: ${sv.color.black};
      }

      ${Label} {
        color: ${sv.color.blue};
      }

      ${Fieldset} {
        border-color: ${sv.color.blue};
      }
    }
  `};
`

export default { Block, Inner, Legend, Fieldset, Label, Input }
