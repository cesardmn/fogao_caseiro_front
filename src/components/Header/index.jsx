import { MenuHeader, SocialIcons } from './styles'

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Menu() {

  return (
    <MenuHeader >
      <div className="bg"></div>

      <img src="https://www.fogaocaseiro.com.br/imgs/logo.png" alt="" />


      <SocialIcons >
        <ul>
          <a href="https://wa.me/5521999374814" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>

            <li>
              <WhatsAppIcon />
              <span>(21) 999 37 48 14</span>
            </li>
          </a>

          <a href="https://www.instagram.com/fogaocaseirooficial/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>

            <li>
              <InstagramIcon />
              <span>@fogaocaseirooficial</span>
            </li>
          </a>
        </ul>
      </SocialIcons>
    </MenuHeader>
  )
}