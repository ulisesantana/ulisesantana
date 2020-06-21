import React from "react";
import {Language} from "../types";

export const LangIcon = ({lang}:{lang: Language}) => <span>{!!lang && (lang === 'es' ? '🇪🇸' : '🇬🇧' )}</span>