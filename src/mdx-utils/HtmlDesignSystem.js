export function P (props) {
    return <h1 className="text-lg" {...props}></h1>
}

export function H1 (props) {
    const { className, children, ...otherProps } = props;
    let _className = "";
    if (className) {
        _className = " " + className;
    }
    return <h1 className={"text-4xl font-bold" + _className} {...otherProps} >{children}</h1>
}

export function H2 (props) {
    return <h1 className="text-3xl font-bold" {...props}></h1>
}

export function H3 (props) {
    return <h1 className="text-2xl font-bold" {...props}></h1>
}

export function H4 (props) {
    return <h1 className="text-xl font-bold" {...props}></h1>
}

export function H5 (props) {
    return <h1 className="text-lg font-bold" {...props}></h1>
}

export function H6 (props) {
    return <h1 className="text-base font-bold" {...props}></h1>
}

// non-default html
export function H1Title(props) {
    const { className, children, ...otherProps } = props;
    let _className = "";
    if (className) {
        _className = className + " ";
    }
    return <H1 className={ _className + "text-center bg-siteGreen text-white p-3 rounded-lg" } {...otherProps}>{children}</H1>
}

export const htmlElements = {
    // basic html tags
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    p: P,
    // more components

}