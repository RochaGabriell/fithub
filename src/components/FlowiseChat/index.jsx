import PropTypes from 'prop-types'
import { BubbleChat } from 'flowise-embed-react'

const FlowiseChat = ({ isOpen }) => {
  return (
    <>
      {isOpen && window.innerWidth < 768 ? null : (
        <BubbleChat
          chatflowid="90352b4b-eb23-49a0-83e4-a3f87180c2ad"
          apiHost="https://flowisellm-k05b.onrender.com"
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
              welcomeMessage: 'Olá! Como posso ajudar?',
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
  isOpen: PropTypes.bool.isRequired
}

export default FlowiseChat
