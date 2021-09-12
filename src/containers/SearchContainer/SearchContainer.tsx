import React, { useReducer, useEffect } from "react"
import SearchReducer, { initialState } from "./SearchReducer"
import { useStaticQuery, graphql } from "gatsby"
import { Scrollbars } from "react-custom-scrollbars"
import { rebuildIndex } from "./SearchIndexBuilderFunction"
import PostList from "../../components/PostList/PostList"
import {
  SearchWrapper,
  SearchForm,
  SearchResult,
  NoResult,
} from "./SearchContainer.style"
import {FaSearch} from "react-icons/all"

function Search() {
  const [state, dispatch] = useReducer(SearchReducer, initialState)

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark ( filter: { frontmatter: { draft: { nin: [true] } } } ){
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date
              title
              description
              tags
              cover {
                childImageSharp {
                  fluid(maxWidth: 62, maxHeight: 62, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const dataset = data.allMarkdownRemark.edges

  /**
   * handles the input change and perfom a search with js-search
   * in which the results will be added to the state
   */
  const searchData = (e: any) => {
    const { search } = state
    const queryResult = search.search(e.target.value)
    dispatch({
      type: "SET_SEARCH_QUERY",
      payload: { searchQuery: e.target.value, searchResults: queryResult },
    })
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
  }
  useEffect(() => {
    if (dataset.length !== 0) {
      const data: any = dataset.map(({ node: {frontmatter, fields} }: any) => ({
        ...frontmatter,
        slug: fields.slug
      }))
      dispatch({ type: "SET_DATA", payload: data })
      const dataToSearch = rebuildIndex(data)
      if (dataToSearch) {
        dispatch({
          type: "SET_SEARCH",
          payload: dataToSearch,
        })
      }
    }
  }, [dataset])

  const { searchResults, searchQuery } = state
  const queryResults = searchResults

  return (
    <SearchWrapper>
      <FaSearch/>
      <SearchForm onSubmit={handleSubmit}>
        <input
          id="Search"
          value={searchQuery}
          onChange={searchData}
          placeholder="Busca entre mis artículos"
        />
      </SearchForm>
      <SearchResult>
        {queryResults.length == 0 && searchQuery !== "" ? (
          <NoResult>No se ha encontrado nada por "{searchQuery}"</NoResult>
        ) : (
          ""
        )}

        {queryResults.length !== 0 && (
          <Scrollbars
            autoHeight={true}
            autoHeightMax={505}
            className="search-scrollbar"
          >
            {queryResults.map((item: any) => {
              return (
                <PostList
                  key={item.slug}
                  title={item.title}
                  url={item.slug}
                  image={
                    item.cover == null ? null : item.cover.childImageSharp.fluid
                  }
                  date={item.date}
                  tags={item.tags}
                />
              )
            })}
          </Scrollbars>
        )}
      </SearchResult>
    </SearchWrapper>
  )
}

export default Search
