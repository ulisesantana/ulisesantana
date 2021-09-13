import styled from "styled-components"
import { themeGet } from "../../theme"

export const SearchWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  font-size: 1rem;
  height: 100%;
  margin: 24px auto;
  position: relative;
  
  @media (min-width: 990px) {
    width: 900px;
  }
  @media (min-width: 1200px) {
    width: 1050px;
  }
  @media (min-width: 1400px) {
    width: 1170px;
  }
`

export const SearchForm = styled.form`
  margin-left: 8px;
  width: calc(100% - 60px);
  input {
    width: 100%;
    font-weight: normal;
    color: ${themeGet("textColor", "#292929")};
    border: 0;
    background: transparent;
    font-size: 1rem;
    &:focus {
      outline: none;
    }
  }
`

export const SearchResult = styled.div`
  position: absolute;
  width: 100%;
  background: #fff;
  top: 100%;
  left: 0;
  display: block;
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.75);
  z-index: 200;

  .post_list {
    border-bottom: 1px solid #f3f3f3;
    &:last-child {
      border: 0;
    }
  }

  .search-scrollbar {
    @media (max-height: 700px) {
      max-height: 400px !important;
    }
    > div {
      @media (max-height: 700px) {
        max-height: 400px !important;
      }
    }
  }
`

export const SearchResultContainer = styled.div`
  max-height: 405px;
  overflow-x: hidden;
`

export const NoResult = styled.div`
  padding: 30px;
  font-size: 30px;
  text-align: center;
  color: #cccccc;
  @media (max-width: 990px) {
    font-size: 24px;
    padding: 25px;
  }
  @media (max-width: 767px) {
    font-size: 18px;
    padding: 20px;
  }
`
