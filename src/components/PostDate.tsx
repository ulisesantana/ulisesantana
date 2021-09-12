import * as React from "react";
import {DateHelper} from "../dateHelper";
import styled from "styled-components";
import {themeGet} from "styled-system";

const PostDateStyle = styled.div`
  font-size: 90px;
  font-weight: 700;
  text-align: center;
  width: 100%;
  height: 100%;
  line-height: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${themeGet("colors.textColor", "#292929")};
  transition: 0.35s ease-in-out;
  @media (max-width: 1200px) {
    font-size: 70px;
  }
  @media (max-width: 990px) {
    font-size: 56px;
  }
  @media (max-width: 575px) {
    display: none;
  }

  > span {
    font-size: 13px;
    font-weight: 400;
    display: block;
    margin-top: 12px;
    text-transform: uppercase;
  }
`

export const PostDate: React.FunctionComponent<{date: string}> = ({date}) => {
  const {day, month, year} = DateHelper.getDate(date)
  return (
    <PostDateStyle className="post_date">
      {day}
      <span>{month} {year}</span>
    </PostDateStyle>
  )
}
