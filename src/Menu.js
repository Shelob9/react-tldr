import React, {Fragment} from 'react'
import {Link as GoLink} from "mdx-go";


function SingleMenuItem(path, name, goLinkStyle) {
    return <GoLink
        key={path}
        href={path}
        children={name}
        style={goLinkStyle}
    />;
}

export const Menu = ({nav, goLinkStyle}) => (
    <Fragment>
        {nav.map(({name, path, children}) => {
            if (!children) {
                return (
                    <GoLink
                        key={path}
                        href={path}
                        children={name}
                        style={goLinkStyle}
                    />
                )
            }
            return (
                <Fragment>
                    {SingleMenuItem(path, name, goLinkStyle)}
                    {children.map(({name, path, children}) => {
                        return (
                            <Fragment>
                                <GoLink
                                    key={path}
                                    href={path}
                                    children={name}
                                    style={{
                                        ...goLinkStyle,
                                        paddingLeft: goLinkStyle.paddingLeft + 4
                                    }}
                                />
                                {children &&
                                    <Fragment>
                                        {children.map(item => {
                                            const name = item.name;
                                            const itemPath = path + item.path;
                                           return (
                                               <GoLink
                                                   key={itemPath}
                                                   href={itemPath}
                                                   children={name}
                                                   style={{
                                                       ...goLinkStyle,
                                                       paddingLeft: goLinkStyle.paddingLeft + 8
                                                   }}
                                               />
                                           );
                                        })}
                                    </Fragment>

                                }
                            </Fragment>

                        )


                    })
                    }
                </Fragment>
            )
        })}
    </Fragment>
);

Menu.defaultProps = {
    goLinkStyle: {
        display: 'block',
        fontWeight: 'bold',
        fontSize: 14,
        textDecoration: 'none',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 4,
        paddingBottom: 4,
        color: 'inherit',
    }
}
