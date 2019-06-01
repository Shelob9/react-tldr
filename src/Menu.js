import React, {Fragment} from 'react'
import {Link as GoLink} from "mdx-go";
import {Box} from "rebass";


function SingleMenuItem(path, name, goLinkStyle) {
    return <GoLink
        key={path}
        href={path}
        children={name}
        style={goLinkStyle}
    />;
}

function MenuSection({children}){
    return <Box ml={1}>{children}</Box>
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
                <MenuSection key={path}>
                    {SingleMenuItem(path, name, goLinkStyle)}
                    {children.map(({name, path, children}) => {
                        return (
                            <MenuSection key={path}>
                                <GoLink
                                    key={path}
                                    href={path}
                                    children={name}
                                    style={{
                                        ...goLinkStyle,
                                        paddingLeft: goLinkStyle.paddingLeft + 8
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
                                                    paddingLeft: goLinkStyle.paddingLeft + 20
                                                }}
                                            />
                                        );
                                    })}
                                </Fragment>
                                }
                                <Box
                                    as='hr'
                                    ml={1}
                                    css={{
                                        border: 0,
                                    }}
                                />
                            </MenuSection>

                        )
                    })
                    }
                </MenuSection>
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
        color: 'white'
    }
}
