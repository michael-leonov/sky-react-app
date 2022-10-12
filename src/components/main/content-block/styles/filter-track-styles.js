import styled from 'styled-components'

export const FilterWrapper = styled.div`
  position: relative;
`

export const FilterModal = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 10px;
  border-radius: 12px;
  padding: 34px;
  max-height: 305px;
  overflow-y: scroll;
  background-color: #313131;
`

export const FilterModalList = styled.ul`
  font-size: 24px;
`
export const FilterModalItem = styled.li`
  :not(:last-child) {
    margin-bottom: 28px;
  }
`
