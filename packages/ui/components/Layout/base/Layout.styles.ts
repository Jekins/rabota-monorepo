import styled from 'styled-components'

const Body = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
`

export default { Main, Content, Body }
