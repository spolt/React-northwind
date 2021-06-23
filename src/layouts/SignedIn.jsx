import React from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://lh3.googleusercontent.com/ogw/ADea4I5ZVdnKlxGOI-LSN9lceMOyajBqSv4M1V23m7yD=s32-c-mo"/>
                <Dropdown pointing="top left" text="Semih">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={props.signOut} text="Çıkış yap" icon="info"/>
                       
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
