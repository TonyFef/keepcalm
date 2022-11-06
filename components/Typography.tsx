import { ElementType } from "react";
import {Typography } from "../types/types";

const ValidElementTypes: readonly ElementType[] = [
    'h1',
    'h2',
    'h3',
    'h4',
    'span',
    'p',
] as const;

const getElementType = (stringTag: string): ElementType => {
    if (ValidElementTypes.includes(stringTag as ElementType)) {
        return stringTag as ElementType;
    }
    return 'span';
};

const Typography = ({ tag, text }: Typography) => {
    const Component = tag ? getElementType(tag) : 'span';
    
    return <Component>{text}</Component>
};
  
  export default Typography;

