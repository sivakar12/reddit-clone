import Link from "next/link";
import React from "react";

export default function NavBar() {
    const [open, setOpen] = React.useState(false);
    const classNameForMenu = open ? "navbar-menu is-active" : "navbar-menu";

    const LinkClosingMenu = (props: any) => {
        return (
            <Link {...props} onClick={() => setOpen(false)}>
                {props.children}
            </Link>
        );
    }

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <LinkClosingMenu className="navbar-item" href="/">
                    {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/> */}
                    <strong>Reddit Clone</strong>
                </LinkClosingMenu>
                
                <a role="button" className="navbar-burger" aria-label="menu" 
                        aria-expanded="false" data-target="navbarBasicExample"
                        onClick={() => setOpen(o => !o)}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
        
            <div id="navbarBasicExample" className={classNameForMenu}>
                <div className="navbar-start">
                    <LinkClosingMenu className="navbar-item" href="/groups" onClick={() => setOpen(false)}>
                        Groups
                    </LinkClosingMenu>
                    <LinkClosingMenu className="navbar-item" href="/inbox" onClick>
                        Inbox
                    </LinkClosingMenu>
                
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            More
                        </a>
                    
                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                About
                            </a>
                            <a className="navbar-item">
                                Contact
                            </a>
                            <hr className="navbar-divider"/>
                            <a className="navbar-item">
                                Report an issue
                            </a>
                        </div>
                    </div>
                </div>
            
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        );
    };