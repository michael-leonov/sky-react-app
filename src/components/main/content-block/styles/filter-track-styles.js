import styled from 'styled-components'

export const FilterWrapper = styled.div`
  position: relative;
`

export const FilterBtn = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;

  :not(:last-child) {
    margin-right: 10px;
  }

  :hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }

  :active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
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
