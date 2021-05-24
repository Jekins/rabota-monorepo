import styled from 'styled-components'
import { sv } from '@rabota/utils/helpers/styles/variables'

const TestMessagesBody = styled.div`
  max-width: 720px;
  margin: ${sv.spacing.xlarge} auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
  width: 100%;
`

const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const TestBlock = styled.div`
  background-color: ${sv.color.silver};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export default { TestBlock, TestContainer, TestMessagesBody }
