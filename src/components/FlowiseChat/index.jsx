import PropTypes from 'prop-types'
import { BubbleChat } from 'flowise-embed-react'
import { useContext } from 'react'

import { AuthContext } from '../../context/AuthContext'

const FlowiseChat = ({ isopen }) => {
  const { user } = useContext(AuthContext)

  return (
    <>
      {!user || (isopen && window.innerWidth < 768) ? null : (
        <BubbleChat
          chatflowid="bdea5f37-b6ed-4ef6-bb87-800dc1f10849"
          apiHost="https://rochagabriell-chatfit.hf.space"
          theme={{
            button: {
              backgroundColor: 'var(--btn-selected)',
              right: 20,
              bottom: 20,
              size: 'medium',
              iconColor: 'white',
              customIconSrc:
                'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg'
            },
            chatWindow: {
              welcomeMessage: `Olá ${user.username}, como posso te ajudar?`,
              backgroundColor: 'var(--secondary)',
              height: 500,
              width: 400,
              fontSize: 16,
              poweredByTextColor: 'var(--quaternary)',
              botMessage: {
                backgroundColor: 'var(--tertiary)',
                textColor: '#303235',
                showAvatar: true,
                avatarSrc:
                  'https://avatars.githubusercontent.com/u/53454609?v=4'
              },
              userMessage: {
                backgroundColor: 'var(--btn-selected)',
                textColor: '#ffffff',
                showAvatar: true,
                avatarSrc:
                  'https://avatars.githubusercontent.com/u/53454609?v=4'
              },
              textInput: {
                placeholder: 'Escreva sua mensagem...',
                backgroundColor: 'var(--tertiary)',
                textColor: 'var(--primary)',
                sendButtonColor: 'var(--btn-selected)'
              }
            }
          }}
        />
      )}
    </>
  )
}

FlowiseChat.propTypes = {
  isopen: PropTypes.bool.isRequired
}

export default FlowiseChat
